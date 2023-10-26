import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';
import {CounterReducerStateType} from '../../store/counterReducer';

type PropsType = {}

export const NumberBoard: React.FC<PropsType> = () => {

    const count = useSelector<AppRootStateType, CounterReducerStateType>(state => state.counter)

    const maxLimit = useSelector<AppRootStateType, number>(state => state.limit.maxLimit)

    const numberBoardClassName = count === maxLimit ? 'number-bord bord_error' : 'number-bord'

    return (
        <div className={numberBoardClassName}>
            {count}
        </div>
    )
}