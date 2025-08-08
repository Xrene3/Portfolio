import Card from '../../components/Card/Card.jsx'
import Logo from '../../components/Logo/Logo.jsx'
export default function ContactCard({ contact }) {
    return (
        <>
            <a href={contact.link && contact.link} target="_blank">
                <Card className={`
                    flex flex-col justify-center gap-2.5 items-center
                    !p-0 w-80 h-40
                    hover:text-orange-400
                    md:hover:rotate-3 md:hover:scale-105 ease-linear duration-100
                    `}>
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