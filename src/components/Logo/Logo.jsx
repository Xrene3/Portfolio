import { FaCss3Alt, FaHtml5, FaReact, FaLaravel, FaPhp, FaBootstrap } from "react-icons/fa";
import { RiFirebaseFill, RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAlpinedotjs, SiJquery, SiLivewire, SiMysql } from "react-icons/si";
import './Logo.css'
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
export default function Logo({ logo, className, size = 42, label }) {
    const Icon = logos[logo];
    return (
        <>
            {Icon && <Icon className={`${className}`} size={size} />}
        </>
    )
}