import React from 'react';
import {Button} from '../Button/Button';
import {NumberBoard} from '../NumberBoard/NumberBoard';
import {InfoBoard} from '../InfoBoard/InfoBoard';
import {useCounter, useLimits, useSetting} from '../../store/store';

export const Counter = () => {

    const [count, incrementCount, resetCounter] = useCounter(state => [
        state.count,
        state.incrementCount,
        state.resetCounter
    ])

    const {maxValue, minValue} = useSetting(state => state.limits)

    const {maxLimit, minLimit} = useLimits((state) => state.limits)

    const incCounter = () => {
        count < maxLimit && incrementCount()
    }

    const resetCounterHandler = () => {
        resetCounter(minLimit)
    }

    const isSettingChanged = maxLimit !== maxValue || minLimit !== minValue

    const isIncBtnDisabled = (count === maxLimit) || isSettingChanged

    const isResetBtnDisabled = (count === minLimit) || isSettingChanged

    const displayedBoard = isSettingChanged ? (
        <InfoBoard/>
    ) : (
        <NumberBoard/>
    )

    return (
        <div className={'main-wrapper'}>

            {displayedBoard}

            <div className={'buttons-wrapper'}>
                <Button
                    name={'inc'}
                    onClick={incCounter}
                    disabled={isIncBtnDisabled}
                    className={'button'}
                />
                <Button
                    name={'reset'}
                    onClick={resetCounterHandler}
                    disabled={isResetBtnDisabled}
                    className={'button'}
                />
            </div>

        </div>
    )
}