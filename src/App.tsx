import React, {useEffect} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Setting} from './components/Setting/Setting';
import {useDispatch} from 'react-redux';
import {changeLimits, LimitReducerStateType} from './store/limitReducer';
import {changeMaxLimit, changeMinLimit} from './store/settingReducer';

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        const localStorageLimits = localStorage.getItem('counterLimits')
        if (localStorageLimits) {
            const localLimits: LimitReducerStateType = JSON.parse(localStorageLimits)
            dispatch(changeLimits(localLimits.maxLimit, localLimits.minLimit))
            dispatch(changeMaxLimit(localLimits.maxLimit))
            dispatch(changeMinLimit(localLimits.minLimit))
        }
    }, [dispatch]);

    return (
        <div className="App">
            <Setting/>
            <Counter/>
        </div>
    )
}

export default App;