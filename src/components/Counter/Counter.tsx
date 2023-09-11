import React, {useState} from 'react';
import {Button} from '../Button/Button';
import {NumberBoard} from '../NumberBoard/NumberBoard';

export const Counter = () => {

    const [count, setCount] = useState(0)
    const [maxCount, setMaxCount] = useState(5)


    const incCounter = () => {
        count < maxCount && setCount(count + 1)
    }

    const resetCounter = () => {
        setCount(0)
    }

    const isIncBtnDisabled = count === maxCount

    const isResetBtnDisabled = count === 0

    // test version
    const changeMaxCount = () => {
        let max = prompt('enter the maximum counter value')

        if (Number(max) > 0) {
            setMaxCount(Number(max))
            setCount(0)
        } else {
            alert('entered incorrect value')
        }
    }

    return (
        <div className={'main-wrapper'}>

            <NumberBoard count={count} maxCount={maxCount} />

            <div className={'buttons-wrapper'}>

                <Button
                    name={'inc'}
                    onClick={incCounter}
                    disabled={isIncBtnDisabled}
                    className={'button'}
                />
                <Button
                    name={'reset'}
                    onClick={resetCounter}
                    disabled={isResetBtnDisabled}
                    className={'button'}
                />
                <Button
                    name="&#9881;&#65039;"
                    onClick={changeMaxCount}
                    className={'button-setting'}
                />
            </div>

        </div>
    );
};