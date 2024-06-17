import React, { FC } from 'react';
import cls from './Text.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type TextThem = 'default' | 'error'

export interface TextProps {
  title?: string;
  text?: string;
  theme?: TextThem
}

export const Text: FC<TextProps> = (props) => {
  const { text, title, theme = 'default' } = props;
  return (
      <div className={cls[theme]}>
          <p className={classNames(cls.title)}>{title}</p>
          <p className={classNames(cls.text)}>{text}</p>
      </div>
  );
};
