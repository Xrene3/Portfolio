import { useEffect, useState, useLayoutEffect } from 'react'
import { useTheme } from './hooks/useTheme.js'
import { useMobile } from './hooks/useMobile.js'

import Header from './components/Navbar/Header.jsx'
import Slider from './components/Slider/Slider.jsx'
import Card from './components/Card/Card.jsx'
import Waves from './components/Waves/Waves.jsx'

import AboutMe from './pages/AboutMe/AboutMe.jsx'
import Skills from './pages/Skills/Skills.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contacts from './pages/Contacts/Contacts.jsx'

import Logo from './components/Logo/Logo.jsx'
import './font.css'
import './App.css'



import { FaMoon, FaPause, FaPlay, FaSun } from 'react-icons/fa'
function App() {
  const { theme, toggleTheme } = useTheme();
  const { isMobile, setIsMobile } = useMobile();
  const [isWaving, setWave] = useState(false);
  const [page, setPage] = useState(0);


  return (
    <>
      <main className="
      relative 
      min-h-screen
      min-w-screen
      bg-gradient-to-b dark:from-zinc-900 dark:to-indigo-900 
      from-sky-200 to-white
      dark:text-sky-50 text-zinc-900
      ease-linear duration-300
      ">
        <div className="top-0 m-0 dark-mode-switch w-full relative">
          <div className="flex justify-center gap-3">
            <button
              className=""
              onClick={toggleTheme}>
              {theme == 'dark' ? <FaSun>Toggle Light Mode</FaSun> : <FaMoon>Toggle Darkmode </FaMoon>}
            </button>

            <button className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded" onClick={() => setWave(prev => !prev)}>
              {isWaving ? <FaPlay>Unpause wave</FaPlay> : <FaPause>Pause wave</FaPause>}
            </button>
          </div>
        </div>

        <Slider page={page} setPage={setPage} isMobile={isMobile}>
          <div className="Introduction w-full min-h-90 flex items-center">
            <div className='p-2.5'>
              <h1
                className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>Hello! i'm
                <p className='lg:textl-2xl text-amber-500 dark:text-lime-200 font-semibold'> Ryan Clark Geneveo</p>
              </h1>
              <br />
              <p className='lg:text-lg font-semibold'>Welcome to my page!</p>
              <p className="lg:text-lg text-gray-500">i try to do stuff, tinker with computers, web dev, play games</p>
            </div>
          </div>
          <AboutMe />
          <Skills />
          <Projects />
          <Contacts />
        </Slider>

        {/* Water footer */}
        <Waves isWaving={isWaving} isMobile={isMobile} theme={theme} />
      </main >
    </>
  )
}

export default App
