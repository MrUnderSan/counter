import React from 'react';

type PropsType = {
    isCorrectValue: boolean
}
export const InfoBoard: React.FC<PropsType> = ({isCorrectValue}) => {

    return (
        <div className={'setting-board'}>
            {isCorrectValue ? (
                <div>enter values and press 'set'</div>
            ) : (
                <div className={'bord_error'}>incorrect value!</div>
            )}
        </div>
    );
};