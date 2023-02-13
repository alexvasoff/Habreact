import React from 'react';
import cls from './Navbar.module.scss'
import {AppLink} from "@/shared/ui/AppLink/AppLink";
import {classNames} from '@/shared/lib/classNames/classNames';
import {ThemeSwitcher} from "@/features/ThemeSwitcher";


interface NavbarProps {
    className?: string
}
export const Navbar = (props: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [props.className])}>
            <div className={cls.appName}></div>
            <div className={cls.themeSwitcher}>
                <ThemeSwitcher/>
            </div>
            <div className={cls.links}>
                <AppLink to={'/about'}>О приложении</AppLink>
                <AppLink to={'/'}>Главная</AppLink>
            </div>
        </div>
    );
};
