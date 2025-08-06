import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'

const icons = [
    'html',
    'css',
    'javascript',
    'php',
    'mysql',
    'bootstrap',
    'tailwind',
    'alpinejs',
    'laravel',
    'livewire',
    'react',
    'firebase'
]
export default function Skills() {
    return (
        <>
            <div>
                <div className="skills">
                    Skills
                    <div className="flex lg:flex-row flex-col justify-between gap-x-5">
                        <div className="lg:w-1/3">
                            <Card title="Personal Skills">

                            </Card>
                        </div>
                        <div className="lg:w-2/3">
                            <Card title="Technologies I've used">
                                {/* <ul className="list-disc ml-5 text-start">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>PHP</li>
                                <li>MySQL</li>
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                                <li>AlpineJS</li>
                                <li>Laravel
                                    <Logo logo="laravel" />
                                </li>
                                <li>Livewire</li>
                                <li>React <Logo logo="reacts" /> </li>
                                <li>Firebase RTDB <p>(Kreait | Firebase for php)</p></li>
                            </ul> */}
                                <div className="flex flex-wrap justify-center">
                                    {icons.map((iconName, index) => (
                                        <div key={index} className="
                                            flex flex-col items-center
                                            py-2 px-4 m-1.5
                                            border-1
                                            dark:bg-gray-700
                                            dark:text-indigo-100
                                            border-indigo-300/30
                                            rounded-sm 
                                            shadow-md
                                            md:hover:scale-110 pointer ease-in duration-100
                                            ">
                                            <Logo logo={iconName} size={40} />
                                            <span className="text-sm mt-2 capitalize">{iconName}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}