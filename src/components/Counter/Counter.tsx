import React, {useEffect, useState} from 'react';
import {Button} from '../Button/Button';
import {NumberBoard} from '../NumberBoard/NumberBoard';
import {InfoBoard} from '../InfoBoard/InfoBoard';

type PropsType = {
    limits: number[]
    maxValue: number
    minValue: number
    isCorrectValue: boolean
}

export const Counter: React.FC<PropsType> = (
    {limits, maxValue, minValue, isCorrectValue}
) => {

    const [maxLimit, minLimit] = limits

    const [count, setCount] = useState(minLimit)

    useEffect(() => {
        setCount(minLimit)
    }, [limits])

    const incCounter = () => {
        count < maxLimit && setCount(count + 1)
    }

    const resetCounter = () => {
        setCount(minLimit)
    }

    const isSettingChanged = maxLimit !== maxValue || minLimit !== minValue

    const isIncBtnDisabled = (count === maxLimit) || isSettingChanged

    const isResetBtnDisabled = (count === minLimit) || isSettingChanged

    const displayedBoard = isSettingChanged ? (
        <InfoBoard isCorrectValue={isCorrectValue}/>
    ) : (
        <NumberBoard count={count} maxCount={maxLimit}/>
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
                    onClick={resetCounter}
                    disabled={isResetBtnDisabled}
                    className={'button'}
                />
            </div>

        </div>
    );
};