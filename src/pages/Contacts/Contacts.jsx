import ContactCard from './ContactCard.jsx'

const contactList = [
    {
        name: "Github",
        icon: "GitHub",
        inverted_logo: 'true',
        link: "https://github.com/Xrene3",
        image: "/Portfolio/images/profile/github_logo.png",
        description: "My github page! the projects I've worked on are private repositories but can show a bit upon interview!"
    },
    {
        name: "LinkedIn",
        icon: "LinkedIn",
        link: "https://www.linkedin.com/in/ryan-clark-geneveo-b83a32375/"
    }
]

export default function Contacts() {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-4.5 w-full">
                {contactList && contactList.map((contact, index) => (
                    <ContactCard key={'contacts_' + index} contact={contact} />
                ))}
            </div>
        </>
    )
}