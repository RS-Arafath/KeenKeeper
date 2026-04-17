import React from 'react';
import Navbar from "../Components/Shared/Navbar/Navbar.jsx";
import {Outlet} from "react-router";
import Footer from '../Components/Shared/Footer/Footer.jsx';

const MainLayout = () => {
    return (
        // Shared page shell used by every route.
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <div className='flex-1'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
