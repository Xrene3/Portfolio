import './Logo.css'

export default function Logo({ logo, className, size = 42, label, color }) {
    const iconUrl = `/Portfolio/images/icons/${logo}.svg`;
    return (
        <>
            <img src={iconUrl}
                className={`${className}`}
                width={size}
                height={size}
                alt="" />
        </>
    );
}
