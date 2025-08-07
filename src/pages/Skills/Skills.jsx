import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'

const icons = [
    'html',
    'css',
    'javascript',
    'php',
    'mysql',
    'bootstrap',
    'jquery',
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
                                <div className="flex flex-wrap justify-center">
                                    {icons.map((iconName) => (
                                        <Logo logo={iconName} label={iconName} />
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