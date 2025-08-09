import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'
import ProjectCard from './ProjectCard.jsx'
import Modal from '../../components/Modal/Modal.jsx'
import { useState } from 'react';

const projects = [
    {
        name: 'Bayani OneSys',
        summary:
            <div>
                <p>
                    A Centralized Record Management for Metrobulihan (BAYANI)
                </p>
                <p>Aimed to enhance</p>
            </div>,
        description: <p>
            The first version of the app was completed and served its purpose well in the early stages. However, after 2–3 months of continuous usage, scalability issues started to emerge. This was mainly due to the use of Firebase Realtime Database, which imposes monthly bandwidth limits. While Firebase offers subscription plans to support higher traffic, the costs quickly became unsustainable as the app grew.
            <br /> <br />
            To overcome these limitations, v2 was developed with a new tech stack built for scalability, performance, and flexibility. The backend was rebuilt using MySQL, allowing for more structured data handling, greater control over queries, and significantly reduced operational costs. v2 not only supports a growing user base more efficiently but also provides a more maintainable and future-proof foundation for new features and improvements.
        </p>,
        technologies: [
            'Bootstrap', 'Laravel', 'jQuery', 'Firebase'
        ],
    },
    {
        name: 'Bayani OneSys v2',
        summary: 'v2 of the Barangay OneSys. Aimed to enhance and ',
        description: <p>
            The first version of the app was completed and served its purpose well in the early stages. However, after 2–3 months of continuous usage, scalability issues started to emerge. This was mainly due to the use of Firebase Realtime Database, which imposes monthly bandwidth limits. While Firebase offers subscription plans to support higher traffic, the costs quickly became unsustainable as the app grew.
            <br /> <br />
            To overcome these limitations, v2 was developed with a new tech stack built for scalability, performance, and flexibility. The backend was rebuilt using MySQL, allowing for more structured data handling, greater control over queries, and significantly reduced operational costs. v2 not only supports a growing user base more efficiently but also provides a more maintainable and future-proof foundation for new features and improvements.
        </p>,
        technologies: [
            'Tailwind CSS', 'Alpine.js', 'Laravel', 'Livewire', 'MySQL'
        ],
        images: [
            '/Portfolio/images/onesys_v2/image1.png',
            '/Portfolio/images/onesys_v2/image2.png',
            '/Portfolio/images/onesys_v2/image3.png',
            '/Portfolio/images/onesys_v2/image11.png',
            '/Portfolio/images/onesys_v2/image18.png',
            '/Portfolio/images/onesys_v2/image21.png',
        ],

    },
    {
        name: 'This portfolio!',
        summary: 'My First React App!',
        description: <p>Description goes here</p>,
        technologies: [
            'React', 'Tailwind CSS'
        ],
        additional: <div className='additional'>
            <p>Also used the ff library</p>
        </div>
    },
];

export default function Projects() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    }
    const closeModal = () => {
        setSelectedProject(null);
        setIsOpen(false);
    }
    return (
        <>
            <div className="flex-col">
                <h1 className="text-xl my-3 text-center">Projects</h1>
                <div className="flex xl:flex-row flex-col justify-center gap-x-5">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project}>
                            <div className='absolute bottom-0 right-0 p-5'>
                                <button onClick={() => openModal(project)}>ShowMore</button>
                            </div>
                        </ProjectCard>
                    ))}
                </div>

                <Modal
                    isOpen={isOpen}
                    onClose={closeModal}
                    project={selectedProject}  >
                    {/* CREATE A NEW COMPONENT PorjectModal.jsx */}
                </Modal>
            </div>
        </>
    )
}