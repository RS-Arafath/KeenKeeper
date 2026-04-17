import React from 'react';
import { BsGraphUp } from 'react-icons/bs';
import { LuClock3 } from 'react-icons/lu';
import { RiHome2Line } from 'react-icons/ri';
import { NavLink } from 'react-router';
import Logo from '../../../assets/logo.png';

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 border-b border-[#E9E9E9]/80 bg-white/90 backdrop-blur-md'>
            <div className="navbar bg-transparent shadow-sm px-5 lg:px-20">
                <div className="navbar-start">
                    {/* Mobile dropdown navigation */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost interactive-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow-lg">
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-[#244D3F] text-white shadow-sm' : 'hover:bg-[#EFF6F2] hover:text-[#244D3F]') + ' py-3 px-4 flex items-center gap-1 text-lg font-semibold rounded-sm text-[#64748B] transition'}>
                                <RiHome2Line /> Home
                            </NavLink>
                            <NavLink to="/timeline" className={({ isActive }) => (isActive ? 'bg-[#244D3F] text-white shadow-sm' : 'hover:bg-[#EFF6F2] hover:text-[#244D3F]') + ' py-3 px-4 flex items-center gap-1 text-lg font-semibold rounded-sm text-[#64748B] transition'}>
                                <LuClock3 /> Timeline
                            </NavLink>
                            <NavLink to="/stats" className={({ isActive }) => (isActive ? 'bg-[#244D3F] text-white shadow-sm' : 'hover:bg-[#EFF6F2] hover:text-[#244D3F]') + ' py-3 px-4 flex items-center gap-1 text-lg font-semibold rounded-sm text-[#64748B] transition'}>
                                <BsGraphUp /> Stats
                            </NavLink>
                        </ul>
                    </div>
                    <a href="" className="interactive-button rounded-xl p-2">
                        <img src={Logo} alt="KeenKeeper" />
                    </a>
                </div>
                {/* Desktop navigation */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-[#244D3F] text-white shadow-sm' : 'hover:bg-[#EFF6F2] hover:text-[#244D3F]') + ' py-3 px-4 flex items-center gap-1 text-lg font-semibold rounded-sm text-[#64748B] interactive-button'}>
                            <RiHome2Line /> Home
                        </NavLink>
                        <NavLink to="/timeline" className={({ isActive }) => (isActive ? 'bg-[#244D3F] text-white shadow-sm' : 'hover:bg-[#EFF6F2] hover:text-[#244D3F]') + ' py-3 px-4 flex items-center gap-1 text-lg font-semibold rounded-sm text-[#64748B] interactive-button'}>
                            <LuClock3 /> Timeline
                        </NavLink>
                        <NavLink to="/stats" className={({ isActive }) => (isActive ? 'bg-[#244D3F] text-white shadow-sm' : 'hover:bg-[#EFF6F2] hover:text-[#244D3F]') + ' py-3 px-4 flex items-center gap-1 text-lg font-semibold rounded-sm text-[#64748B] interactive-button'}>
                            <BsGraphUp /> Stats
                        </NavLink>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
