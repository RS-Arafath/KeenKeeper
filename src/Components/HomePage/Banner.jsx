import React from 'react';
import { MdAdd } from 'react-icons/md';

const Banner = () => {
    return (
        // Intro section 
        <div className=' container mx-auto pb-10 text-center'>
            <div className="relative overflow-hidden rounded-4xl border border-white/70 bg-white/70 px-6 py-12 shadow-[0_24px_80px_rgba(36,77,63,0.08)] backdrop-blur-sm lg:px-16 lg:py-16">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#DDFCE7]/70 to-transparent" />
                <div className="pointer-events-none absolute -right-12 top-10 h-32 w-32 rounded-full bg-[#DBEAFE]/80 blur-3xl" />
                <div className="pointer-events-none absolute -left-10 bottom-8 h-28 w-28 rounded-full bg-[#FEF3C7]/90 blur-3xl" />
                <div className="relative space-y-6">
                    <div className="space-y-4">
                        <span className="mx-auto inline-flex rounded-full border border-[#DDE6EE] bg-white/80 px-4 py-2 text-sm font-semibold text-[#244D3F] shadow-sm">
                            Keep Your Circle Warm
                        </span>
                        <h1 className='text-4xl font-bold leading-tight lg:text-6xl'>Friends to keep close in your life</h1>
                        <p className='mx-auto max-w-2xl px-0 text-base leading-8 text-[#64748B] lg:text-lg'>
                            Your personal shelf of meaningful connections. Browse, tend,
                            <br className="block lg:hidden" />
                            <span className="inline lg:hidden"> </span>
                            and nurture the
                            <br className="hidden lg:block" />
                            <span className="hidden lg:inline"> </span>
                            relationships that matter most.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button
                            type="button"
                            className="interactive-button inline-flex min-h-[56px] items-center justify-center gap-2 rounded-2xl border border-[#244D3F] bg-[#244D3F] px-7 py-3 text-lg font-semibold text-white shadow-[0_12px_24px_rgba(36,77,63,0.18)] hover:bg-transparent hover:text-[#244D3F]"
                        >
                            <MdAdd className="text-2xl" /> Add a Friend
                        </button>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
