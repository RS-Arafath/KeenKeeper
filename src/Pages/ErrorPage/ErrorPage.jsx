import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#E8F1ED] px-6 py-16">
            <div className="mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center">
                <div className="section-fade-in interactive-card w-full rounded-3xl border border-[#DDE7E2] bg-white/90 p-10 text-center shadow-[0_20px_80px_rgba(36,77,63,0.12)] backdrop-blur">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#244D3F]">
                        Oops, this page is missing
                    </p>
                    <h1 className="mb-4 text-4xl font-bold text-[#1F2937] md:text-5xl">
                        404 Page Not Found
                    </h1>
                    <p className="mx-auto mb-8 max-w-xl text-base leading-7 text-[#64748B] md:text-lg">
                        The page you requested could not be found. Please check the URL or head back to the homepage.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            to="/"
                            className="interactive-button rounded-xl border border-[#244D3F] bg-[#244D3F] px-6 py-3 text-base font-semibold text-white transition hover:bg-transparent hover:text-[#244D3F]"
                        >
                            Back to Home
                        </Link>
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="interactive-button rounded-xl border border-[#244D3F] px-6 py-3 text-base font-semibold text-[#244D3F] transition hover:bg-[#244D3F] hover:text-white"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
