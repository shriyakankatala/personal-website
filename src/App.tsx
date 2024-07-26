// App.tsx
import React, { useState, useEffect, useRef } from 'react';
import logoLight from './sk.png';
import logoDark from './sk_dark.png';
import logoLightweb from './sk.webp';
import logoDarkweb from './sk_dark.webp';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Organizations from './components/Organizations';
import Projects from './components/Projects';
import Button from '@mui/material/Button';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import logoLighttransparent from './shriya_kankatala-removebg-preview.png';
import logoDarktransparent from './sk_dark-removebg-preview.png';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const fadeInSections = useRef<HTMLDivElement[]>([]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    setIsHovered(false); // Reset hover state on toggle
  };

  // Preload images when component mounts
  useEffect(() => {
    const image1 = new Image();
    image1.src = logoLighttransparent;
    const image2 = new Image();
    image2.src = logoDarktransparent;
  }, []);

  // Intersection Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    fadeInSections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="top-bar">
        <img
          src={darkMode ? logoDarktransparent : logoLighttransparent}
          alt="Shriya"
          className="header-logo"
        />
        <Button
          className="MuiButton-root toggle-button"
          onClick={toggleMode}
          variant="contained"
          sx={{
            backgroundColor: darkMode ? '#000' : '#fff',
            color: darkMode ? '#F2D8FF' : '#581F73',
            borderRadius: '50%',
            width: '40px',
            height: '62px',
            padding: '0',
            '&:hover': {
              backgroundColor: isHovered ? '#808080' : darkMode ? '#000' : '#fff',
            },
            '& .MuiButton-label': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
          startIcon={
            <div style={{ marginLeft: '7px', marginTop: '10px', marginRight: '-5px' }}>
              {darkMode ? <LightModeIcon /> : <NightlightIcon />}
            </div>
          }
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></Button>
      </div>
      <Header />
      <main>
        <div className="fade-in-section" ref={(el) => el && fadeInSections.current.push(el)}>
          <About />
        </div>
        <div className="fade-in-section" ref={(el) => el && fadeInSections.current.push(el)}>
          <Experience darkMode={darkMode} />
        </div>
        <div className="fade-in-section" ref={(el) => el && fadeInSections.current.push(el)}>
          <Organizations darkMode={darkMode} />
        </div>
        <div className="fade-in-section" ref={(el) => el && fadeInSections.current.push(el)}>
          <Projects darkMode={darkMode} />
        </div>
      </main>
    </div>
  );
};

export default App;
