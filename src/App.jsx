import { useEffect, useState } from 'react'
import useSound from 'use-sound';

import { useTheme } from './hooks/useTheme.js'
import { useMobile } from './hooks/useMobile.js'
import Slider from './components/Slider/Slider.jsx'
import Waves from './components/Waves/Waves.jsx'

import AboutMe from './pages/AboutMe/AboutMe.jsx'
import Skills from './pages/Skills/Skills.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Welcome from './pages/Welcome/Welcome.jsx'

import './font.css'
import './App.css'

import { FaMoon, FaPause, FaPlay, FaSun } from 'react-icons/fa'

const pageNavigation = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'about', label: 'About me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
];

function App() {
  const { theme, toggleTheme } = useTheme();
  const { isMobile } = useMobile();
  const [isProjectsOpen, setProjectsOpen] = useState(false);
  const [, setIsHoveringCard] = useState(false);
  const [isWaving, setWave] = useState(false);
  const [page, setPage] = useState(0);

  const hoverCardSfxUrl = "/Portfolio/sounds/sfx/gnome_toggled.mp3";
  const [play, { stop }] = useSound(hoverCardSfxUrl, { volume: 0.4 });

  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleSection) return;
      const visiblePage = pageNavigation.findIndex(({ id }) => id === visibleSection.target.id);
      if (visiblePage !== -1) setPage(visiblePage);
    }, { rootMargin: '-20% 0px -55% 0px', threshold: 0 });

    pageNavigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  const dotClass = (isActive) => `
    h-2.5 w-2.5 rounded-full transition duration-200
    ${isActive
      ? 'scale-125 bg-orange-500 ring-4 ring-orange-500/15 dark:bg-lime-200 dark:ring-lime-200/20'
      : 'bg-zinc-400/70 group-hover:bg-orange-500 dark:bg-zinc-500 dark:group-hover:bg-lime-200'}
  `;

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-300 to-white text-zinc-900 transition-colors duration-300 dark:from-zinc-900 dark:to-indigo-700 dark:text-sky-50">
      <header className="notch fixed left-1/2 top-4 z-[100] flex w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 items-center justify-between rounded-lg border border-indigo-300/30 bg-white/80 px-3 py-2 shadow-lg backdrop-blur-xs dark:border-zinc-700/50 dark:bg-gray-800/80 dark:text-indigo-100 sm:px-5">
        <nav aria-label="Page navigation" className="flex items-center gap-0.5 sm:gap-1">
          {pageNavigation.map((item, index) => (
            isMobile ? (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-label={item.label}
                aria-current={page === index ? 'page' : undefined}
                title={item.label}
                className="group flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-zinc-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:hover:bg-white/10 dark:focus-visible:ring-lime-200"
              >
                <span aria-hidden="true" className={dotClass(page === index)} />
              </a>
            ) : (
              <button
                key={item.id}
                type="button"
                onClick={() => setPage(index)}
                aria-label={item.label}
                aria-current={page === index ? 'page' : undefined}
                title={item.label}
                className="group flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-zinc-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:hover:bg-white/10 dark:focus-visible:ring-lime-200"
              >
                <span aria-hidden="true" className={dotClass(page === index)} />
              </button>
            )
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => setWave((prev) => !prev)}
            aria-label={isWaving ? 'Resume animated waves' : 'Pause animated waves'}
            title={isWaving ? 'Resume waves' : 'Pause waves'}
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-700 transition hover:bg-orange-500/10 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:text-zinc-200 dark:hover:bg-lime-200/10 dark:hover:text-lime-200 dark:focus-visible:ring-lime-200"
          >
            {isWaving ? <FaPlay aria-hidden="true" size={14} /> : <FaPause aria-hidden="true" size={14} />}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-700 transition hover:bg-orange-500/10 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:text-zinc-200 dark:hover:bg-lime-200/10 dark:hover:text-lime-200 dark:focus-visible:ring-lime-200"
          >
            {theme === 'dark' ? <FaSun aria-hidden="true" size={16} /> : <FaMoon aria-hidden="true" size={16} />}
          </button>
        </div>
      </header>

      <div className="page-panel relative z-10 mx-auto mt-24 min-h-[calc(100vh-6rem)] w-full">
        <div className="container mx-auto">
          <Slider page={page} setPage={setPage} isMobile={isMobile}>
            <section id="welcome" className="scroll-mt-24">
              <Welcome />
            </section>
            <section id="about" className="scroll-mt-24">
              <AboutMe />
            </section>
            <section id="skills" className="scroll-mt-24">
              <Skills />
            </section>
            <section id="projects" className="scroll-mt-24">
              <Projects setIsHoveringCard={setIsHoveringCard} play={play} stop={stop} isOpen={isProjectsOpen} setIsOpen={setProjectsOpen} />
            </section>
          </Slider>
        </div>
      </div>

      <Waves isWaving={isWaving} isMobile={isMobile} theme={theme} />
    </main>
  )
}

export default App
