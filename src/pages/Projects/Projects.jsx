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
                <p> A Centralized Record Management for Metrobulihan (BAYANI),
                    specifically designed for each barangay to ensure the efficient operation of work
                    processes and the effective management of resident, household and certificate records.</p>
            </div>,
        description:
            <div className="flex flex-row">
                <div className="details w-2/3 ms-5">
                    <p>
                        The Bayani Onesys is a comprehensive record management system
                        specifically designed for each barangay to ensure the efficient operation of work
                        processes and the effective management of resident and household records.
                    </p>
                    <div className="details mt-2.5">
                        <p>The system were focused on these area</p>
                        <ol className='list-disc ms-5'>
                            <li className="font-semibold">Barangay</li>
                            <ul className="list-disc ms-5">
                                <li>Prevents barangay from acccessing other barangay data</li>
                            </ul>
                            <li className='font-semibold'>Residents</li>
                            <ul className='list-disc ms-5'>
                                <li>Record individual resident</li>
                            </ul>
                            <li className="font-semibold">Household</li>
                            <ul className="list-disc ms-5">
                                <li>Record household data</li>
                                <li>Transferring of residents between household</li>
                            </ul>
                            <li className="font-semibold">Certificate</li>
                            <ul className="list-disc ms-5">
                                <li>Create different types of certificate</li>
                                <li>Customizable layout per barangay</li>
                                <li>Issue and record generated certificate</li>
                            </ul>
                            <li className="font-semibold">Analytics</li>
                        </ol>
                    </div>
                </div>
                <div className="image-container w-1/3 bg-teal-200">

                </div>
            </div>,
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
            'Tailwind CSS', 'Alpine.js', 'Laravel', 'Livewire', 'DaisyUI', 'MySQL'
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
                <div className="flex flex-col lg:flex-row lg:flex-wrap  justify-center gap-5">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} openModal={openModal}>

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