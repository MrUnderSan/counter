import React, {useEffect} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Setting} from './components/Setting/Setting';
import {loadLocalLimits} from './store/limitReducer';
import {useAppDispatch} from './hooks';


function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
            dispatch(loadLocalLimits())
    }, [dispatch]);

    return (
        <div className="App">
            <Setting/>
            <Counter/>
        </div>
    )
}

export default App;