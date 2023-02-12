import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {useTheme} from "@/app/providers/ThemePovider";
import {classNames} from "@/shared/lib/classNames/classNames";
import {AboutPage} from "@/pages/AboutPage";
import {MainPage} from "@/pages/MainPage";


const App = () => {

    const {theme, toggleTheme} = useTheme();


    return (
        // <div className={`app ${theme}`}>
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/about'}>О приложении</Link>
            <Link to={'/'}>Главная</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;