import React from 'react';

type PropsType = {
    count: number,
    maxCount: number
}

export const NumberBoard: React.FC<PropsType> = ({count, maxCount}) => {

    const numberBoardClassName = count === maxCount ? 'number-bord bord_error' : 'number-bord'

    return (
        <div className={numberBoardClassName}>
            {count}
        </div>
    );
};