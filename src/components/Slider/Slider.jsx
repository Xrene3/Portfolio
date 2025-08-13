import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
                    <div className="p-2 5 z-50 flex flex-col gap-y-5 mb-5">
                        {children}
                    </div>
                </div>

                :
                <div className="flex justify-between h-full">
                    <div className={`${page < 1 ? 'hidden' : ''} fixed absolute md:top-1/2 left-0 z-70 md:me-5`}>
                        <button
                            onClick={prevSlide}
                            className="py-5 rounded 
                            bg-sky-50/40 dark:bg-neutral-400/20
                            text-zinc-600 dark:text-indigo-100 hover:text-orange-500/80 ease-linear duration-150
                            border border-gray-400/60 shadow-lg px-4">
                            <FaArrowLeft />
                        </button>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex justify-center mt-[6vh] w-full z-50 md:px-30">
                        <div className="2xl:w-5/7  lg:w-[80vw] md:w-4/5 px-4 z-10 mt-1/2 flex flex-col gap-y-8">
                            {Array.isArray(children) ? children[page] : children}
                            {/* {children} */}
                        </div>
                    </div>

                    <div className={`${page >= totalPages - 1 ? 'hidden' : ''} fixed absolute md:top-1/2 right-0 z-70 md:ms-5`}>
                        <button
                            onClick={nextSlide}
                            className="py-5 rounded 
                            bg-sky-50/40 dark:bg-neutral-400/20
                            text-zinc-600 dark:text-indigo-100 hover:text-orange-500/80 ease-linear duration-150
                            border border-gray-400/60 shadow-lg px-4 md:ms-5">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            }
        </>
    )
}