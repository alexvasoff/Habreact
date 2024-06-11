import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
}
export const Input = (props: InputProps) => {
  const {
    className,
    label,
    value,
    onChange,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
      <div className={cls.inputWrapper}>
          {label && <p>{label}</p>}
          <input
              value={value}
              onChange={onChangeHandler}
              className={cls.input}
              {...otherProps}
          />
      </div>
  );
};
