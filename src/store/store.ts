import {combineReducers, legacy_createStore as createStore} from 'redux';
import {settingReducer} from './settingReducer';
import {limitReducer} from './limitReducer';
import {counterReducer} from './counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    setting: settingReducer,
    limit: limitReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>