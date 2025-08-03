import { useState } from 'react';

export default function Slider({ children, page, setPage, navigating }) {
    const totalPages = children.length || 0;
    const nextSlide = () => {
        setPage(prev => (prev < totalPages - 1 ? prev + 1 : prev));
        navigating();
    }

    const prevSlide = () => {
        setPage(prev => (prev > 0 ? prev - 1 : prev));
        navigating();
    }

    return (
        <div className="  w-screen h-screen overflow-hidden">
            <div className="absolute top-1/2 left-0 z-50">
                <button
                    onClick={prevSlide}
                    className="bg-white/40 rounded border border-gray-400/60 shadow-lg text-sky-800 px-4 py-2"
                >
                    Left
                </button>
            </div>

            <div className="absolute top-1/2 right-0 z-50">
                <button
                    onClick={nextSlide}
                    className="bg-white/40 rounded border border-gray-400/60 shadow-lg text-sky-800 px-4 py-2"
                >
                    Right
                </button>
            </div>

            {/* Main Content Area */}
            <div className="flex mt-30 justify-center w-full h-full">
                <div className="max-w-2xl w-full px-4 z-10">
                    {Array.isArray(children) ? children[page] : children}
                </div>
            </div>

        </div>
    )
}