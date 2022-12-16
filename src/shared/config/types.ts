import { ChangeEvent, FormEvent } from "react";
import { ButtonHTMLAttributes, ReactNode } from "react";
//
import { ILogin } from "@modules/Login/config/types";


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


// change Event types
export type InputChange = ChangeEvent<HTMLInputElement>
export type FormSubmit = FormEvent<HTMLFormElement>


// react-query types
export type Response = {
    ts: Date;
    items: string[];
};

export interface QueryTypes { 
    mutate ?: any
    data ?: any
    isLoading ?: boolean
    isError ?: boolean
    error ?: any 
}

// User types
export interface IUser extends ILogin {
    avatar: string
    createdAt: string
    name: string
    role: string
    type: string
    updatedAt: string
    _id: string
}


// redux types
export type IAlert = {
   status : string,
   message : string
}
 
export type IAuth = {

}
 
 export type IGlobal = {
    auth : IAuth,  
    alert : IAlert
 }
 
 export type IReducer = {
    global : IGlobal
 }