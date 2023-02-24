import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Button, ButtonSize, ButtonVariables } from '@/shared/ui/Button/Button';
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

  const { t } = useTranslation();

  return (
      <div data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button variable={ButtonVariables.BACKGROUND_INVERT} square size={ButtonSize.L} className={cls.collapseBtn} data-testid="toggle-btn" onClick={toggleCollapsed}>
              { collapsed ? '>' : '<' }
          </Button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LanguageSwitcher />
          </div>
      </div>
  );
};
