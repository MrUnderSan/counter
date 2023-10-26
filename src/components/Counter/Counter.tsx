import React, {useEffect} from 'react';
import {Button} from '../Button/Button';
import {NumberBoard} from '../NumberBoard/NumberBoard';
import {InfoBoard} from '../InfoBoard/InfoBoard';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';
import {LimitReducerStateType} from '../../store/limitReducer';
import {CounterReducerStateType, incrementCount, resetCounter} from '../../store/counterReducer';
import {SettingLimitsType} from '../../store/settingReducer';

type PropsType = {}

export const Counter: React.FC<PropsType> = () => {

    const count = useSelector<AppRootStateType, CounterReducerStateType>(state => state.counter)

    const {maxLimit, minLimit} = useSelector<AppRootStateType, LimitReducerStateType>(state => state.limit)

    const {maxValue, minValue} = useSelector<AppRootStateType, SettingLimitsType>(state => state.setting.limits)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetCounter(minLimit))
    }, [minLimit, maxLimit, dispatch])

    const incCounter = () => {
        count < maxLimit && dispatch(incrementCount(count))
    }

    const resetCounterHandler = () => {
        dispatch(resetCounter(minLimit))
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