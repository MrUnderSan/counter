import React, {ChangeEvent} from 'react';
import {LimitField} from '../LimitField/LimitField';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';
import {changeMaxLimit, changeMinLimit, SettingLimitsType} from '../../store/settingReducer';

type PropsType = {}

export const SettingBoard: React.FC<PropsType> = () => {

    const {maxValue, minValue} = useSelector<AppRootStateType, SettingLimitsType>(state => state.setting.limits)

    const dispatch = useDispatch()

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxLimit(Number(e.currentTarget.value)))
    }
    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMinLimit(Number(e.currentTarget.value)))
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