import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Text from '../text';

const FormProgress = ({ steps, current_step }) => {
    React.useEffect(() => {
        animateCompleteBar();
    });

    const el_completed_bar = React.useRef(null);

    const animateCompleteBar = () => {
        const el_first_identifier = document.querySelector('.identifier') || {
            offsetLeft: 0,
            clientWidth: 1,
        };
        const each = 100 / steps.length;
        el_completed_bar.current.style.width = `${current_step * each}%`;
        el_completed_bar.current.style.transform = `translateX(${
            el_first_identifier.offsetLeft + el_first_identifier.clientWidth / 2
        }px)`;
    };

    let active = false;

    return (
        <div className='dc-form-progress'>
            <div className='dc-form-progress__header'>
                <Text as='h2' color='prominent' weight='bold' line_height='unset'>
                    {steps[current_step].header.active_title}
                </Text>
                <div className='dc-form-progress__steps'>
                    <div
                        className='dc-form-progress__steps--before'
                        style={{
                            width: `calc(100% * ${steps.length - 1} / ${steps.length})`,
                        }}
                    />
                    {steps.map((item, idx) => (
                        <React.Fragment key={idx + 1}>
                            {(active = idx === current_step)}
                            <div className='dc-form-progress__step'>
                                <Text
                                    align='center'
                                    size='xs'
                                    weight='bold'
                                    color='colored-background'
                                    className={classNames('identifier', {
                                        'identifier--active': idx <= current_step,
                                    })}
                                >
                                    {idx + 1}
                                </Text>
                                <Text
                                    as='p'
                                    align='center'
                                    size='xxs'
                                    weight={active ? 'bold' : 'unset'}
                                    color={active ? 'loss-danger' : 'prominent'}
                                >
                                    {item.header.title}
                                </Text>
                            </div>
                        </React.Fragment>
                    ))}
                    <div ref={el_completed_bar} className='dc-form-progress__steps--after' />
                </div>
            </div>
        </div>
    );
};

FormProgress.propTypes = {
    current_step: PropTypes.any,
    steps: PropTypes.array,
};

FormProgress.defaultProps = { steps: [] };

export default React.memo(FormProgress);
