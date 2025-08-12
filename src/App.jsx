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
  const { isOpen, setIsOpen } = useModal();
  const [isWaving, setWave] = useState(false);
  const [page, setPage] = useState(0);

  const hoverCardSfxUrl = "/Portfolio/sounds/sfx/gnome_toggled.mp3";
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [play, { stop }] = useSound(hoverCardSfxUrl, { volume: 0.4 });

  return (
    <>
      <main className="
      relative 
      w-full min-h-screen
      bg-gradient-to-b dark:from-zinc-900 dark:to-indigo-900 
      from-blue-300 to-white
      dark:text-sky-50 text-zinc-900
      ease-linear duration-300
      ">
        <div className="top-0 m-0 dark-mode-switch w-auto relative">
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
        </div>

        <Slider page={page} setPage={setPage} isMobile={isMobile}>
          <Welcome />
          <AboutMe />
          <Skills />
          <Projects setIsHoveringCard={setIsHoveringCard} play={play} stop={stop} isOpen={isOpen} setIsOpen={setIsOpen} />
          <Contacts setIsHoveringCard={setIsHoveringCard} play={play} stop={stop} />
        </Slider>

        {/* Water footer */}
        <Waves isWaving={isWaving} isMobile={isMobile} theme={theme} />
      </main >
    </>
  )
}

export default App
