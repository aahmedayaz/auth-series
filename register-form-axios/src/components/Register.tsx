import React, { useState } from 'react'
import FormWrapper from './FormWrapper'
import Input from './Input'
import { start } from 'repl'

const Register: React.FC = (): JSX.Element => {

    // ------------------ States ------------------  
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // ------------------ Functions --------------- 
    const submitForm = () => {

    }

    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(e.target.value)
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value)
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value)
    }

    return (
        <main className='w-[100%] bg-[#ffffff] h-screen text-white flex flex-col items-center pt-[40px]'>
            <section className='w-[600px] flex flex-col items-center p-[40px] bg-[#1f1f1f] rounded-[28px]'>
                <section className=''>
                    <h1 className='text-4xl font-bold text-[#1e774e]'>Create your Account</h1>
                    <span className='text-sm'>Please enter your details.</span>
                </section>
                <section className='w-[100%] p-[10px]'>
                    <FormWrapper 
                        btnText={"Create Account"} 
                        onSubmitHandler={submitForm}
                    >
                        <Input 
                            label='Name'
                            placeholder='Enter your username'
                            inputState={username}
                            onChangeHandler={(e) => handleUsername(e)}
                        />
                        <Input 
                            label='Email'
                            type='email'
                            placeholder='Enter your email address'
                            inputState={email}
                            onChangeHandler={(e) => handleEmail(e)}
                        />
                        <Input 
                            label='Password'
                            type='password'
                            placeholder='Enter your password'
                            inputState={password}
                            onChangeHandler={(e) => handlePassword(e)}
                        />
                    </FormWrapper>
                </section>
            </section>
        </main>
    )
}

export default Register