import React, {useEffect} from 'react';
import {Button} from '../Button/Button';
import {SettingBoard} from '../SettingBoard/SettingBoard';
import {useCounter, useLimits, useSetting} from '../../store/store';

export const Setting = () => {

    const [{maxValue, minValue}, isCorrectValue, changeCorrectStatus] = useSetting(state => [
        state.limits,
        state.isCorrectValue,
        state.changeCorrectStatus
    ])

    const [{maxLimit, minLimit}, changeLimits] = useLimits((state) => [
        state.limits,
        state.changeLimits
    ])

    const resetCounter = useCounter(state => state.resetCounter)

    const setLimitsHandler = () => {
        if (isCorrectValue) {
            changeLimits(maxValue, minValue)
            resetCounter(minValue)
        }
    }

    useEffect(() => {

        const areValuesValid = maxValue > 0 && minValue >= 0 && Number.isInteger(maxValue) && Number.isInteger(minValue)

        if (areValuesValid !== isCorrectValue) {
            changeCorrectStatus(areValuesValid)
        }

    }, [maxValue, minValue, isCorrectValue])

    const areValuesEqual = maxValue === maxLimit && minValue === minLimit

    return (

        <div className={'main-wrapper'}>
            <SettingBoard/>
            <div className={'buttons-wrapper'}>
                <Button
                    name={'set'}
                    onClick={setLimitsHandler}
                    className={'button'}
                    disabled={!isCorrectValue || areValuesEqual}
                />
            </div>
        </div>

    )
}