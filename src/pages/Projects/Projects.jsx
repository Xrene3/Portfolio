import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import Modal from '../../components/Modal/Modal.jsx'

import { useState } from 'react';
import { getProjectImages } from './useExportProjectImages.js'

const onesys_v1_images = getProjectImages('onesys_v1').sort();
const onesys_v2_images = getProjectImages('onesys_v2').sort();
// console.log(onesys_v2_images)

const projects = [
    {
        name: 'Bayani OneSys v1 | Capstone Project',
        summary:
            <div>
                <p> A Centralized Record Management for Metrobulihan (BAYANI),
                    specifically designed for each barangay to ensure the efficient operation of work
                    processes and the effective management of resident, household and certificate records.</p>
            </div>,
        description:
            <div>
                <p> A Centralized Record Management for Metrobulihan (BAYANI) in Silang Cavite,
                    specifically designed for each barangay to ensure the efficient operation of work
                    processes and the effective management of resident, household and certificate records.</p>
                <p>
                    The Bayani Onesys is a comprehensive record management system
                    specifically designed for each barangay to ensure the efficient operation of work
                    processes and the effective management of resident and household records. The system also allows the issuance of certificate and capable of creating different certificate type.
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

                <div className="additional-tech mt-2.5">
                    <h1 className="font-bold">Addditional stuff we used are:</h1>
                    <ol className="list-disc ms-5">
                        <li><a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://datatables.net/">DataTables</a> for a more advance table component</li>
                        <li><a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://summernote.org/">Summernote</a> for a text editor</li>
                        <li><a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://interactjs.io/">Interact.js</a> allows draggable action</li>
                        <li><a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://sweetalert2.github.io/">SweetAlert2</a> a customizable alert component library</li>
                        <li><a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://www.chartjs.org/">Chart.js</a> to make different charts for analytics</li>
                        <li> <a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://laravel-excel.com/">Laravel-Excel</a> to export Excel files</li>
                        <li><a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://heroicons.com/">Hero Icons</a> for the svg icons</li>
                        <li><a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://github.com/kreait/firebase-php">Kreait Firebase</a> Unofficial Firebase SDK for PHP</li>
                    </ol>
                </div>
            </div>,
        technologies: [
            'Bootstrap', 'Laravel', 'jQuery', 'Firebase'
        ],
        images: onesys_v1_images,
    },
    {
        name: 'Bayani OneSys v2 | OJT',
        summary: 'Aimed to address the issues of the v1 and provide additional features for the end users while also making the system more developer friendly and future proof by moving to a more modern and widely adapted Tech Stack.',
        description:
            <div>
                <p className="mb-1">
                    The first version of the app was completed and served its purpose well in the early stages. However, after 2–3 months of continuous usage, scalability issues started to emerge.</p>
                <p className="mb-1">Although system was still running with very minor performance degregation, it will eventually be too costly to maintain as more barangay gets added to the system.</p>
                <p className="mb-1">This was mainly due to the use of Firebase Realtime Database, which imposes monthly bandwidth limits.
                    While Firebase offers subscription plans to support higher traffic, the costs quickly became unsustainable as the app grew.</p>
                <br /> <br />
                <p className="mb-2">To overcome these limitations, v2 was developed with a new and modern tech stack built for scalability, performance, and flexibility.</p>
                <p className="mb-2"> The database was changed from <strong>FirebaseRTDB to MySQL</strong>, allowing for more structured data handling, greater control over queries, and significantly reduced operational costs.</p>
                <p className="mb-2">Additionally the new Tech Stack doesnt not only provide a more optimized system than before but also provides a more maintainable and future-proof foundation for new features and improvements.</p>

                <div className="details mt-2.5">
                    <p className="font-bold">Some of the changes made to v2</p>
                    <ol className='list-disc ms-5'>
                        <li>Significantly improved performance</li>
                        <li>UI / UX Improvements</li>
                        <li>Switched from FirebaseRTDB to MySQL</li>
                        <li>More robust certificate system</li>
                        <li>Better tracking for issued certificate</li>
                        <li>Customizable user permissions for each user type, unique to each barangay</li>
                        <li>Expnaded theme selected per user instead of per Barangay</li>
                    </ol>
                </div>

                <div className="additional-tech mt-2.5">
                    <h1 className="font-bold">Addditional stuff we used are:</h1>
                    <ol className="list-disc ms-5">
                        <li><a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://quilljs.com/">Quill.js</a> for a finer text editor</li>
                        <li><a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://www.chartjs.org/">Chart.js</a> to make different charts for analytics</li>
                        <li> <a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://laravel-excel.com/">Laravel-Excel</a> for import and export Excel files</li>
                        <li><a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://heroicons.com/">Hero Icons</a> for the svg icons</li>
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
        description:
            <div>
                <p>
                    My first react app!
                </p>
                <p>
                    I decided to go with React to create my portfolio as an opportunity to learn a new technology.
                </p>
                <div className="additional-tech mt-2.5">
                    <h1 className="font-bold">Addditional stuff I used are:</h1>
                    <ol className="list-disc ms-5">
                        <li><a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://www.npmjs.com/package/react-wavify">React Wavify</a> for the waving background</li>
                        <li> <a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/">UseSound</a> for the sfx</li>
                        <li><a className="dark:text-indigo-200 text-sky-700 underline" target="_blank" href="https://techicons.dev/">Tech Icons</a> for the svg icons</li>
                    </ol>
                </div>
            </div>,
        technologies: [
            'React', 'Tailwind CSS'
        ],
        additional: <div className='additional'>
            <p>Also used the ff library</p>
        </div>
    },
];

export default function Projects({ setIsHoveringCard, play, stop, isOpen, setIsOpen, closeModal }) {
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
            <div className="flex-col py-4">
                {/* <h1 className="text-xl my-3 text-center">Projects</h1> */}
                <div className="flex flex-col lg:flex-row lg:flex-wrap  justify-center gap-5">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            openProjectModal={openProjectModal}
                            setIsHoveringCard={setIsHoveringCard} play={play} stop={stop}
                        />
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