import { useEffect, useState, useLayoutEffect } from 'react'
import Header from './components/Navbar/Header.jsx'
import Slider from './components/Slider/Slider.jsx'
import Card from './components/Card/Card.jsx'
import Waves from './components/Waves/Waves.jsx'
import AboutMe from './sections/AboutMe/AboutMe.jsx'
import './font.css'
function App() {

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

  const technical_skills = [
    'laravel',
    'css',
    'html',
    'tailwind',
    'bootstrap'
  ];


  return (
    <>
      <main className="relative min-h-screen bg-gradient-to-b dark:from-sky-200 dark:to-white">
        <Slider>
          <div className="dark-mode-switch">
            Intro / First
            <button
              className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded"
              onClick={toggleTheme}>
              Toggle Dark Mode
            </button>

            <div className="bg-blue-200 text-black p-4 mt-4 rounded shadow">
              Output: {theme === 'dark' ? 'Dark mode is ON' : 'Dark mode is OFF'}
            </div>
          </div>

          {/* Main body / Content */}
          <div className="about-me flex justify-end">
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
              <div className="bg-white/70">
                Technical Skills
                {technical_skills.map((skill, i) => <p>{skill}</p>)}
              </div>

            </div>
          </div>

          <div className="projects">
            Project Section
          </div>

          <div className="projects">
            Contacts Section
          </div>
        </Slider>

        {/* Water footer */}
        <div className="coast">
          <Waves />
        </div>
      </main>
    </>
  )
}

export default App
