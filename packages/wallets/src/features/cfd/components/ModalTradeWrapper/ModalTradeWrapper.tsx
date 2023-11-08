import React, { FC, PropsWithChildren } from 'react';
import { ModalStepWrapper } from '../../../../components/Base/ModalStepWrapper';
import InstallationAppleIcon from '../../../../public/images/ic-installation-apple.svg';
import InstallationGoogleIcon from '../../../../public/images/ic-installation-google.svg';
import InstallationHuaweiIcon from '../../../../public/images/ic-installation-huawei.svg';
import './ModalTradeWrapper.scss';
import { WalletText } from '../../../../components/Base';
import QRCode from 'qrcode.react';
import useDevice from '../../../../hooks/useDevice';
import { TPlatforms } from '../../../../types';
import { PlatformDetails } from '../../constants';

const LinksMapper: Record<
    TPlatforms.All,
    {
        android: string;
        huawei?: string;
        ios: string;
    }
> = {
    ctrader: {
        android: 'https://play.google.com/store/apps/details?id=com.deriv.ct',
        ios: 'https://apps.apple.com/cy/app/ctrader/id767428811',
    },
    dxtrade: {
        android: 'https://play.google.com/store/apps/details?id=com.deriv.dx',
        huawei: 'https://appgallery.huawei.com/app/C104633219',
        ios: 'https://apps.apple.com/us/app/deriv-x/id1563337503',
    },
    mt5: {
        android: 'https://download.mql5.com/cdn/mobile/mt5/android?server=Deriv-Demo,Deriv-Server,Deriv-Server-02',
        huawei: 'https://appgallery.huawei.com/#/app/C102015329',
        ios: 'https://download.mql5.com/cdn/mobile/mt5/ios?server=Deriv-Demo,Deriv-Server,Deriv-Server-02',
    },
};

const AppToIconMapper: Record<string, React.ComponentType<React.SVGAttributes<SVGElement>>> = {
    android: InstallationGoogleIcon,
    huawei: InstallationHuaweiIcon,
    ios: InstallationAppleIcon,
};

type TModalTradeWrapper = {
    platform: TPlatforms.MT5 | TPlatforms.OtherAccounts;
};

const ModalTradeWrapper: FC<PropsWithChildren<TModalTradeWrapper>> = ({ children, platform }) => {
    const { isDesktop } = useDevice();

    return (
        <ModalStepWrapper
            renderFooter={() => {
                return (
                    <div className='wallets-modal-trade-wrapper__footer'>
                        <WalletText align='center' size='sm' weight='bold'>
                            Download Deriv MT5 on your phone to trade with the Deriv MT5 account
                        </WalletText>
                        <div className='wallets-modal-trade-wrapper__footer-installations'>
                            <div className='wallets-modal-trade-wrapper__footer-installations-icons'>
                                {Object.keys(LinksMapper[platform]).map(app => {
                                    const AppIcon = AppToIconMapper[app];
                                    const appLink = LinksMapper[platform][app as 'android' | 'huawei' | 'ios'];
                                    return <AppIcon key={app} onClick={() => window.open(appLink)} />;
                                })}
                            </div>
                            {isDesktop && (
                                <div className='wallets-modal-trade-wrapper__footer-installations-qr'>
                                    <QRCode size={80} value={PlatformDetails[platform].link} />
                                    <WalletText align='center' size='xs'>
                                        Scan the QR code to download Deriv {PlatformDetails[platform].title}
                                    </WalletText>
                                </div>
                            )}
                        </div>
                    </div>
                );
            }}
            shouldFixedFooter={isDesktop}
            title='Trade'
        >
            {children}
        </ModalStepWrapper>
    );
};

export default ModalTradeWrapper;
