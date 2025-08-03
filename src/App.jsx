import { useEffect, useState, useLayoutEffect } from 'react'
import Header from './components/Navbar/Header.jsx'
import Slider from './components/Slider/Slider.jsx'
import Card from './components/Card/Card.jsx'
import Waves from './components/Waves/Waves.jsx'
import AboutMe from './sections/AboutMe/AboutMe.jsx'
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
      min-h-[100vh] 
      min-w-[100vw]
      bg-gradient-to-b dark:from-zinc-900 dark:to-sky-800 
      from-sky-200 to-white
      dark:text-sky-50 text-zinc-900
      ">
        <div className="dark-mode-switch absolute top-12">
          <button
            className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded"
            onClick={toggleTheme}>
            Toggle
            <p>{waveMultiplier}</p>
          </button>
        </div>
        <Slider page={page} setPage={setPage} navigating={navigating}>


          {/* Main body / Content */}

          <div className="Introduction">
            <div className="w-full">
              <Card>
                <h1
                  className='lg:text-3xl'>Hello! my name is
                  <p className='lg:textl-2xl text-orange-600 dark:text-orange-200'> Ryan Clark Geneveo</p>
                </h1>
                <br />
                <p className='lg:text-lg'>Welcome to my page!</p>
              </Card>
            </div>
          </div>
          <div className="about-me">
            <Card>
              <AboutMe />
            </Card>
          </div>
          <div className="projects">
            Skills
            <div className="flex justify-between">
              <div className="bg-white/70">
                Personal Skills
              </div>
            </div>
          </div>

          <div className="projects">
            Project Section
            <div className="flex gap-2.5">
              <Card>
                <div>
                  <h1>Barangay Management System</h1>
                  <p>Made for MetroBulihan (Bayani)</p>
                  <p>Made with TALL Stack (Tailwind, Alpine, Laravel, Livewire)</p>
                </div>
              </Card>

              <Card>
                <div>
                  <h1>This Portfolio!</h1>
                  <p>Made with React</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="projects">
            Contacts Section
          </div>
        </Slider>

        {/* Water footer */}
        <div className="coast z-1">
          <Waves waveMultiplier={waveMultiplier} />
        </div>
      </main >
    </>
  )
}

export default App
