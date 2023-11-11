import React from 'react';
import {useSetting} from '../../store/store';

export const InfoBoard = () => {

    const isCorrectValue = useSetting(state => state.isCorrectValue)

    return (
        <div className={'setting-board'}>
            {isCorrectValue ? (
                <div>enter values and press 'set'</div>
            ) : (
                <div className={'bord_error'}>incorrect value!</div>
            )}
        </div>
    )
}