import { createPortal } from "react-dom"
import Card from '../../components/Card/Card.jsx'
export default function Modal({ isOpen, onClose, project, children }) {
    if (!isOpen) return null
    return createPortal(
        <>
            <div className="fixed inset-0 z-100 flex items-center justify-center bg-neutral-400/70">
                <Card className="p-4 rounded-lg shadow-lg relative md:min-h-120 h-auto md:min-w-240 w-full">

                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-600 hover:text-black"
                    >
                        ✕
                    </button>
                    {project?.name && <h2 className="text-xl font-bold">{project.name}</h2>}
                    {children}

                </Card>
            </div>
        </>,
        document.getElementById('modal-section')
    );
}