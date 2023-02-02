import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Counter from "./components/Counter";
import './index.scss';
import {AboutPageLazy} from "./pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "./pages/MainPage/MainPageLazy";

const App = () => {
    return (
        <div className={'app'}>
            <Link to={'/about'}>О приложении</Link>
            <Link to={'/'}>Главная</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
            <h1>HEllo</h1>
            <Counter/>
        </div>
    );
};

export default App;