import { ButtonHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonVariables {
    CLEAR = 'clear'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variable?: ButtonVariables
}

export const Button = (props: ButtonProps) => {
  const {
    variable, children, className, ...otherProps
  } = props;
  return (
      <button
          type="button"
          {...otherProps}
          className={classNames(cls.button, {}, [className, cls[variable]])}
      >
          {children}
      </button>
  );
};
