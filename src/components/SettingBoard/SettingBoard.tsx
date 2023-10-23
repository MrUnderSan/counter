import React, {ChangeEvent} from 'react';
import {LimitField} from '../LimitField/LimitField';

type PropsType = {
    maxValue: number
    minValue: number
    setMaxValue: (v: number) => void
    setMinValue: (v: number) => void
}
export const SettingBoard: React.FC<PropsType> = ({maxValue, minValue, setMaxValue, setMinValue}) => {

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }
    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
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
    );
};