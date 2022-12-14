import { ButtonHTMLAttributes, ReactNode } from "react";


// button props
export interface ButtonProps {
    className?: string
    translate?: string
    sizeClass?: string
    fontSize?: string
    //
    loading?: boolean
    disabled?: boolean
    secondary?: boolean
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
    href?: string
    targetBlank?: boolean
    onClick?: () => void
    children?: ReactNode
    full?: boolean
};
