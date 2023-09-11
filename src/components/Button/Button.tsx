import React from 'react';

type PropsType = {
    name: string,
    onClick: () => void
    disabled?: boolean
    className?: string
}
export const Button: React.FC<PropsType> = (
    {name, onClick, disabled, className}
) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled && disabled}
            className={className && className}
        >
            {name}
        </button>
    );
};