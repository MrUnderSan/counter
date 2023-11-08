import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {SettingActionsType, settingReducer} from './settingReducer';
import {LimitActionsType, limitReducer} from './limitReducer';
import {CounterActionsType, counterReducer} from './counterReducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';

const rootReducer = combineReducers({
    counter: counterReducer,
    setting: settingReducer,
    limit: limitReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

type AppActionsType = CounterActionsType | LimitActionsType | SettingActionsType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AppActionsType>