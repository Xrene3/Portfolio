import { useEffect, useState, useLayoutEffect } from 'react'
import Header from './components/Navbar/Header.jsx'
import Slider from './components/Slider/Slider.jsx'
import Card from './components/Card/Card.jsx'
import Waves from './components/Waves/Waves.jsx'
import AboutMe from './pages/AboutMe/AboutMe.jsx'
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
        <div className="dark-mode-switch absolute">
          <button
            className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded"
            onClick={toggleTheme}>
            Toggle
            <p>{waveMultiplier}</p>
          </button>

          <button className="text-white text-italic" onClick={() => setWave(prev => !prev)}>
            {isWaving ? <h1>Unpause</h1> : <h1>Pause</h1>}
          </button>
        </div>
        <Slider page={page} setPage={setPage} navigating={navigating}>
          {/* Main body / Content */}
          <div className="Introduction m-4">
            <h1
              className='lg:text-3xl'>Hello! my name is
              <p className='lg:textl-2xl text-orange-600 dark:text-orange-200'> Ryan Clark Geneveo</p>
            </h1>
            <br />
            <p className='lg:text-lg'>Welcome to my page!</p>
          </div>

          <div className="about-me">
            <AboutMe />
          </div>

          <div className="projects">
            Skills
            <div className="flex justify-between">
              <div className="bg-white/70">
                Personal Skills
              </div>
              <Card title="Technologies I've used">
                <ul className="list-disc ml-5">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                  <li>AlpineJS</li>
                  <li>Laravel</li>
                  <li>Livewire</li>
                  <li>React</li>
                  <li>Firebase RTDB <p>(Kreait | Firebase for php)</p></li>
                </ul>

              </Card>
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
        <Waves waveMultiplier={waveMultiplier} isWaving={isWaving} />
      </main >
    </>
  )
}

export default App
