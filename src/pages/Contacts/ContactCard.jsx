import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'
export default function ContactCard({ contact, setIsHoveringCard, play, stop, ...rest }) {
    const cardContent = (
        <Card
            className={`
                w-full h-48
                audio-on-hover
                flex flex-col justify-center gap-2.5 items-center
                hover:text-orange-400
                md:hover:rotate-1 md:hover:scale-102 ease-linear duration-100
            `}
            onMouseEnter={() => {
                setIsHoveringCard(true);
                play();
            }}
            onMouseLeave={() => {
                setIsHoveringCard(false);
                stop();
            }}
        >
            {contact.icon && (
                <div className='relative flex items-center justify-center'>
                    <Logo
                        logo={contact.icon}
                        size="80"
                        className={`${contact.inverted_logo && 'dark:invert'}`}
                    />
                </div>
            )}
            {contact.name && <h1>{contact.name}</h1>}
        </Card>
    );

    if (contact.link) {
        return (
            <a
                href={contact.link}
                target="_blank"
                className="w-full h-full"
                {...rest}
            >
                {cardContent}
            </a>
        );
    }

    return (
        <div className="w-full h-full" onClick={rest.onClick}>
            {cardContent}
        </div>
    );
}
