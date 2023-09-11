import React from 'react';

type PropsType = {
    count: number,
    maxCount: number
}

export const CounterNumber: React.FC<PropsType> = ({count, maxCount}) => {

    const counterNumberClassName = count === maxCount ? 'counter-number counter-number_error' : 'counter-number'

    return (
        <div className={counterNumberClassName}>
            {count}
        </div>
    );
};