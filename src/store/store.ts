import {combineReducers, legacy_createStore as createStore} from 'redux';
import {settingReducer} from './settingReducer';
import {limitReducer} from './limitReducer';
import {counterReducer} from './counterReducer';
import {loadLimits, saveLimits} from '../utils/localStorage';

const rootReducer = combineReducers({
    counter: counterReducer,
    setting: settingReducer,
    limit: limitReducer
})

const limits = loadLimits()

const persistedState = {
    counter: limits ? limits.minLimit : 0,
    setting: {
        limits: {
            maxValue: limits ? limits.maxLimit : 9,
            minValue: limits ? limits.minLimit : 0
        },
        isCorrectValue: true
    },
    limit: limits ? limits : {maxLimit: 9, minLimit: 0}
}

export const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
    saveLimits(store.getState().limit)
})

export type AppRootStateType = ReturnType<typeof rootReducer>