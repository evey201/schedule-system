"use client"
import { ChangeEvent, FormEvent, useState } from 'react'
import { AuthLayout, FormInput } from '../../../components'
import sideImage from '../../../assets/images/woman.svg'
import {
    ContentWrapper,
    TitleWrapper,
    Title,
    Subtitle,
    BeforeButton,
    ForgotPasswordLink,
    ButtonWrapper,
    AfterButton,
    SignupHereLink
} from './Login.styled'
import { isAuthorised } from '../../../services'

interface UserCredentials {
    email: string;
    password: string;
}

export const Login = () => {
    const [userCredentials, setUserCredentials] = useState<UserCredentials>({ email: '', password: '' });
    const [error, setErrors] = useState<string>()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        console.log({ value, name } )
        setUserCredentials({ ...userCredentials, [name]: value })
    }
    const handleSubmit =  (e: FormEvent<HTMLFormElement>): void=> {
        e.preventDefault()
        const res =  isAuthorised(userCredentials.email)
        console.log(res)
        if (!res) {
            setErrors('Unauthorized User')
        }
        if (res) {
            // login({ ...userCredentials })
            // setErrors('')
        }
    }
    return (
        <>
            <AuthLayout
                title="Schedule System"
                image={<img src={sideImage} alt="Side Image" />}
            >
                <ContentWrapper>
                    <TitleWrapper>
                        <Title>
                            Login into your dashboard
                        </Title>
                        <Subtitle>
                            Welcome back! Log in to your account with your credentials below
                        </Subtitle>
                    </TitleWrapper>
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            label="Email Address"
                            type="text"
                            name="email"
                            onChange={handleChange}
                            error={error}
                            placeholder="john@example.com"
                        />
                        <FormInput.Password
                            label="Password"
                            type="password"
                            onChange={handleChange}
                            error={error}
                            name="password"
                        />
                        <BeforeButton>
                            <ForgotPasswordLink to="">
                                Forgot password?
                            </ForgotPasswordLink>
                        </BeforeButton>
                        <ButtonWrapper>
                            {/* <Button type="submit">
                                Log in
                            </Button> */}
                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-primary-900 px-5 py-3 text-sm font-medium text-white w-full"
                            >
                                Sign in
                            </button>
                        </ButtonWrapper>
                    </form>
                    <AfterButton className='flex justify-between'>
                        Don’t have an account? <SignupHereLink to="">Sign up here</SignupHereLink>
                    </AfterButton>
                </ContentWrapper>
            </AuthLayout>
        </>
    )
}