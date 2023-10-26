import React, {useEffect} from 'react';
import {Button} from '../Button/Button';
import {SettingBoard} from '../SettingBoard/SettingBoard';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';
import {changeCorrectStatus, SettingLimitsType} from '../../store/settingReducer';
import {changeLimits, LimitReducerStateType} from '../../store/limitReducer';

type PropsType = {}

export const Setting: React.FC<PropsType> = () => {

    const isCorrectValue = useSelector<AppRootStateType, boolean>(state => state.setting.isCorrectValue)
    const {maxValue, minValue} = useSelector<AppRootStateType, SettingLimitsType>(state => state.setting.limits)
    const {maxLimit, minLimit} = useSelector<AppRootStateType, LimitReducerStateType>(state => state.limit)

    const dispatch = useDispatch()

    const setLimitsHandler = () => {
        if (isCorrectValue) {
            dispatch(changeLimits(maxValue, minValue))
            localStorage.setItem('counterLimits', JSON.stringify({maxLimit: maxValue, minLimit: minValue}))
        }

    }

    useEffect(() => {

        const isCorrect = (maxValue > 0) && (minValue >= 0) && (maxValue > minValue)

        if (!isCorrect && isCorrectValue) {
            dispatch(changeCorrectStatus(false))
        }

        if (isCorrect && !isCorrectValue) {
            dispatch(changeCorrectStatus(true))
        }

    }, [maxValue, minValue, isCorrectValue, dispatch]);

    const isSameValue = maxValue === maxLimit && minValue === minLimit


    return (

        <div className={'main-wrapper'}>
            <SettingBoard/>
            <div className={'buttons-wrapper'}>
                <Button
                    name={'set'}
                    onClick={setLimitsHandler}
                    className={'button'}
                    disabled={!isCorrectValue || isSameValue}
                />
            </div>
        </div>

    )
}