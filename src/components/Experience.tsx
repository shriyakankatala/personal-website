import React, { useEffect, useState } from 'react';
import './Sections.css';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [globalShalaLogo, setGlobalShalaLogo] = useState<string>('');

  // Preload images when component mounts or darkMode changes
  useEffect(() => {
    const loadImage = async () => {
      try {
        const logo = darkMode
          ? await import('./gs_dark.png')
          : await import('./Globalshala-Logo-removebg.png');
        setGlobalShalaLogo(logo.default); // Ensure to get the correct path from the imported module
      } catch (error) {
        console.error('Failed to preload image:', error);
      }
    };

    loadImage();
  }, [darkMode]);

  return (
    <section className="section">
      <Divider
        className="divider-sub"
        flexItem
        sx={{
          "&::before, &::after": {
            borderColor: darkMode ? '#F2D8FF' : '#581F73', // Adjust border color based on darkMode
          },
        }}
      >
        <Typography variant="h3" sx={{ fontSize: '1.6rem', fontWeight: 'bold', }} className="divider-sub">EXPERIENCE</Typography>
      </Divider>
      <div className="bullet">
        <img src="/logos/xoul.png" alt="Xoul" />
        <div>
          <p className="title"><a href="https://www.xoul.ai/explore" target="_blank" rel="noopener noreferrer">XOUL</a></p>
          <p className="description">Software Engineering Intern</p>
        </div>
      </div>
      <div className="bullet">
        <img src="/logos/ultima_insights_logo.jpeg" alt="Ultima Insights" />
        <div>
          <p className="title"><a href="https://ultimainsights.ai/" target="_blank" rel="noopener noreferrer">Ultima Insights</a></p>
          <p className="description">Software Engineering Intern</p>
        </div>
      </div>
      <div className="bullet">
        <img src={globalShalaLogo} alt="GlobalShala" />
        <div>
          <p className="title"><a href="https://globalshala.com/" target="_blank" rel="noopener noreferrer">GlobalShala</a></p>
          <p className="description">Software Engineering Intern</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
