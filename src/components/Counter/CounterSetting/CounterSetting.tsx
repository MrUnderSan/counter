import React from 'react';

export const CounterSetting = () => {
    return (
        <div className={'counterSetting'}>

            <div>
                <span>max value:</span>
                <input type="number"/>
            </div>

            <div>
                <span>min value:</span>
                <input type="number"/>
            </div>

        </div>
    );
};