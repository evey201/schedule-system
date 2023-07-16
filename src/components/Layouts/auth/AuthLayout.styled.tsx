import tw from 'tailwind-styled-components'

export const FullScreen = tw.div`
    w-full
    flex
    sm:flex-row
    overflow-auto
    sm:overflow-hidden
    flex-col 
    justify-between
    min-h-screen
    md:h-screen
`
export const LeftScreenOverlay = tw.div`
    sm:h-screen
    sm:bg-neutral-100
    sm:w-1/3
    sm:shadow-none
    w-full
    flex
    flex-col
    justify-between
`
export const TopWrapper = tw.div`
    flex
    justify-between
    shadow-sm
    sm:shadow-none
    sm:block
    sm:pt-10
    sm:pl-10
    pt-14
    pl-10
`
export const RightScreenOverlay = tw.div`
   flex
   flex-1
   sm:pl-14
   pl-10
   pt-6
   relative
   sm:overflow-scroll
   sm:h-screen
`
export const TitleWrapper = tw.div`
    pt-12
`
export const Title = tw.h1`
    hidden
    sm:block
    font-medium
    sm:pb-10
    text-2xl
    font-bold
`
export const ImageContainer = tw.div`
    hidden
    sm:block
    w-full
`