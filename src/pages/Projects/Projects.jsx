import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'
import ProjectCard from './ProjectCard.jsx'

const projects = [
    {
        name: 'Barangay Management Information System',
        description: 'Made for metro bulihan',
        technologies: [
            'Tailwind CSS', 'Alpine.js', 'Laravel', 'Livewire'
        ],
        images: [],

    },
    {
        name: 'This portfolio!',
        description: 'My first react app',
        technologies: [
            'React', 'Tailwind CSS'
        ],
        additional: <div className='additional'>
            <p>Also used the ff library</p>

        </div>
    },
];

export default function Projects() {


    return (
        <>
            {projects.map((project, index) => (
                <ProjectCard project={project} >

                </ProjectCard>
            ))}
        </>
    )
}