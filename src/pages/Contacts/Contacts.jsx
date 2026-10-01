import ContactCard from './ContactCard.jsx';
import Kaoruko from '../../assets/images/kaoruko.jpg';
import PaimonDerp from '../../assets/images/paimon_derpp.jpg';
import PaimonWah from '../../assets/images/paimon_wah.jpg';
import Mambo from '../../assets/images/obmam.jpg';
import Puter from '../../assets/images/puter.png';
import Kaoruko3 from '../../assets/images/Kaoruko3.jpg';
import KaorukoFufu from '../../assets/images/KaorukoFufu.jpg';
import KaorukoPeace from '../../assets/images/KaorukoPeace.jpg';
import KaorukoJump from '../../assets/images/kaoruko-jumping.gif';
import { createPortal } from "react-dom";

import { getArtImages } from './useExportArtImages.js';
const sketchDrawings = getArtImages('Sketch/Downscaled');
const digitalDrawings = getArtImages('Digital/Downscaled');
// console.log(sketchDrawings)
import Modal from '../../components/Modal/Modal.jsx'
import { useState } from 'react'
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
            window.location.href = "mailto:ryanclarkgeneveo03@gmail.com?";
        }
    }
]

export default function Contacts({ isOpen, setIsOpen, setIsHoveringCard, play, stop }) {
    const [previewImage, setPreviewImage] = useState(null);

    return (
        <>
            <div className="contacts">
                <h1 className="text-4xl mb-12 py-2.5 text-center w-2/3 mx-auto relative font-bold text-sky-700 dark:text-lime-200 text-shadow-md text-shadow-sky-100 dark:text-shadow-lime-700 ">
                    Contacts and more
                </h1>
                <div className="flex md:flex-row flex-col justify-center gap-4.5 w-full">
                    {contactList && contactList.map((contact, index) => (
                        <ContactCard setIsHoveringCard={setIsHoveringCard} play={play} stop={stop} key={'contacts_' + index} contact={contact} onClick={contact.onClick} />
                    ))}
                </div>

                <div
                    onMouseEnter={() => {
                        setIsHoveringCard(true);
                        play();
                    }}
                    onMouseLeave={() => {
                        setIsHoveringCard(false);
                        stop();
                    }}

                    onClick={() => setIsOpen(true)}
                    className="relative
                        md:w-3/5 w-full mx-auto
                        drop-shadow-xl/60
                        hover:drop-shadow-indigo-300
                        hover:cursor-pointer
                        ease-linear duration-150
                        h-42 overflow-hidden rounded-lg mt-4
                        flex justify-between
                        bg-gradient-to-r from-zinc-600 via-zinc-50 to-white">
                    <div className="message w-full flex justify-center items-center p-5">
                        <h1 className="xl:text-4xl text-2xl text-black font-semibold">Thanks for visiting!</h1>

                    </div>
                    <img src={Kaoruko} alt="" className="h-full" />
                    <p className="text-xs text-white/70 absolute bottom-5 left-5">Click me for more stuff*</p>
                </div>



                

                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <div className="sum-stuff w-screen max-w-full p-0 md:max-w-[60vw] max-h-[70vh] overflow-auto">

                        <h1 className="text-center text-lg md:text-2xl text-sky-700 dark:text-lime-200 font-bold mb-2">
                            Extra Stuff
                        </h1>

                        <div className="w-full flex md:flex-row flex-col-reverse md:justify-between justify-center">

                            <div className="description dark:text-indigo-200 text-sky-700 md:w-2/3">
                                <p className="mb-2">
                                    Here are some extra things I’ve worked on.
                                </p>

                                <p className="mb-2">
                                    This includes drawings, small experiments, and other stuff I’ve made outside of my main projects.
                                </p>

                                <div className="flex md:justify-start justify-center gap-2.5">
                                    <img src={KaorukoJump} alt="" className="w-25 h-25 object-cover rounded my-2.5" />
                                    <img src={KaorukoPeace} alt="" className="w-25 h-25 object-cover rounded my-2.5" />
                                </div>

                                {/* <p>Some of my drawings:</p> */}
                            </div>

                            <div className="images justify-center flex py-1.5">
                                {/* <img src={PaimonWah} alt="" className="md:w-54 md:h-54 w-25 h-25 object-cover rounded-full" /> */}
                                <img src={Mambo} alt="" className="md:w-54 md:h-54 w-25 h-25 object-cover rounded-full" />

                            </div>
                        </div>

                        <div className="drawing-image-container">

                            {/* DIGITAL */}
                            <div className="border-zinc-400 border my-2.5"></div>
                            <h1 className="text-center text-lg text-sky-700 dark:text-lime-200 font-bold">
                                Digital
                            </h1>
                            <div className="border-zinc-400 border my-2.5"></div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-center">
                                {digitalDrawings.map((src, idx) => (
                                    <div key={idx} className="relative aspect-[4/6] overflow-hidden rounded-lg shadow-lg">
                                        <img
                                            src={src}
                                            alt=""
                                            onClick={() => setPreviewImage(src)}
                                            className="absolute inset-0 w-full h-full object-cover cursor-pointer hover:scale-105 transition"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* SKETCH */}
                            <div className="border-zinc-400 border my-2.5"></div>
                            <h1 className="text-center text-lg text-sky-700 dark:text-lime-200 font-bold">
                                Sketch
                            </h1>
                            <div className="border-zinc-400 border my-2.5"></div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {sketchDrawings.map((src, idx) => (
                                    <div key={idx} className="relative aspect-[4/6] overflow-hidden rounded-lg shadow-lg">
                                        <img
                                            src={src}
                                            alt=""
                                            onClick={() => setPreviewImage(src)}
                                            className="absolute inset-0 w-full h-full object-cover cursor-pointer hover:scale-105 transition"
                                        />
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </Modal>

                {previewImage && createPortal(
                    <div
                        className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center"
                        onClick={() => setPreviewImage(null)}
                    >
                        <img
                            src={previewImage}
                            alt=""
                            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <p className="absolute bottom-5 text-white text-sm opacity-70">
                            Click anywhere to close
                        </p>
                    </div>,
                    document.getElementById('modal-section') // same root as Modal
                )}
            </div >
        </>
    )
}

// Shared home for the existing extra-stuff modal, available without the Contacts page.
export function ExtraStuffModal({ isOpen, onClose }) {
    const [previewImage, setPreviewImage] = useState(null);
    const renderGallery = (items) => items.map((src, idx) => (
        <button type="button" key={idx} onClick={() => setPreviewImage(src)} className="relative aspect-[4/6] overflow-hidden rounded-lg shadow-lg">
            <img src={src} alt="Open artwork preview" className="absolute inset-0 h-full w-full object-cover transition hover:scale-105" />
        </button>
    ));

    return <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="w-screen max-w-full p-0 md:max-w-[60vw] max-h-[70vh] overflow-auto">
                <h1 className="mb-2 text-center text-lg font-bold text-sky-700 dark:text-lime-200 md:text-2xl">Extra Stuff</h1>
                <div className="flex w-full flex-col-reverse justify-center md:flex-row md:justify-between">
                    <div className="text-sky-700 dark:text-indigo-200 md:w-2/3">
                        <p className="mb-2">Here are some extra things I’ve worked on.</p>
                        <p className="mb-2">This includes drawings, small experiments, and other stuff I’ve made outside of my main projects.</p>
                        <div className="flex justify-center gap-2.5 md:justify-start">
                            <img src={KaorukoJump} alt="Kaoruko jumping" className="my-2.5 h-25 w-25 rounded object-cover" />
                            <img src={KaorukoPeace} alt="Kaoruko making a peace sign" className="my-2.5 h-25 w-25 rounded object-cover" />
                        </div>
                    </div>
                    <div className="flex justify-center py-1.5"><img src={Mambo} alt="Mambo" className="h-25 w-25 rounded-full object-cover md:h-54 md:w-54" /></div>
                </div>
                <h2 className="my-2.5 border-y border-zinc-400 py-2 text-center text-lg font-bold text-sky-700 dark:text-lime-200">Digital</h2>
                <div className="grid grid-cols-2 justify-center gap-3 sm:grid-cols-3 md:grid-cols-4">{renderGallery(digitalDrawings)}</div>
                <h2 className="my-2.5 border-y border-zinc-400 py-2 text-center text-lg font-bold text-sky-700 dark:text-lime-200">Sketch</h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">{renderGallery(sketchDrawings)}</div>
            </div>
        </Modal>
        {previewImage && createPortal(
            <button type="button" aria-label="Close artwork preview" className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80" onClick={() => setPreviewImage(null)}>
                <img src={previewImage} alt="Artwork preview" className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-xl" />
                <span className="absolute bottom-5 text-sm text-white/70">Click anywhere to close</span>
            </button>, document.getElementById('modal-section')
        )}
    </>;
}
