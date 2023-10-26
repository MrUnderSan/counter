import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';

type PropsType = {}

export const InfoBoard: React.FC<PropsType> = () => {

    const isCorrectValue = useSelector<AppRootStateType, boolean>(state => state.setting.isCorrectValue)

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