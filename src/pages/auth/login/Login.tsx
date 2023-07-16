"use client"
import { AuthLayout } from '../../../components'
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

export const Login = () => {
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
                    {/* <form onSubmit={handleSubmit}>
                        <FormInput
                            label="Email Address"
                            type="text"
                            name="email"
                            onChange={updateField}
                            error={errors.email}
                            placeholder="john@example.com"
                        />
                        <FormInput.Password
                            label="Password"
                            type="password"
                            onChange={updateField}
                            error={errors.password}
                            name="password"
                        />
                        <BeforeButton>
                            <ForgotPasswordLink to="/forgot-password">
                                Forgot password?
                            </ForgotPasswordLink>
                        </BeforeButton>
                        <ButtonWrapper>
                            <Button type="submit">
                                Log in
                            </Button>
                        </ButtonWrapper>
                    </form> */}
                    <AfterButton>
                        Don’t have an account? <SignupHereLink to="">Sign up here</SignupHereLink>
                    </AfterButton>
                </ContentWrapper>
            </AuthLayout>
        </>
    )
}