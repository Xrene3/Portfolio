import { useEffect, useState } from 'react'
import useSound from 'use-sound';
import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'
const soundUrl = "/sounds/sfx/minecraft_item_pickup.mp3"
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
    //Minecraft exp sfx config
    // const maxPlaybackRate = 1.1;
    // const minPlaybackRate = 0.7;
    // const step = 0.05;


    const maxPlaybackRate = 1;
    const minPlaybackRate = 0.4;
    const step = 0.05;

    const [isHovering, setIsHovering] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(minPlaybackRate)
    // useSound(soundUrl, { playbackRate, volume: 0.5 });
    const playSfx = () => {
        setPlaybackRate(prev => {
            const newPlaybackRate = prev >= maxPlaybackRate ? minPlaybackRate : prev + step
            play()
            return newPlaybackRate;
        })
    }

    const [play] = useSound(soundUrl, { playbackRate, volume: 0.1 })

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
                                <div className="flex flex-wrap justify-center gap-4" >
                                    {icons.map((iconName) => (
                                        <div
                                            onMouseEnter={() => { setIsHovering(true); playSfx(); }}
                                            onMouseLeave={() => { setIsHovering(false); }}

                                            className="
                                                relative
                                                logo-container
                                                flex flex-col items-center
                                                md:w-25 md:h-25  w-20 h-20
                                                align-center
                                                justify-center
                                                p-3
                                                border-1
                                                bg-sky-50 dark:bg-gray-700
                                                text-zinc-600 dark:text-indigo-100
                                                border-indigo-300/0
                                                rounded-sm 
                                                shadow-md
                                                hover:scale-105
                                                pointer ease-in-out duration-150
                                                ">
                                            <Logo logo={iconName} />
                                            <span className="lg:text-md text-xs mt-2 capitalize align-bottom">{iconName}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}