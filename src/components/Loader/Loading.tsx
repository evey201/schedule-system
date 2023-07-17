import DualBall from '../../assets/gifs/DualBall.gif'
import { FullScreenCenteredContainer, LoadingWrapper } from './Loading.styled'

const Loader = () => (
    <LoadingWrapper>
        <img src={DualBall} alt="" />
    </LoadingWrapper>
)

type LoadingProps = {
    fullscreen?: boolean
}

export const Loading = ({ fullscreen }: LoadingProps) => {
    return fullscreen ?
        <FullScreenCenteredContainer>
            <Loader />
        </FullScreenCenteredContainer>
        : <Loader />
}