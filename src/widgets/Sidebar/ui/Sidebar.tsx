import React, { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';

interface SidebarProps {
    className?: string
}
export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { className } = props;

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
      <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button onClick={toggleCollapsed}>Collapse</Button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LanguageSwitcher />
          </div>
      </div>
  );
};
