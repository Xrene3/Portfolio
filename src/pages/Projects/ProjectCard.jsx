import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'
import { useState, useRef, useEffect } from "react";

export default function ProjectCard({ project, children }) {
    const [expanded, setExpanded] = useState(false);
    const descRef = useRef();

    useEffect(() => {
        if (!descRef.current) return;
        descRef.current.style.maxHeight = expanded
            ? `${descRef.current.scrollHeight}px`
            : "80px";  // Adjust preview height
    }, [expanded]);

    return (
        <>
            <Card title={project.name && project.name} className="xl:max-w-2/5 md:hover:rotate-1 ease-linear duration-100 hover:text-orange-400">
                <div className="
                        border-2 border-sky-300 dark:border-indigo-400 
                        rounded-full
                        absolute top-1/12 left-0 h-10/12 
                        drop-shadow-sky-400 drop-shadow-xl
                        dark:drop-shadow-indigo-100
                        ">
                </div>

                <div
                    ref={descRef}
                    className="description overflow-hidden transition-[max-height] duration-300 ease-in-out"
                    style={{ maxHeight: "50px" }}
                >
                    <p className="text-neutral-600 dark:text-gray-400">
                        {project.description && project.description}
                        <div className="image-container flex flex-col gap-2.5 overflow-auto max-h-70">
                            {project.images && project.images.map((img, i) => (
                                <img key={i} src={img} alt={`${img} screenshot ${i + 1}`} />
                            ))}
                        </div>
                    </p>
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
                <div className="flex justify-end mt-2.5">
                    <button
                        className="text-blue-600 dark:text-blue-300 hover:underline"
                        onClick={() => setExpanded((p) => !p)}
                    >
                        {expanded ? "Show Less" : "Show More"}
                    </button>
                </div>

            </Card>
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