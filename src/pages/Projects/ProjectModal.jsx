import Modal from '../../components/Modal/Modal.jsx'
import Logo from '../../components/Logo/Logo.jsx'

export default function ProjectModal({ isOpen, closeModal, project, children }) {
    if (!project) return null

    return (
        <>
            <Modal isOpen={isOpen} onClose={closeModal}>
                {project?.name && <h2 className="text-xl font-bold">{project.name}</h2>}
                <div className="
                            project-modal
                            border-2 border-sky-300 dark:border-indigo-400
                            rounded-full
                            absolute top-1/12 left-0 h-10/12
                            drop-shadow-sky-400 drop-shadow-xl
                            dark:drop-shadow-indigo-100
                            ">
                </div>
                <div className='project-modal-body text-start mt-3 max-h-[50vh] overflow-auto'>
                    <div className="flex lg:flex-row flex-col gap-5 ">
                        <div className="details lg:max-w-[35vw] ms-5 text-neutral-600 dark:text-gray-400">
                            {project?.description && project.description}
                        </div>
                        {project?.images &&
                            <div className="image-container flex flex-col gap-y-3 mx-auto max-h-[60vh] md:overflow-auto">
                                {project.images.map((image, index) => (
                                    <img src={image} alt="" key={index} />
                                ))}
                                {/* <img src="/Portfolio/src/assets/images/Projects/onesys_v2/image1.png" alt="" /> */}
                            </div>
                        }
                    </div>
                </div>
                <div className="border-zinc-400 border-1 my-2.5"></div>
                <div className="technologies flex  flex-wrap gap-2.5 justify-center overflow-auto">
                    {project?.technologies && project.technologies.map((icon, index) => (
                        <div key={index} className="
                                        text-zinc-600 dark:text-indigo-100
                                        p-2 relative flex flex-row items-center">
                            <Logo logo={icon} size="30" />
                            <p className='indent-1 my-auto md:text-md text-xs'>{icon}</p>
                        </div>
                    ))}
                </div>
                <div className="additional text-neutral-600 dark:text-neutral-100">
                    {children}
                </div>
            </Modal>
        </>
    )
}