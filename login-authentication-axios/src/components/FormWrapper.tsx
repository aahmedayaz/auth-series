import React from 'react'

// Interface

interface FormWrapperPropTypes {
    children: JSX.Element[] | JSX.Element,
    btnText: string,
    onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void,
    cssForSubmitBtn?: React.CSSProperties
}

const FormWrapper: React.FC<FormWrapperPropTypes> = ({children, btnText, onSubmitHandler, cssForSubmitBtn}): JSX.Element => {
  return (
    <form 
        onSubmit={(e) => onSubmitHandler(e)} 
        className="w-[100%] h-[100%] flex flex-col"
    >
        {children}
        <button 
            type='submit' 
            className="self-center bg-[#1e774e] text-white border-none outline-none px-[15px] py-[8px] rounded-md active:scale-[0.93] active:bg-[#226345] mt-[20px]"
            style={cssForSubmitBtn}
        >
            {btnText}
        </button>
    </form>
  )
}

export default FormWrapper