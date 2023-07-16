import tw from 'tailwind-styled-components'
import styled from 'styled-components'

interface StyledProps {
   readonly error: boolean,
   readonly visible: boolean,
//    readonly placeholder: boolean
}
type LabelProps = {
    error?: boolean;
  };

export const InputContainer = tw.div`
    py-3
    px-0
    w-full
    mb-1
`

export const Label = tw.label<LabelProps>`
    text-neutral-500
    pb-3
    inline-block
    ${(p) => (p.error ? 'ring-error-500' : 'ring-neutral-300')}
`

export const InputElement = tw.input<{ error?: boolean }>`
    focus:outline-none
    focus:ring-1
    border
    disabled:bg-opacity-10
    focus:border-transparent
    ${(p) => (p.error ? 'ring-error-500' : 'ring-neutral-300')}
    ${(p) => (p.error ? 'border-error-500' : 'border-neutral-300')}
    rounded-lg
    w-full
    ${(p) => (p.error ? 'bg-error-50' : 'bg-primary-50')}
    ${(p) => (p.error ? 'bg-opacity-10' : '')}
    py-2.5
    px-3
    ${(p) => (p.placeholder ? 'text-neutral-400' : '')}
    text-neutral-900
`

export const Validation = tw.span`
    block
    px-0
    flex
    items-center
    pt-1
    font-thin
    text-xs
    text-error-500
    pb-0
`
export const PasswordEye = styled.span<StyledProps>`
    svg {
        path {
            fill: ${(props) => (props.visible ? '#300C4D' : '#111827')};
        }
    }
`

export const PasswordElement = tw.input<{ error?: boolean }>`
    focus:outline-none
    focus:ring-1
    pr-8
    border
    disabled:bg-opacity-10
    focus:border-transparent
    ${(p) => (p.error ? 'ring-error-500' : 'ring-primary-300')}
    ${(p) => (p.error ? 'border-error-500' : 'border-primary-300')}
    rounded-lg
    w-full
    ${(p) => (p.error ? 'bg-error-50' : 'bg-primary-50')}
    ${(p) => (p.error ? 'bg-opacity-10' : '')}
    py-2.5
    px-3
    ${(p) => (p.placeholder ? 'text-neutral-400' : '')}
    text-neutral-900
`