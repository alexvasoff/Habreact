import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Button, ButtonSize, ButtonVariables } from '@/shared/ui/Button/Button';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ListIcon from '@/shared/assets/icons/list.svg';

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
          <Button
              variable={ButtonVariables.BACKGROUND_INVERT}
              square
              size={ButtonSize.L}
              className={cls.collapseBtn}
              data-testid="toggle-btn"
              onClick={toggleCollapsed}
          >
              {collapsed ? '>' : '<'}
          </Button>
          <div className={cls.links}>
              <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                  <HomeIcon className={cls.icon} />
                  <span className={cls.link}>{t('Главная')}</span>
              </AppLink>
              <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                  <ListIcon className={cls.icon} />
                  <span className={cls.link}>{t('О приложении')}</span>
              </AppLink>
          </div>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LanguageSwitcher short={collapsed} />
          </div>
      </div>
  );
};
