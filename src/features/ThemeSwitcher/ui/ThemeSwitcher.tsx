import { ButtonHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/app/providers/ThemePovider';
import ThemeLight from '@/shared/assets/icons/theme-light.svg';
import ThemeDark from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonVariables } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps extends ButtonHTMLAttributes<any> {
    className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const { className } = props;
  return (
      <Button variable={ButtonVariables.CLEAR} onClick={() => toggleTheme()} className={classNames('', {}, [className])}>
          {theme === Theme.LIGHT ? <ThemeLight /> : <ThemeDark />}
      </Button>
  );
};
