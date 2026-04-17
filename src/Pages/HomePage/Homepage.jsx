import React, { Suspense } from 'react';
import Banner from '../../Components/HomePage/Banner';
import AllFriends from '../../Components/HomePage/AllFriends';

const Homepage = () => {
    return (
        // Home page combines the hero banner and the friends overview grid.
        <div className='bg-[#F8FAFC] min-h-screen pt-20 px-5 lg:px-0'>
            <Banner />
            <Suspense
                fallback={
                    <div className="flex justify-center py-20">
                        <span className="loading loading-spinner loading-xl"></span>
                    </div>
                }
            >
                <AllFriends />
            </Suspense>
        </div>
    );
};

export default Homepage;
