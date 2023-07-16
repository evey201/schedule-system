import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'

export const ContentWrapper = tw.div`
    not-italic
    text-base
    font-normal
    w-96
`

export const TitleWrapper = tw.div`
    pt-6
    max-w-sm
    pb-6
`

export const Title = tw.h2`
    font-bold
    text-2xl
`

export const Subtitle = tw.p`
    pt-4
    max-w-xs
`

export const BeforeButton = tw.div`
    flex
    justify-end
    items-center
`

export const ForgotPasswordLink = tw(Link)`
    text-primary-500
`
export const ButtonWrapper = tw.div`
    pt-4
`
export const AfterButton = tw.div`
    flex
    justify-start
    items-center
    pt-2
`
export const SignupHereLink = tw(Link)`
    text-primary-500
`