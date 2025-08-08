import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'
import ProjectCard from './ProjectCard.jsx'

const projects = [
    {
        name: 'Barangay Management Information System',
        description: "The first iteration of the app finished, while its served its purpose early on, after 2-3 months of continues usage it starts to show its limitation when it comes to scalability especially since it uses Firebase RTDB which has a badnwidth limitation per month, although Firebase offers subscription options to handle higher usage, the costs quickly became unsustainable as the app grew",
        technologies: [
            'Tailwind CSS', 'Alpine.js', 'Laravel', 'Livewire'
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
            <div className="flex xl:flex-row flex-col justify-center gap-x-5">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} >

                    </ProjectCard>
                ))}
            </div>
        </>
    )
}