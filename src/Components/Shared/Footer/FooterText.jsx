import React from 'react';

const FooterText = () => {
    return (
        // Bottom footer row with copyright and quick legal links.
        <div className='container mx-auto my-8 flex flex-col justify-between gap-4 px-5 text-center text-[#FAFAFA]/50 lg:flex-row lg:px-0'>
            <h1>&copy; 2026 KeenKeeper. All rights reserved.</h1>
            <div className="space-x-5 lg:space-x-10">
                <a href="" className='transition hover:text-[#fafafa]'>Privacy Policy</a>
                <a href="" className='transition hover:text-[#fafafa]'>Terms of Service</a>
                <a href="" className='transition hover:text-[#fafafa]'>Cookies</a>
            </div>
        </div>
    );
};

export default FooterText;
