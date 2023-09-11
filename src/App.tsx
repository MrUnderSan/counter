import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Setting} from './components/Setting/Setting';

function App() {

    const [limits, setLimits] = useState([5, 0])

    return (
        <div className="App">
            <Setting limits={limits} setLimits={setLimits}/>
            <Counter limits={limits} />
        </div>
    );
}

export default App;