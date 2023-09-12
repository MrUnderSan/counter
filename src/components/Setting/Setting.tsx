import React from 'react';
import {Button} from '../Button/Button';
import {SettingBoard} from '../SettingBoard/SettingBoard';

type PropsType = {
    setLimits: (l: number[]) => void
    maxValue: number
    minValue: number
    setMaxValue: (v: number) => void
    setMinValue: (v: number) => void
    isCorrectValue: boolean
}
export const Setting: React.FC<PropsType> = (
    {
        setLimits,
        maxValue,
        minValue,
        setMaxValue,
        setMinValue,
        isCorrectValue
    }) => {

    const setLimitsHandler = () => {
        isCorrectValue && setLimits([maxValue, minValue])
    }

    return (

        <div className={'main-wrapper'}>
            <SettingBoard
                maxValue={maxValue}
                minValue={minValue}
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
            />
            <div className={'buttons-wrapper'}>
                <Button
                    name={'set'}
                    onClick={setLimitsHandler}
                    className={'button'}
                    disabled={!isCorrectValue}
                />
            </div>
        </div>

    );
}