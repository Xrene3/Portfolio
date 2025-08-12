import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'
export default function ContactCard({ contact, setIsHoveringCard, play, stop }) {
    return (
        <>
            <a href={contact.link && contact.link} target="_blank" className="w-full ">
                <Card
                    className={`
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
                    {/* {contact.name && <h1>{contact.name}</h1>} */}

                    {contact.icon &&

                        // <img src={contact.image} className='absolute right-0 top-0 h-full' />
                        <div className='relative flex items-center flex justify-center'>
                            <Logo logo={contact.icon} size="80" className={`${contact.inverted_logo && 'dark:invert'}`} />
                        </div>
                    }
                    {contact.name && <h1>{contact.name}</h1>}
                </Card>
            </a>
        </>
    )
}