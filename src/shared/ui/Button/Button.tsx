import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes} from "react";

export enum ButtonVariables {
    CLEAR = 'clear'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variable?: ButtonVariables
}

export const Button = (props: ButtonProps) => {
    const {variable, children, ...otherProps} = props;
    return (
        <button {...otherProps} className={classNames(cls.button, {}, [props.className, cls[variable]])}>
            {children}
        </button>
    );
};
