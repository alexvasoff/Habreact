import React from 'react';
import cls from './Navbar.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';

interface NavbarProps {
    className?: string
}
export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
      <div className={classNames(cls.navbar, {}, [className])}>
          <div className={cls.appName} />

      </div>
  );
};
