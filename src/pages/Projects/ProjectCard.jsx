import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'

export default function ProjectCard({ project, children, openModal }) {
    return (
        <>
            <Card title={project.name && project.name} className="w-full 2xl:w-120 xl:w-100 md:hover:rotate-1 ease-linear duration-100">
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
                        {/* {project.description && <p className="text-wrap">{project.description}</p>} */}
                        {project.summary && project.summary}
                    </div>
                    <div className="border-zinc-400 border-1 my-2.5"></div>

                    <div className="technologies flex  flex-wrap gap-2.5 justify-center md:text-md text-xs font-semibold">
                        {project.technologies && project.technologies.map((icon, index) => (
                            <div
                                key={project.name + '_technology_' + index}
                                className="
                                text-zinc-600 dark:text-indigo-100
                                p-2 relative flex flex-row items-center">
                                <Logo logo={icon} size="30" />
                                <p className='indent-1 my-auto'>{icon}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="additional text-neutral-600 dark:text-neutral-100 mb-5">
                    {children}
                </div>
                <div className='absolute bottom-0 right-0 p-5'>
                    <button className="transition ease-linear duration-300  dark:hover:text-lime-200 py-2 px-5 hover:bg-neutral-600/20 rounded-full" onClick={() => openModal(project)}>ShowMore</button>
                </div>
            </Card >
        </>
    );
}
// export default function ProjectCard({ project, children }) {
//     return (
//         <>
//             <Card title={project.name && project.name} className="max-w-2/5 md:hover:rotate-1 ease-linear duration-100 hover:text-orange-400">
//                 <div className="
//                         border-2 border-sky-300 dark:border-indigo-400
//                         rounded-full
//                         absolute top-1/12 left-0 h-10/12
//                         drop-shadow-sky-400 drop-shadow-xl
//                         dark:drop-shadow-indigo-100
//                         ">
//                 </div>
//                 <div className='text-start'>

//                     <div className="description text-neutral-600 dark:text-gray-400">
//                         {project.description && <p className="text-wrap">{project.description}</p>}
//                     </div>
//                     <div className="border-zinc-400 border-1 my-2.5"></div>

//                     <div className="technologies flex  flex-wrap gap-2.5 justify-center">
//                         {project.technologies && project.technologies.map((icon, index) => (
//                             <div
//                                 className="
//                                 text-zinc-600 dark:text-indigo-100
//                                 p-2 relative flex flex-row items-center">
//                                 <Logo logo={icon} size="30" />
//                                 <p className='indent-1 my-auto'>{icon}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="additional text-neutral-600 dark:text-neutral-100">
//                     {children}
//                 </div>

//                 <div className='flex justify-end mt-2.5'>
//                     <button>ShowMore</button>
//                 </div>
//             </Card >
//         </>
//     );
// }