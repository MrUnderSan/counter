import React, {useState} from 'react';
import {Button} from '../Button/Button';
import {SettingBoard} from '../SettingBoard/SettingBoard';

type PropsType = {
    limits: number[]
    setLimits: (l: number[])=>void
}
export const Setting: React.FC<PropsType> = ({limits, setLimits}) => {

    const [maxLimit, minLimit] = limits

    const [maxValue, setMaxValue] = useState(maxLimit)
    const [minValue, setMinValue] = useState(minLimit)

    const isCorrectValue = (maxValue > 0) && (minValue >= 0) && (maxValue > minValue)

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
                <Button name={'set'} onClick={setLimitsHandler} className={'button'} disabled={!isCorrectValue}/>
            </div>
        </div>

    );
}