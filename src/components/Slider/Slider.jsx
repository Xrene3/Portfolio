import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function Slider({ children }) {
    const [pageNumber, setPage] = useState(0);
    const totalPages = children.length || 0;
    const nextSlide = () => {
        setPage(prev => (prev < totalPages - 1 ? prev + 1 : prev));
    }

    const prevSlide = () => {
        setPage(prev => (prev > 0 ? prev - 1 : prev));
    }

    return (
        <div className="min-w-screen min-h-screen w-full flex justify-between bottom-80 px-1">
            <div className='my-auto'>
                <button onClick={prevSlide} className='bg-white/40 rounded border-1 border-gray-400/60 shadow-lg text-sky-800 px-2.5 py-4 z-50'>
                    <FontAwesomeIcon icon={faArrowLeft} fontSize={24} />
                </button>
            </div>

            <div className="relative w-full max-w-2xl">
                {Array.isArray(children) ? children[pageNumber] : children}
            </div>

            <div className='my-auto'>
                <button onClick={nextSlide} className='bg-white/40 rounded border-1 border-gray-400/60 shadow-lg text-sky-800 px-2.5 py-4 z-50'>
                    <FontAwesomeIcon icon={faArrowRight} fontSize={24} />
                </button>
            </div>
        </div >
    )
}
