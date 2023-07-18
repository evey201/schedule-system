/* eslint-disable @typescript-eslint/no-unsafe-call */
import { createPortal } from 'react-dom'
import { useSpring, animated, SpringValue } from 'react-spring'
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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const animation: AnimationProps = useSpring({
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
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.38776 5.5291L13.7632 1.15274C14.6335 0.282422 16.0445 0.282421 16.9149 1.15274C17.7015 1.93937 17.7773 3.16862 17.1415 4.03991L16.902 4.31731L12.5372 8.67827L12.1833 9.03184L12.537 9.38554L16.9141 13.7624C17.7845 14.6328 17.7845 16.0438 16.9141 16.9141C16.1275 17.7008 14.8982 17.7766 14.027 17.1407L13.7495 16.9012L9.38776 12.5385L9.03419 12.1849L8.6806 12.5385L4.30515 16.9141C3.43484 17.7845 2.02378 17.7845 1.15346 16.9141C0.366839 16.1275 0.290988 14.8983 0.926871 14.027L1.16647 13.7494L5.52779 9.38543L5.88116 9.03184L5.52764 8.67839L1.15274 4.30443C1.15272 4.30442 1.15271 4.30441 1.1527 4.3044C0.282421 3.43408 0.282433 2.02304 1.15274 1.15274C1.93936 0.366112 3.16862 0.29026 4.0399 0.926144L4.31738 1.16569L8.6806 5.52913L9.03419 5.88274L9.38776 5.5291Z" stroke="black"/>
                                    </svg>
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
