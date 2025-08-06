import { FaCss3Alt, FaHtml5, FaReact, FaLaravel, FaPhp, FaBootstrap } from "react-icons/fa";
import { RiFirebaseFill, RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAlpinedotjs, SiLivewire, SiMysql } from "react-icons/si";
const logos = {
    html: FaHtml5,
    css: FaCss3Alt,
    javascript: RiJavascriptFill,
    php: FaPhp,
    mysql: SiMysql,
    bootstrap: FaBootstrap,
    tailwind: RiTailwindCssFill,
    alpinejs: SiAlpinedotjs,
    livewire: SiLivewire,
    laravel: FaLaravel,
    react: FaReact,
    firebase: RiFirebaseFill
};
export default function Logo({ logo, className, size = 32 }) {
    const Icon = logos[logo];
    return (
        <>
            {Icon && <Icon className={` ${className}`} size={size} />}
        </>
    )
}