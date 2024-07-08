import React, { useState, useEffect } from 'react';
import logoLight from './sk.png';
import logoDark from './sk_dark.png';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Organizations from './components/Organizations';
import Projects from './components/Projects';
import Button from '@mui/material/Button';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    setIsHovered(false); // Reset hover state on toggle
  };

  useEffect(() => {
    // Check system preference for dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  // Preload images when component mounts
  useEffect(() => {
    const image1 = new Image();
    image1.src = logoLight;
    const image2 = new Image();
    image2.src = logoDark;
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="top-bar">
        <img
          src={darkMode ? logoDark : logoLight}
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
        <About />
        <Experience darkMode={darkMode} />
        <Organizations darkMode={darkMode} />
        <Projects darkMode={darkMode} />
      </main>
    </div>
  );
};

export default App;
