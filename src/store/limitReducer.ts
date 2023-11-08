import {changeMaxLimit, changeMinLimit} from './settingReducer';
import {AppDispatchType, AppThunk} from './store';
import {areLimitsValid} from '../utils';

export type LimitReducerStateType = {
    maxLimit: number
    minLimit: number
}

type ChangeLimitsActionType = ReturnType<typeof changeLimitsAC>

export type LimitActionsType = ChangeLimitsActionType

const initState: LimitReducerStateType = {maxLimit: 9, minLimit: 0}
export const limitReducer = (state: LimitReducerStateType = initState, action: LimitActionsType) => {
    switch (action.type) {
        case 'CHANGE-LIMITS':
            return {...state, maxLimit: action.maxLimit, minLimit: action.minLimit}
        default:
            return state
    }
}

export const changeLimitsAC = (maxLimit: number, minLimit: number) => (
    {type: 'CHANGE-LIMITS' as const, maxLimit, minLimit}
)
export const loadLocalLimits = (): AppThunk => (dispatch: AppDispatchType) => {
    const localStorageLimits = localStorage.getItem('counterLimits')
    if (localStorageLimits) {
        const {maxLimit, minLimit}: LimitReducerStateType = JSON.parse(localStorageLimits)
        if (areLimitsValid(maxLimit, minLimit)) {
            dispatch(changeLimitsAC(maxLimit, minLimit))
            dispatch(changeMaxLimit(maxLimit))
            dispatch(changeMinLimit(minLimit))
        }
    }
}

export const changeLimits = (maxValue: number, minValue: number): AppThunk => (dispatch: AppDispatchType) => {
    dispatch(changeLimitsAC(maxValue, minValue))
    localStorage.setItem('counterLimits', JSON.stringify({maxLimit: maxValue, minLimit: minValue}))
}