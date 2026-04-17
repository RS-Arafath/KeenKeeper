import React from 'react';
import Footer_Logo from '../../../assets//logo-xl.png';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import FooterText from './FooterText';

const Footer = () => {
    return (
        // Main footer area with app summary and social link buttons.
        <div className='relative overflow-hidden bg-[#244D3F] text-white'>
            <div className="pointer-events-none absolute -left-10 top-8 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-8 bottom-8 h-40 w-40 rounded-full bg-[#2FA866]/20 blur-3xl" />
            <div className="container mx-auto flex flex-col items-center gap-6 border-b border-[#1A8862]/20 px-5 pb-10 pt-20 text-center lg:px-0">
                <div className="section-fade-in flex flex-col items-center gap-4">
                    <img src={Footer_Logo} alt="KeenKeeper" />
                    <p className="max-w-2xl text-white/80">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </div>
                <div className="section-fade-in flex flex-col items-center gap-4">
                    <h1 className='text-xl font-medium leading-7'>Social Links</h1>
                    <div className="flex items-center text-[#101727] gap-4">
                        <a href="" className='interactive-button flex items-center justify-center rounded-full border border-white bg-white shadow-sm hover:bg-transparent hover:text-white transition duration-300'>
                            <RiInstagramFill className='m-2 text-xl' />
                        </a>
                        <a href="" className='interactive-button flex items-center justify-center rounded-full border border-white bg-white shadow-sm hover:bg-transparent hover:text-white transition duration-300'>
                            <FaFacebookSquare className='m-2 text-xl' />
                        </a>
                        <a href="" className='interactive-button flex items-center justify-center rounded-full border border-white bg-white shadow-sm hover:bg-transparent hover:text-white transition duration-300'>
                            <BsTwitterX className='m-2 text-xl' />
                        </a>
                    </div>
                </div>
            </div>
            <div className="">
                <FooterText />
            </div>
        </div>
    );
};

export default Footer;
