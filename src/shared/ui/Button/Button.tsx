import { ButtonHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonVariables {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERT = 'backgroundInvert'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variable?: ButtonVariables,
    square?: boolean,
    size?: ButtonSize
}

export const Button = (props: ButtonProps) => {
  const {
    variable, square, size, children, className, ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
      <button
          type="button"
          {...otherProps}
          className={classNames(cls.button, mods, [className, cls[variable], cls[size]])}
      >
          {children}
      </button>
  );
};
