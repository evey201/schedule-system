import React, { ReactNode, ChangeEvent } from "react";

type InputProps = {
    visible?: boolean
    setVisible?: React.Dispatch<React.SetStateAction<boolean>>,
    error?: string,
    label: string,
    disabled?: boolean,
    name?: string,
    className?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    value?: string,
    type?: React.HTMLInputTypeAttribute,
    onError?: React.ReactEventHandler<HTMLInputElement>
}


export type FormInputProps = InputProps & {
    children?: ReactNode,
}