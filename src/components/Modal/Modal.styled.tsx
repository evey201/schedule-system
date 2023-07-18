import styled from 'styled-components';
import tw from 'tailwind-styled-components'


interface ModalContainerProps {
    readonly fullScreen: boolean;
}

const ModalContainer = styled.div<ModalContainerProps>`
    background: rgba(17, 24, 39, 0.5);
    backdrop-filter: ${({ fullScreen }) => (fullScreen ? 'blur(10px)' : 'blur(10px)')};
    min-height: 100vh;
`

export const Container = tw(ModalContainer)`
    w-screen
    h-screen
    flex 
    justify-center
    items-start
    sm:pt-20
    pt-20
    overflow-hidden
`
const Modal = styled.div`
    @media (min-width: 320px) {
        width: 335px
    }

    @media (min-width: 600px) {
        width: 500px
    }
`

export const ModalMain = tw(Modal)`
    bg-white
    h-full
    w-full
    sm:w-1/3
    rounded-lg  
    p-10 
    pt-5 
    flex 
    flex-col 
    align-center 
    justify-center
    outline-hidden 
`
export const ModalCloseButton = tw.button`
    outline-none 
    focus:outline-none
`
export const ModalRoot = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 999;
`
export const TitleWrapper = tw.div`
    flex
    justify-between
`