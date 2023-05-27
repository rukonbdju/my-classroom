import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import bg from '../../assets/grid-bg.png'

const HomeLayout = () => {
    return (
        <div className="bg-slate-100 min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;