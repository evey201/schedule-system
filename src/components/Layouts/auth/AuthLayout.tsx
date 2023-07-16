import { ReactNode } from 'react'
import {
    FullScreen,
    LeftScreenOverlay,
    RightScreenOverlay,
    TitleWrapper,
    Title,
    TopWrapper,
    ImageContainer,
} from './AuthLayout.styled'

type AuthLayoutProps = {
    image?: ReactNode,
    title: string,
    children: ReactNode
}

export const AuthLayout = ({ image, title, children }: AuthLayoutProps) => {
    return (
        <>
            <FullScreen>
                <LeftScreenOverlay>
                    <TopWrapper>
                        <TitleWrapper>
                            <Title className='tracking-widest'>{title}</Title>
                        </TitleWrapper>
                    </TopWrapper>
                    <ImageContainer>
                        {/* {Image && <Image height="80%" width="100%" /> } */}
                        {image}
                    </ImageContainer>
                </LeftScreenOverlay>
                <RightScreenOverlay>{children}</RightScreenOverlay>
            </FullScreen>
        </>
    )
}
