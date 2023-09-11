import React, {useEffect, useState} from 'react';
import {Button} from '../Button/Button';
import {NumberBoard} from '../NumberBoard/NumberBoard';

type PropsType = {
    limits: number[]
}

export const Counter: React.FC<PropsType> = ({limits}) => {

    const [maxLimit, minLimit] = limits

    const [count, setCount] = useState(minLimit)

    useEffect(() => {
        setCount(minLimit)
    }, [limits])

    const incCounter = () => {
        count < maxLimit && setCount(count + 1)
    }

    const resetCounter = () => {
        setCount(minLimit)
    }

    const isIncBtnDisabled = count === maxLimit

    const isResetBtnDisabled = count === minLimit

    return (
        <div className={'main-wrapper'}>

            <NumberBoard count={count} maxCount={maxLimit}/>

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
            </div>

        </div>
    );
};