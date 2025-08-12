import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import Modal from '../../components/Modal/Modal.jsx'

import { useState } from 'react';
import { getProjectImages } from './useExportProjectImages.js'

const onesys_v1_images = getProjectImages('onesys_v1');
const onesys_v2_images = getProjectImages('onesys_v2');
// console.log(onesys_v2_images)

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
            <div><p>
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
                        <li className="font-semibold">User Accounts</li>
                        <ul className="list-disc ms-5">
                            <li>Create and delete user accounts</li>
                            <li>Access based on user type</li>
                        </ul>
                        <li className="font-semibold">Analytics</li>
                    </ol>
                </div>
            </div>,
        technologies: [
            'Bootstrap', 'Laravel', 'jQuery', 'Firebase'
        ],
    },
    {
        name: 'Bayani OneSys v2',
        summary: 'v2 of the Barangay OneSys. Aimed to enhance and ',
        description:
            <div>
                <p>
                    The first version of the app was completed and served its purpose well in the early stages. However, after 2–3 months of continuous usage, scalability issues started to emerge. This was mainly due to the use of Firebase Realtime Database, which imposes monthly bandwidth limits. While Firebase offers subscription plans to support higher traffic, the costs quickly became unsustainable as the app grew.
                    <br /> <br />
                    To overcome these limitations, v2 was developed with a new tech stack built for scalability, performance, and flexibility. The backend was rebuilt using MySQL, allowing for more structured data handling, greater control over queries, and significantly reduced operational costs. v2 not only supports a growing user base more efficiently but also provides a more maintainable and future-proof foundation for new features and improvements.
                </p>
                <div className="details mt-2.5">
                    <p className="font-bold">Some of the changes made to v2</p>
                    <ol className='list-disc ms-5'>
                        <li>UI / UX Changes</li>
                        <li>Switched from FirebaseRTDB to MySQL</li>
                        <li>More robust certificate system allowing for multiple layout(Margin layout) per certificate</li>
                        <li>Better tracking for issued certificate</li>
                        <li>Customizable user permissions for each user type, unique to each barangay</li>
                        <li>Expnaded theme selected per user instead of per Barangay</li>
                    </ol>
                </div>
            </div>
        ,
        technologies: [
            'Tailwind CSS', 'Alpine.js', 'Laravel', 'Livewire', 'DaisyUI', 'MySQL'
        ],
        images: onesys_v2_images,
    },
    {
        name: 'This portfolio!',
        summary: 'My First React App!',
        description: <p>Not much to put here, it is the website you're lookin at right now</p>,
        technologies: [
            'React', 'Tailwind CSS'
        ],
        additional: <div className='additional'>
            <p>Also used the ff library</p>
        </div>
    },
];

export default function Projects({ isOpen, setIsOpen, closeModal }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const openProjectModal = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    }

    const closeProjectModal = () => {
        setSelectedProject(null);
        setIsOpen(true);
    }

    return (
        <>
            <div className="flex-col">
                <h1 className="text-xl my-3 text-center">Projects</h1>
                <div className="flex flex-col lg:flex-row lg:flex-wrap  justify-center gap-5">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} openProjectModal={openProjectModal} >

                        </ProjectCard>
                    ))}
                </div>

                <ProjectModal
                    isOpen={isOpen}
                    closeModal={closeProjectModal}
                    project={selectedProject}>
                </ProjectModal>

            </div>
        </>
    )
}