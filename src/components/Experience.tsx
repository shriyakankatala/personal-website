import React from 'react';
import './Sections.css';
import Divider from '@mui/material/Divider';

const Experience: React.FC = () => {
    return (
        <section className="section">
            <Divider flexItem sx={{ fontSize: '1.6rem', fontWeight: 'bold'}}>EXPERIENCE</Divider>
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
                <img src="/logos/Globalshala-Logo.jpg" alt="GlobalShala" />
                <div>
                    <p className="title"><a href="https://globalshala.com/" target="_blank" rel="noopener noreferrer">GlobalShala</a></p>
                    <p className="description">Software Engineering Intern</p>
                </div>
            </div>
        </section>
    );
};

export default Experience;
