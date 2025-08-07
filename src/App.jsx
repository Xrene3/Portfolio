import { useEffect, useState, useLayoutEffect } from 'react'
import Header from './components/Navbar/Header.jsx'
import Slider from './components/Slider/Slider.jsx'
import Card from './components/Card/Card.jsx'
import Waves from './components/Waves/Waves.jsx'

import AboutMe from './pages/AboutMe/AboutMe.jsx'
import Skills from './pages/Skills/Skills.jsx'
import Projects from './pages/Projects/Projects.jsx'

import Logo from './components/Logo/Logo.jsx'
import './font.css'
function App() {

  // THEME [Dark mode | Light Mode]
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme' || 'light');
    setTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark')
  }, [])
  const toggleTheme = () => {
    const currentTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    localStorage.setItem('theme', currentTheme)
  };

  const [isWaving, setWave] = useState(false);

  // Page | Section handler
  const [page, setPage] = useState(0);
  const [waveMultiplier, setWaveMultiplier] = useState(1);

  const navigating = () => {
    // setWaveMultiplier(1);

    // setTimeout(() => {
    //   setWaveMultiplier(1.0085);
    // }, 100);

    // setTimeout(() => {
    //   setWaveMultiplier(1);
    // }, 500);

    // setWaveMultiplier(1);
    // const loopCount = 40;
    // const interval = 10;
    // const totalDuration = loopCount * interval;
    // let newMultiplier = 1;
    // for (let i = 0; i <= loopCount; i++) {
    //   setTimeout(() => {
    //     newMultiplier += 0.0005;
    //     console.log(`i: ${i}, multiplier: ${newMultiplier}, time: ${Date.now()}`);
    //     setWaveMultiplier(newMultiplier);
    //   }, i * interval);
    // }
    // for (let i = 0; i <= loopCount; i++) {
    //   setTimeout(() => {
    //     newMultiplier -= 0.0005;
    //     console.log(`i: ${i}, multiplier: ${newMultiplier}, time: ${Date.now()}`);
    //     setWaveMultiplier(newMultiplier);
    //   }, totalDuration + (i * interval));
    // }
    // return () => clearTimeout(timer);
  };

  return (
    <>
      <main className="
      relative 
      min-h-screen
      min-w-screen
      bg-gradient-to-b dark:from-zinc-900 dark:to-indigo-900 
      from-sky-200 to-white
      dark:text-sky-50 text-zinc-900
      ">
        <div className="dark-mode-switch w-full absolute">
          <div className="flex justify-center">
            <button
              className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded"
              onClick={toggleTheme}>
              Toggle Dark Mode
              {/* <p>{waveMultiplier}</p> */}
            </button>

            <button className="text-white text-italic" onClick={() => setWave(prev => !prev)}>
              {isWaving ? <h1>Unpause</h1> : <h1>Pause</h1>}
            </button>
          </div>
        </div>

        {/* Main body / Content */}
        <Slider page={page} setPage={setPage} navigating={navigating}>
          <div className="Introduction m-4">
            <h1
              className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>Hello! i'm
              <p className='lg:textl-2xl text-amber-500 dark:text-lime-200 font-semibold'> Ryan Clark Geneveo</p>
            </h1>
            <br />
            <p className='lg:text-lg font-semibold'>Welcome to my page!</p>
            <p className="lg:text-lg text-gray-500">i try to do stuff, tinker with computers, web dev, play games</p>
          </div>

          <div className="about-me">
            <AboutMe />
          </div>

          <div className="skills">
            <Skills />
          </div>

          <div className="projects">
            Project Section
            <Projects />
          </div>

          <div className="projects">
            Contacts Section
          </div>
        </Slider>

        {/* Water footer */}
        <Waves waveMultiplier={waveMultiplier} isWaving={isWaving} setWave={setWave} />
      </main >
    </>
  )
}

export default App
