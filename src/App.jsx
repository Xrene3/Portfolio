import { useEffect, useState, useLayoutEffect } from 'react'
import useSound from 'use-sound';

import { useTheme } from './hooks/useTheme.js'
import { useMobile } from './hooks/useMobile.js'
import { useModal } from './hooks/useModal.js'

import Header from './components/Navbar/Header.jsx'
import Slider from './components/Slider/Slider.jsx'
import Card from './components/Card/Card.jsx'
import Waves from './components/Waves/Waves.jsx'

import AboutMe from './pages/AboutMe/AboutMe.jsx'
import Skills from './pages/Skills/Skills.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contacts from './pages/Contacts/Contacts.jsx'
import Welcome from './pages/Welcome/Welcome.jsx'

import Logo from './components/Logo/Logo.jsx'
import './font.css'
import './App.css'



import { FaMoon, FaPause, FaPlay, FaSun } from 'react-icons/fa'
function App() {
  const { theme, toggleTheme } = useTheme();
  const { isMobile, setIsMobile } = useMobile();
  const [isProjectsOpen, setProjectsOpen] = useState(false);
  const [isContactsOpen, setContactsOpen] = useState(false);
  const [isWaving, setWave] = useState(false);
  const [page, setPage] = useState(0);

  const hoverCardSfxUrl = "/Portfolio/sounds/sfx/gnome_toggled.mp3";
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [play, { stop }] = useSound(hoverCardSfxUrl, { volume: 0.4 });

  return (
    <>
      <main className="
      relative 
      w-full 
      min-h-screen
      bg-gradient-to-b dark:from-zinc-900 dark:to-indigo-700 
      from-blue-300 to-white
      dark:text-sky-50 text-zinc-900
      ease-linear duration-300
      ">
        <div className="container w-full max-w-6xl mx-auto">
          <div className="top-0 m-0 dark-mode-switch w-auto relative px-5">
            <div className="flex justify-center gap-3">
              <button
                className=""
                onClick={toggleTheme}>
                {theme == 'dark' ? <FaSun>Toggle Light Mode</FaSun> : <FaMoon>Toggle Darkmode </FaMoon>}
              </button>

              <button className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded" onClick={() => setWave(prev => !prev)}>
                {isWaving ? <FaPlay></FaPlay> : <FaPause>Pause wave</FaPause>}
              </button>
            </div>
            
            <div className="w-full text-center my-2.5 p-3 text-lg rounded-lg 
              bg-purple-200/40 dark:bg-lime-800/40
              border-1 border-purple-600/60 dark:border-lime-200/60
              ">
                <p>
                  I'm currently working on a <a href="https://xrene-resume-v2.vercel.app/" target="_blank" className='font-bold text-violet-600 dark:text-lime-200 underline'>v2 for my portfolio</a> using NextJS, React, Tailwind and Daisy UI
                </p>
              </div>
          </div>

          <Slider page={page} setPage={setPage} isMobile={isMobile}>
            <Welcome />
            <AboutMe />
            <Skills />
            <Projects setIsHoveringCard={setIsHoveringCard} play={play} stop={stop} isOpen={isProjectsOpen} setIsOpen={setProjectsOpen} />
            <Contacts setIsHoveringCard={setIsHoveringCard} play={play} stop={stop} isOpen={isContactsOpen} setIsOpen={setContactsOpen} />
          </Slider>
        </div>
        {/* Water footer */}
        <Waves isWaving={isWaving} isMobile={isMobile} theme={theme} />
      </main >
    </>
  )
}

export default App
