import React from 'react';
import {Link} from 'react-router-dom';
import {useTheme} from "@/app/providers/ThemePovider";
import {classNames} from "@/shared/lib/classNames/classNames";
import AppRouter from './providers/router';
import './styles/index.scss'


const App = () => {

    const {theme, toggleTheme} = useTheme();


    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/about'}>О приложении</Link>
            <Link to={'/'}>Главная</Link>
            <AppRouter/>
        </div>
    );
};

export default App;