import { FaCss3Alt, FaHtml5, FaReact, FaLaravel, FaPhp, FaBootstrap } from "react-icons/fa";
import { RiFirebaseFill, RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAlpinedotjs, SiJquery, SiLivewire, SiMysql } from "react-icons/si";
const logos = {
    html: FaHtml5,
    css: FaCss3Alt,
    javascript: RiJavascriptFill,
    php: FaPhp,
    mysql: SiMysql,
    jquery: SiJquery,
    bootstrap: FaBootstrap,
    tailwind: RiTailwindCssFill,
    alpinejs: SiAlpinedotjs,
    livewire: SiLivewire,
    laravel: FaLaravel,
    react: FaReact,
    firebase: RiFirebaseFill
};
export default function Logo({ logo, className, size = 'auto', label }) {
    const Icon = logos[logo];
    return (
        <>
            {Icon &&
                <div className="
                    flex flex-col items-center
                    md:w-25 md:h-25  w-20 h-20
                    p-3 m-1.5
                    border-1
                    bg-sky-50
                    dark:bg-gray-700
                    text-zinc-600 dark:text-indigo-100
                    border-indigo-300/30
                    rounded-sm 
                    shadow-md
                    md:hover:scale-110 pointer ease-in-out duration-150
                    ">
                    <Icon className={`${className}`} size={size} />
                    <span className="lg:text-md text-xs mt-2 capitalize">{label}</span>
                </div>
            }
        </>
    )
}