import React from 'react';
import './Sections.css';
import Divider from '@mui/material/Divider';

const Projects: React.FC = () => {
    return (
        <section className="section">
            <Divider flexItem sx={{fontSize: '1.6rem', fontWeight: 'bold'}}>PROJECTS</Divider>
            <div className="bullet"> 
                <img src="/logos/closetswap.png" alt="ClosetSwap" />
                <div>
                    <p><span className="title"><a href="https://closet-swap.vercel.app/" target="_blank" rel="noopener noreferrer">ClosetSwap</a></span><span className="title-sub"> - V1 Fall '23 Cohort</span></p>
                    <p className="description">Web platform marketplace to rent clothes and accessories quickly, reliably, and affordably from people on users' college campuses.</p>
                </div>
            </div>
            <div className="bullet">
                <img src="/logos/PP.png" alt="Profit Peak" />
                <div>
                    <p><span className="title"><a href="https://www.youtube.com/watch?v=VtMjJLMttso" target="_blank" rel="noopener noreferrer">Profit Peak</a></span><span className="title-sub"> - MHacks 16</span></p>
                    <p className="description">AI-driven solution for small business owners to determine their optimal price through a single picture of their product</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
