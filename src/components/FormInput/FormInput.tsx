/* eslint-disable @typescript-eslint/no-explicit-any */
import { Password } from './Password'
import { FormInputProps } from './formInput'
import { InputContainer, Label, InputElement, Validation } from './FormInput.styled'


export const FormInput = ({
    // onError,
    error,
    children,
    className,
    label,
    onChange,
    type,
    name,
    value,
    disabled,
    placeholder,
}: FormInputProps) => {
    error = error ? error.toString() : ''
    return (
        <InputContainer>
            {label && (
                <Label>
                    {label}
                </Label>
            )}
            <InputElement
                // onError={error}
                type={type}
                name={name}
                disabled={disabled}
                value={value}
                onChange={onChange}
                autoComplete="off"
                placeholder={placeholder}
            />
            {error && (
                <Validation>
                    {/* <Caution /> */}
                    {error}
                </Validation>
            )}
        </InputContainer>
    )
}

FormInput.Password = Password;