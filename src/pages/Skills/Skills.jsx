import { useEffect, useState } from 'react'
import useSound from 'use-sound';
import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'
const soundUrl = "/Portfolio/sounds/sfx/minecraft_item_pickup.mp3"
const icons = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'PHP',
    'MySQL',
    'Bootstrap',
    'jQuery',
    'Tailwind CSS',
    'Alpine.js',
    'Laravel',
    'Livewire',
    'Firebase',
    'DaisyUI',
    'React',

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
            <div className="flex-col">
                <h1 className="text-xl my-3 text-center">Skills</h1>
                <div className="flex lg:flex-row flex-col justify-between gap-5">
                    {/* <div className="lg:w-1/3">
                        <Card title="Personal Skills">

                        </Card>
                    </div> */}
                    <div className="w-full">
                        <Card title="Technologies I've used">
                            <div className="flex flex-wrap justify-center gap-4" >
                                {icons.map((iconName, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={() => { setIsHovering(true); playSfx(); }}
                                        onMouseLeave={() => { setIsHovering(false); }}
                                        className="
                                                relative
                                                logo-container
                                                flex flex-col items-center


                                                md:w-25 md:h-25  
                                                w-20 h-20

                                                justify-center
                                                lg:p-6
                                                p-5
                                                border-1
                                                bg-sky-50/20 dark:bg-neutral-400/20
                                                text-zinc-600 dark:text-indigo-100
                                                border-indigo-300/20
                                                rounded-sm 
                                                
                                                shadow-md/20
                                                md:hover:shadow-md/30
                                                md:hover:scale-110
                                                md:hover:rotate-2
                                                cursor-default ease-in-out duration-150
                                                ">
                                        <Logo logo={iconName} />
                                        <span className="lg:text-md text-xs mt-2 capitalize align-bottom font-semibold">{iconName}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div >
        </>
    )
}