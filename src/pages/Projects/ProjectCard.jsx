import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'
export default function ProjectCard({ project, children }) {
    return (
        <>
            <Card title={project.name && project.name} className="hover:rotate-2 ease-linear duration-100 hover:text-orange-400">
                <div className="
                        border-2 border-indigo-400 
                        rounded-full
                        absolute top-1/12 left-0 h-10/12 
                        drop-shadow-sky-900 drop-shadow-xl
                        dark:drop-shadow-indigo-100
                        ">
                </div>
                <div className='text-start'>

                    <div className="description text-neutral-600 dark:text-gray-400">
                        {project.description && <p>{project.description}</p>}
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

                <div className="additional text-neutral-600 dark:text-neutral-100">
                    {children}
                </div>

                <div className='flex justify-end mt-2.5'>
                    <button>ShowMore</button>
                </div>
            </Card>
        </>
    );
}