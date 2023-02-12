import React from 'react';
import {useTheme} from "@/app/providers/ThemePovider";
import {classNames} from "@/shared/lib/classNames/classNames";
import AppRouter from './providers/router';
import './styles/index.scss'
import {Navbar} from "@/widgets/Navbar";


const App = () => {

    const {theme, toggleTheme} = useTheme();


    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;