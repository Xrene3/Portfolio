import { createPortal } from "react-dom"
import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'


export default function Modal({ isOpen, onClose, project, children }) {
    if (!isOpen) return null
    return createPortal(
        <>
            <div className="fixed inset-0 z-100 flex items-center justify-center bg-neutral-950/30" onClick={onClose}>
                <div className="lg:w-3/6 md:w-4/5 w-full rounded-lg shadow-lg relative overflow-hidden max-h-3/5vh" onClick={(e) => e.stopPropagation()} >
                    <Card  >

                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                        >
                            ✕
                        </button>
                        {children}
                    </Card>
                </div>
            </div>
        </>,
        document.getElementById('modal-section')
    );
}