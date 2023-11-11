import React, {ChangeEvent} from 'react';
import {LimitField} from '../LimitField/LimitField';
import {useSetting} from '../../store/store';

export const SettingBoard = () => {

    const [{maxValue, minValue}, changeMaxLimit, changeMinLimit] = useSetting(state => [
        state.limits,
        state.changeMaxLimit,
        state.changeMinLimit
    ])

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxLimit(Number(e.currentTarget.value))
    }
    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeMinLimit(Number(e.currentTarget.value))
    }

    const maxValueInputClassName = maxValue > 0 && maxValue > minValue ? 'input' : 'input input_error'
    const minValueInputClassName = minValue >= 0 && maxValue > minValue ? 'input' : 'input input_error'

    return (
        <div className={'setting-board'}>

            <LimitField
                title={'max value'}
                inputClassName={maxValueInputClassName}
                value={maxValue}
                onChange={changeMaxValueHandler}
            />

            <LimitField
                title={'min value'}
                inputClassName={minValueInputClassName}
                value={minValue}
                onChange={changeMinValueHandler}
            />

        </div>
    )
}