import { createPortal } from "react-dom"
import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'


export default function Modal({ isOpen, onClose, project, children }) {
    if (!isOpen) return null
    return createPortal(
        <>
            <div className="fixed inset-0 z-100 flex items-center justify-center bg-neutral-400/70">
                <Card className="p-4 rounded-lg shadow-lg relative ">

                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-600 hover:text-black"
                    >
                        ✕
                    </button>
                    {project?.name && <h2 className="text-xl font-bold">{project.name}</h2>}
                    {children}

                    {/* Temprary Section */}
                    <div className="
                        border-2 border-sky-300 dark:border-indigo-400
                        rounded-full
                        absolute top-1/12 left-0 h-10/12
                        drop-shadow-sky-400 drop-shadow-xl
                        dark:drop-shadow-indigo-100
                        ">
                    </div>
                    <div className='text-start'>

                        <div className="description text-neutral-600 dark:text-gray-400">
                            {project.description && project.description}
                        </div>
                        <div className="border-zinc-400 border-1 my-2.5"></div>

                        <div className="technologies flex  flex-wrap gap-2.5 justify-center">
                            {project.technologies && project.technologies.map((icon, index) => (
                                <div
                                    className="
                                text-zinc-600 dark:text-indigo-100
                                p-2 relative flex flex-row items-center">
                                    <Logo logo={icon} size="30" />
                                    <p className='indent-1 my-auto'>{icon}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="image-container">
                        {project.images && project.images.map((image, index) => (
                            <div></div>
                        ))}
                    </div>



                    <div className="additional text-neutral-600 dark:text-neutral-100">
                        {children}
                    </div>
                </Card>
            </div>
        </>,
        document.getElementById('modal-section')
    );
}