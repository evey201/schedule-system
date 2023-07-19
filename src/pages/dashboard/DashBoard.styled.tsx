import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.12);
    margin: auto;
    transform: matrix(1, 0, 0, -1, 0, 0);
`

const CardExpand = styled.div` 
    max-height: 80px;
    transition: max-height 500ms ease-in-out;  
    &:hover {
        max-height: 500px;
    }
`
export const CardExpandWrapper = tw(CardExpand)`
border-2 border-primary-500 bg-neutral-100 w-full rounded-[14px] px-4 py-2 flex flex-col gap-3 justify-between items-center
`

export const TopContentWrapper = tw.div`
    flex 
    items-center 
    justify-between
`

export const IconWrapper = tw.div`
`

export const TitleWrapper = tw.div``

export const Title = tw.h6``

export const BottomContentWrapper = tw.div`
    overflow-hidden
`

export const Description = tw.p`
    text-justify
`