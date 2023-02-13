import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {ButtonHTMLAttributes} from "react";
import {Theme, useTheme} from "@/app/providers/ThemePovider";
import ThemeLight from "@/shared/assets/icons/theme-light.svg";
import ThemeDark from "@/shared/assets/icons/theme-dark.svg";
import {Button, ButtonVariables} from "@/shared/ui/Button/Button";


interface ThemeSwitcherProps extends ButtonHTMLAttributes<any> {
    className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button variable={ButtonVariables.CLEAR} onClick={() => toggleTheme()} className={classNames(cls.themeSwitcher, {}, [props.className])}>
            {theme === Theme.LIGHT ? <ThemeLight/> : <ThemeDark/>}
        </Button>
    );
};
