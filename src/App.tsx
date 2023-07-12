import React, { Suspense } from 'react';
import module from "./App.module.scss";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";

export const App = () => {
    return (
        <div className={module.title}>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageLazy/>}/>
                    <Route path='/about' element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};
