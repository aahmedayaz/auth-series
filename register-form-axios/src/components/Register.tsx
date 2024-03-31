import React, { useState } from 'react'
import FormWrapper from './FormWrapper'
import Input from './Input'

const Register: React.FC = (): JSX.Element => {

    // ------------------ States ------------------  
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    const [isUsernameValid, setIsUsernameValid] = useState<boolean>(false)
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false)
    
    const [usernameError, setUsernameError] = useState<string>('')
    const [emailError, setEmailError] = useState<string>('')
    const [passwordError, setPasswordError] = useState<string>('')

    // ------------------ Regex --------------- 
    const usernameRegex = /^[a-zA-Z]{3,12}$/;
    const emailRegex = /^([^\s@]+@[^\s@]+\.[^\s@]+)$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/;

    // ------------------ Functions --------------- 
    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Username Validation
        if(!usernameRegex.test(username)){
            setUsernameError("Username can only contain letters and must be between 3 and 12 characters long.")
        }else{
            setIsUsernameValid(true)
            setUsernameError('')
        }

        // Email validation
        if(!emailRegex.test(email)){
            setEmailError("Please enter a valid email address.")
        }else{
            setIsEmailValid(true)
            setEmailError('')
        }

        // Password validation
        if(!passwordRegex.test(password)){
            setPasswordError("Please include at least one uppercase letter and a number. It must be at least 8 characters long.")
        }else{
            setIsPasswordValid(true)
            setPasswordError('')
        }
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
                            error={usernameError}
                        />
                        <Input 
                            label='Email'
                            type='text'
                            placeholder='Enter your email address'
                            inputState={email}
                            onChangeHandler={(e) => handleEmail(e)}
                            error={emailError}
                        />
                        <Input 
                            label='Password'
                            type='password'
                            placeholder='Enter your password'
                            inputState={password}
                            onChangeHandler={(e) => handlePassword(e)}
                            error={passwordError}
                        />
                    </FormWrapper>
                </section>
            </section>
        </main>
    )
}

export default Register