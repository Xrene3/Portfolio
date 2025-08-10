import { useState } from 'react';

export default function Slider({ children, page, setPage, isMobile }) {
    const totalPages = children.length || 0;
    const nextSlide = () => {
        setPage(prev => (prev < totalPages - 1 ? prev + 1 : prev));
    }

    const prevSlide = () => {
        setPage(prev => (prev > 0 ? prev - 1 : prev));
    }

    return (
        <>
            {isMobile ?
                <div className="flex flex-col gap-5 justify-center w-full">
                    <div className="p-2 5 z-50">
                        {children}
                    </div>
                </div>

                :
                <div className="flex justify-between">
                    <div className={`${page < 1 ? 'hidden' : ''} fixed absolute md:top-1/2 left-0 z-70 md:me-5`}>
                        <button
                            onClick={prevSlide}
                            className="bg-white/40 rounded border border-gray-400/60 shadow-lg text-sky-800 px-4 py-2">
                            Left
                        </button>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex justify-center w-full h-full z-50 md:px-30">
                        <div className="lg:6/7 md:w-4/5  px-4 z-10">
                            {Array.isArray(children) ? children[page] : children}
                        </div>
                    </div>

                    <div className={`${page >= totalPages - 1 ? 'hidden' : ''} fixed absolute md:top-1/2 right-0 z-70 md:ms-5`}>
                        <button
                            onClick={nextSlide}
                            className="bg-white/40 rounded border border-gray-400/60 shadow-lg text-sky-800 px-4 py-2 md:ms-5">
                            Right
                        </button>
                    </div>
                </div>
            }
        </>
    )
}