import React, {ChangeEvent} from 'react';

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

            <div className={'input-wrapper'}>
                <div>max value:</div>
                <input
                    className={maxValueInputClassName}
                    type="number"
                    value={maxValue}
                    onChange={changeMaxValueHandler}
                    title="Max Value"
                    placeholder="Enter max value"
                />
            </div>

            <div className={'input-wrapper'}>
                <div>min value:</div>
                <input
                    className={minValueInputClassName}
                    type="number"
                    value={minValue}
                    onChange={changeMinValueHandler}
                    title="Min Value"
                    placeholder="Enter min value"
                />
            </div>

        </div>
    );
};