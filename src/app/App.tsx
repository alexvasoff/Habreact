import React from 'react';
import {useTheme} from "@/app/providers/ThemePovider";
import {classNames} from "@/shared/lib/classNames/classNames";
import AppRouter from './providers/router';
import './styles/index.scss';
import {Navbar} from "@/widgets/Navbar";
import {Sidebar} from "@/widgets/Sidebar";


const App = () => {

    const {theme} = useTheme();


    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className={'content'}>
                <Sidebar/>
                <AppRouter/>
            </div>

        </div>
    );
};

export default App;