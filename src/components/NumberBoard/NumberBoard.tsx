import React from 'react';
import {useCounter, useLimits} from '../../store/store';

export const NumberBoard = () => {

    const count = useCounter(state => state.count)

    const maxLimit = useLimits(state => state.limits.maxLimit)

    const numberBoardClassName = count === maxLimit ? 'number-bord bord_error' : 'number-bord'

    return (
        <div className={numberBoardClassName}>
            {count}
        </div>
    )
}