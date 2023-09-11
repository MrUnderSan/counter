import React from 'react';

export const SettingBoard = () => {
    return (
        <div className={'setting-board.'}>

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