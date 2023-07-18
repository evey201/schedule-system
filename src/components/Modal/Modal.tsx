import { createPortal } from 'react-dom'
import { useSpring, animated, UseSpringProps, SpringValue } from 'react-spring'
import CloseIcon from '../../assets/icons/close.svg'
import { Container, ModalMain, ModalCloseButton, TitleWrapper } from './Modal.styled'

interface ModalPropTypes {
    fullScreen?: boolean
    closable?: boolean
    triggerModal: () => void
    showModal: boolean;
    children: JSX.Element | JSX.Element[]; 
    title: string
}
interface AnimationProps{
    opacity: SpringValue<number>
    transform: SpringValue<string>
}

export const Modal = ({
    fullScreen = false,
    closable,
    triggerModal,
    showModal,
    children,
    title
}: ModalPropTypes): JSX.Element | null => {

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const portalDiv = document.querySelector('#modal-root')!;
    if (!portalDiv) {
        return null;
    }

    return showModal
        ? createPortal(
            <Container fullScreen={fullScreen}>
                <animated.div style={animation}>
                    <ModalMain>
                        <TitleWrapper><h2>{title}</h2>
                            {closable && (
                                <ModalCloseButton  onClick={triggerModal}>
                                    <CloseIcon />
                                </ModalCloseButton>
                            )}
                        </TitleWrapper>
                        {children}
                    </ModalMain>
                </animated.div>
            </Container>,
            portalDiv
        )
        : null
}
