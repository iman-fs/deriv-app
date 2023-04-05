import PropTypes from 'prop-types';
import React from 'react';
import Loadable from 'react-loadable';
import { observer, StoreProvider, useStore } from '@deriv/stores';
import Routes from 'App/Containers/Routes/routes.jsx';
import TradeHeaderExtensions from 'App/Containers/trade-header-extensions.jsx';
import TradeFooterExtensions from 'App/Containers/trade-footer-extensions.jsx';
import TradeSettingsExtensions from 'App/Containers/trade-settings-extensions.jsx';
import { NetworkStatusToastErrorPopup } from 'Modules/Trading/Containers/toast-popup.jsx';
import { MobxContentProvider } from 'Stores/connect';
import initStore from './init-store.js'; // eslint-disable-line import/extensions
import 'Sass/app.scss';

type Apptypes = {
    passthrough: {
        root_store: any;
        WS: any;
    };
};

const ExchangeRates = observer(() => {
    const { exchange_rates } = useStore();

    return (
        <div
            style={{
                backgroundColor: 'red',
                fontSize: 50,
                padding: 50,
                position: 'absolute',
                zIndex: 9999,
                top: 0,
                left: 0,
            }}
        >
            <p>data: {JSON.stringify(exchange_rates.data)}</p>
        </div>
    );
});

const TradeModals = Loadable({
    loader: () => import(/* webpackChunkName: "trade-modals", webpackPrefetch: true */ './Containers/Modals'),
    loading: () => null,
});

const App = ({ passthrough }: Apptypes) => {
    const [root_store] = React.useState(initStore(passthrough.root_store, passthrough.WS));
    React.useEffect(() => {
        return () => root_store.ui.setPromptHandler(false);
    }, [root_store]);

    return (
        <MobxContentProvider store={root_store}>
            <StoreProvider store={root_store}>
                <Routes />
                <ExchangeRates />
                <TradeModals />
                <NetworkStatusToastErrorPopup />
                <TradeHeaderExtensions store={root_store} />
                <TradeFooterExtensions />
                <TradeSettingsExtensions store={root_store} />
            </StoreProvider>
        </MobxContentProvider>
    );
};

App.propTypes = {
    passthrough: PropTypes.shape({
        root_store: PropTypes.object,
        WS: PropTypes.object,
    }),
};

export default App;
