import React, {ChangeEvent, FC} from 'react'

type PropsType = {
    title: string
    inputClassName: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const LimitField: FC<PropsType> = (
    {
        title,
        inputClassName,
        value,
        onChange
    }) => {
    return (
        <div className={'limitField'}>
            <div>{title}:</div>
            <input
                className={inputClassName}
                type="number"
                value={value}
                onChange={onChange}
                title={title}
                placeholder={`Enter ${title}`}
            />
        </div>
    )
}