import React from 'react'

// Interface

interface InputProps {
    label?: string,
    type?: string,
    inputState: string | number,
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string
}

const Input: React.FC<InputProps> = ({label, type = 'text', inputState, onChangeHandler, placeholder}): JSX.Element => {
    return (
        <div className='w-[100%] flex flex-col gap-[3px]'>
            <label className='text-sm'>{label}</label>
            <input 
                type={type}
                value={inputState}
                onChange={onChangeHandler}
                placeholder={placeholder}
                className='px-[15px] py-[7px] text-black border-none outline-none bg-white rounded-md'
            />
            <span className='h-[20px]'></span>
        </div>
    )
}

export default Input