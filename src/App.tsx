import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Setting} from './components/Setting/Setting';

function App() {

    const [limits, setLimits] = useState([5, 0])

    const [maxLimit, minLimit] = limits

    const [maxValue, setMaxValue] = useState(maxLimit)
    const [minValue, setMinValue] = useState(minLimit)

    const isCorrectValue = (maxValue > 0) && (minValue >= 0) && (maxValue > minValue)

    return (
        <div className="App">
            <Setting
                setLimits={setLimits}
                maxValue={maxValue}
                minValue={minValue}
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
                isCorrectValue={isCorrectValue}
            />
            <Counter
                limits={limits}
                maxValue={maxValue}
                minValue={minValue}
                isCorrectValue={isCorrectValue}
            />
        </div>
    );
}

export default App;