import ContactCard from './ContactCard.jsx'
import Kaoruko from '../../assets/images/kaoruko.jpg'
import PaimonDerp from '../../assets/images/paimon_derpp.jpg'
import PaimonWah from '../../assets/images/paimon_wah.jpg'
import Kaoruko3 from '../../assets/images/Kaoruko3.jpg'
import KaorukoFufu from '../../assets/images/KaorukoFufu.jpg'
import KaorukoPeace from '../../assets/images/KaorukoPeace.jpg'
import KaorukoJump from '../../assets/images/kaoruko-jumping.gif'

import { getArtImages } from './useExportArtImages.js'
const sketchDrawings = getArtImages('Sketch');
const digitalDrawings = getArtImages('Digital');

console.log(sketchDrawings)
import Modal from '../../components/Modal/Modal.jsx'
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
    }, {
        name: "ryanclarkgeneveo03@gmail.com",
        icon: "GMail",
        onClick: () => {
            window.location.href = "mailto:someone@example.com?subject=Hello&body=This%20is%20a%20test";
        }
    }
]

export default function Contacts({ isOpen, setIsOpen, setIsHoveringCard, play, stop }) {
    return (
        <>
            <div className="contacts">
                <h1 className="text-4xl mb-12 py-2.5 text-center w-2/3 mx-auto relative font-bold text-sky-700 dark:text-lime-200">
                    Contacts and more
                </h1>
                <div className="flex md:flex-row flex-col justify-center gap-4.5 w-full">
                    {contactList && contactList.map((contact, index) => (
                        <ContactCard setIsHoveringCard={setIsHoveringCard} play={play} stop={stop} key={'contacts_' + index} contact={contact} onClick={contact.onClick} />
                    ))}
                </div>

                <div
                    onClick={() => setIsOpen(true)}
                    className="
                        md:w-3/5 w-full mx-auto
                        drop-shadow-xl/60
                        hover:drop-shadow-indigo-300
                        ease-linear duration-150
                            h-42 overflow-hidden rounded-lg mt-4
                            flex justify-between
                            bg-gradient-to-r from-zinc-600 via-zinc-50 to-white">
                    <div className="message w-full flex justify-center items-center p-5">
                        <h1 className="lg:text-4xl text-lg text-black font-semibold">Thanks for visiting!</h1>
                    </div>
                    <img src={Kaoruko} alt="" className="h-full" />
                </div>

                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <div className="sum-stuff w-screen max-w-full p-0 md:max-w-[60vw] max-h-[80vh] overflow-auto">
                        <h1 className="text-center text-lg md:text-2xl text-sky-700 dark:text-lime-200 font-bold mb-2 rotate-4">
                            Som extra stuf!
                        </h1>

                        <div className="w-full flex md:flex-row flex-col-reverse md:justify-between justify-center ">
                            <div className="description dark:text-indigo-200 text-sky-700 md:w-2/3">
                                <p>There's always more to learn, and this website was made for me to learn React JS as well as create my very own website, where I can mess around and put random stuff that I feel like putting and also serves as an archive of the things that I've done, whether it be a project, a system, a drawing or whatever it'd be. </p>
                                {/* <br /> */}
                                <div className="flex md:justify-start justify-center gap-2.5">
                                    <img src={KaorukoJump} alt="" className="w-25 h-25 object-cover rounded my-2.5" />
                                    <img src={KaorukoPeace} alt="" className="w-25 h-25 object-cover rounded my-2.5" />
                                </div>
                                <p>Also here some of the stuff that i've drawn! </p>

                            </div>
                            <div className="images justify-center flex py-1.5">
                                <img src={PaimonWah} alt="" className="md:w-54 md:h-54 w-25 h-25 object-cover rounded-full" />
                            </div>
                        </div>

                        <div className="drawing-image-container">
                            <div className="border-zinc-400 border-1 my-2.5"></div>
                            <h1 className="text-center text-lg text-orange-500 dark:text-lime-200">Digital</h1>
                            <div className="border-zinc-400 border-1 my-2.5"></div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-center">
                                {digitalDrawings.map((src, idx) => (
                                    <div
                                        key={idx}
                                        className="relative aspect-[4/6] overflow-hidden rounded-lg shadow-lg"
                                    >
                                        <img
                                            src={src}
                                            alt=""
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="border-zinc-400 border-1 my-2.5"></div>
                            <h1 className="text-center text-lg text-orange-500 dark:text-lime-200">Sketch</h1>
                            <div className="border-zinc-400 border-1 my-2.5"></div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {sketchDrawings.map((src, idx) => (
                                    <div
                                        key={idx}
                                        className="relative aspect-[4/6] overflow-hidden rounded-lg shadow-lg"
                                    >
                                        <img
                                            src={src}
                                            alt=""
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                </Modal>
            </div >
        </>
    )
}