import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Footer from '../components/Footer/Footer';

const RecipesLayout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default RecipesLayout;
