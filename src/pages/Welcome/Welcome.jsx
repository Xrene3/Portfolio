import Logo from '../../components/Logo/Logo.jsx'
import Mambo from '../../assets/images/obmam.jpg';
const contactLinks = [
    {
        name: "GitHub",
        icon: "GitHub",
        href: "https://github.com/Xrene3",
        external: true,
        invertInDark: true,
    },
    {
        name: "LinkedIn",
        icon: "LinkedIn",
        href: "https://www.linkedin.com/in/ryan-clark-geneveo-b83a32375/",
        external: true,
    },
    {
        name: "Email",
        icon: "GMail",
        href: "mailto:ryanclarkgeneveo03@gmail.com",
    },
    {
        name: "Download resume",
        badge: "PDF",
        href: `/Portfolio/resume.pdf`,
        download: true,
    },
];

export default function Welcome() {
    return (
        <div className="flex min-h-[31.25rem] w-full flex-col-reverse gap-8 p-5 lg:flex-row md:items-center md:gap-10">
            <div className="min-w-0 flex-1">
                <div className='introductions'>
                    <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>Hello! i'm
                        <p className='lg:textl-2xl text-sky-700 dark:text-lime-200 font-bold'> Ryan Clark Geneveo</p>
                    </h1>
                    <br />
                    
                    <p className="lg:text-lg text-gray-600 dark:text-gray-400">A Junior Fullstack Developer based in Dasmarinas City, Cavite , Philippines </p>
                    <p className="lg:text-lg text-gray-600 dark:text-gray-400 ">Experienced in building moderm, scalable and responsive PHP-based systems using Laravel Framework</p>
                    
                </div>

                <div className="contacts mt-7">
                    {/* <p className='lg:text-lg font-semibold mt-7'>Welcome to my page!</p> */}
                    {/* <p className="text-xl font-semibold text-sky-700 dark:text-lime-200">
                        Contact me
                    </p> */}

                    <nav aria-label="Social links and resume" className="contact-list mt-5 flex flex-wrap items-center gap-3 text-sm sm:text-base">
                        {contactLinks.map(({ name, icon, badge, href, external, download, invertInDark }) => (
                            <a
                                key={name}
                                href={href}
                                target={external ? "_blank" : undefined}
                                rel={external ? "noreferrer" : undefined}
                                download={download || undefined}
                                className="
                                    flex h-12 items-center gap-2.5 rounded-full 
                                    border border-orange-500/50 bg-white/50 px-4 
                                    font-medium shadow-sm 
                                    hover:border-orange-600 hover:bg-orange-50/80 hover:text-orange-800 hover:shadow-md 
                                    dark:border-lime-200/50 dark:bg-white/5 dark:hover:border-lime-200 dark:hover:bg-lime-200/20 dark:hover:text-lime-200"
                            >
                                <span className="whitespace-nowrap">{name}</span>
                                {icon && <Logo logo={icon} size="28" className={`h-7 w-7 shrink-0 object-contain ${invertInDark ? "dark:invert" : ""}`} />}
                                {badge && <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white dark:bg-lime-200 dark:text-zinc-900">{badge}</span>}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="mambo flex w-full shrink-0 justify-center md:w-2/5 ">
                <img src={Mambo} alt="" width="400" height="400" className="aspect-square w-48 rounded-full object-cover sm:w-56 md:w-full md:max-w-[25rem] shadow-lg border-2 border-cyan-400 shadow-cyan-400 dark:border-lime-200/70  dark:shadow-lime-200" />
            </div>
        </div>
    )
}