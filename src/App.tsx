import React, {useEffect} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Setting} from './components/Setting/Setting';
import {useCounter, useLimits, useSetting} from './store/store';

const App = () => {

    const {maxLimit, minLimit} = useLimits((state) => state.limits)

    const [ changeMaxLimit, changeMinLimit] = useSetting(state => [
        state.changeMaxLimit,
        state.changeMinLimit
    ])

    const resetCounter = useCounter(state => state.resetCounter)


    useEffect(() => {
        resetCounter(minLimit)
        changeMaxLimit(maxLimit)
        changeMinLimit(minLimit)
    }, [])


    return (
        <div className="App">
            <Setting/>
            <Counter/>
        </div>
    )
}

export default App;