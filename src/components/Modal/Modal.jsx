import { createPortal } from "react-dom"
import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'


export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null
    return createPortal(
        <>
            <div className="fixed inset-0 z-100 flex items-center justify-center bg-neutral-800/80 dark:bg-neutral-950/60" onClick={onClose}>
                <div className="modal md:max-w-5/6 rounded-lg shadow-lg relative max-h-[95vh] overflow-auto" onClick={(e) => e.stopPropagation()} >
                    <Card  >

                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                        >
                            ✕
                        </button>
                        <div>
                            {children}
                        </div>
                    </Card>
                </div>
            </div>
        </>,
        document.getElementById('modal-section')
    );
}