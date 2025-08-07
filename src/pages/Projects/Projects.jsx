import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'

export default function Projects() {
    return (
        <>
            <div className="flex gap-2.5">
                <Card className="ease-in-out border-l-1 border-transaparent hover:border-violet-400"
                    title="Barangay Management System">
                    <div className='text-start'>
                        {/* <h1 className='text-lg'>Barangay Management System</h1> */}
                        <div className="description text-neutral-600 dark:text-gray-400">
                            <p>Made for MetroBulihan (Bayani)</p>
                            <p>Made with TALL Stack (Tailwind, Alpine, Laravel, Livewire)</p>
                        </div>
                        <div className="border-zinc-400 border-1 my-2.5"></div>
                        {/* <h2 className="text-lg">TALL Stack</h2> */}
                        <div className="technologies flex  flex-wrap gap-2.5 justify-center">


                            <div
                                // logo-container 
                                // bg-sky-50 dark:bg-gray-700
                                //
                                // rounded hover:scale-105 
                                className="
                                text-zinc-600 dark:text-indigo-100 
                                p-2 relative flex flex-row items-center">
                                <Logo logo="tailwind" size="30" />
                                <p className='indent-1 my-auto'>Tailwind</p>
                            </div>
                            <div
                                // logo-container 
                                // bg-sky-50 dark:bg-gray-700
                                //
                                // rounded hover:scale-105 
                                className="
                                text-zinc-600 dark:text-indigo-100 
                                p-2 relative flex flex-row items-center">
                                <Logo logo="alpinejs" size="30" />
                                <p className='indent-1'>AlpineJS</p>
                            </div>
                            <div
                                // logo-container 
                                // bg-sky-50 dark:bg-gray-700
                                //
                                // rounded hover:scale-105 
                                className="
                                text-zinc-600 dark:text-indigo-100 
                                p-2 relative flex flex-row items-center">
                                <Logo logo="laravel" size="30" />
                                <p className='indent-1'>Laravel</p>
                            </div>
                            <div
                                //   logo-container 
                                // bg-sky-50 dark:bg-gray-700
                                // 
                                // rounded hover:scale-105 
                                className="
                                text-zinc-600 dark:text-indigo-100 
                                p-2 relative flex flex-row items-center">
                                <Logo logo="livewire" size="30" />
                                <p className='indent-1'>Livewire</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end mt-2.5 text-gray-400 dark:hover:text-white hover:text-zinc-700'>
                        <button>ShowMore</button>
                    </div>
                </Card>

                <Card className="">
                    <div className=''>
                        <h1>This Portfolio!</h1>
                        <div className="text-center flex justify-center items-center">
                            <div className="
                                text-zinc-600 dark:text-indigo-100 
                                p-2 relative flex flex-row items-center">
                                <Logo logo="react" size="30" />
                                <p className='indent-1'>React</p>
                            </div>
                            <div className="
                                text-zinc-600 dark:text-indigo-100 
                                p-2 relative flex flex-row items-center">
                                <Logo logo="tailwind" size="30" />
                                <p className='indent-1'>Tailwind</p>
                            </div>
                        </div>
                        <p>Made with React & Tailwind</p>

                        <div className="text-start additional mt-5">
                            <p>Also used the ff libraries</p>
                            <ol className="list-disc">
                                <li>React Wavify</li>
                                <li>React Icons</li>
                                <li>Use Sound</li>
                            </ol>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}