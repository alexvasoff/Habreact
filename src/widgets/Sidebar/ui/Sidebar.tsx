import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {Button} from "@/shared/ui/Button/Button";
import React, {useState} from "react";
import {ThemeSwitcher} from "@/features/ThemeSwitcher";


interface SidebarProps {
    className?: string
}
export const Sidebar = (props: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [props.className])}>
            <Button onClick={toggleCollapsed}>Collapse</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};