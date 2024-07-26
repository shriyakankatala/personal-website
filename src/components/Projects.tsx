import React, { useEffect, useState } from 'react';
import './Sections.css';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

interface ProjectsProps {
    darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
    return (
        <section className="section">
            {/* <Divider flexItem sx={{fontSize: '1.6rem', fontWeight: 'bold'}}>PROJECTS</Divider> */}
            <Divider
                className="divider-sub"
                flexItem
                sx={{
                "&::before, &::after": {
                    borderColor: darkMode ? '#F2D8FF' : '#581F73', // Adjust border color based on darkMode
                },
                }}
            >
                <Typography variant="h3" sx={{ fontSize: '1.6rem', fontWeight: 'bold', }} className="divider-sub">PROJECTS</Typography>
            </Divider>
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
                    <p className="description">AI-driven solution for small business owners to determine their optimal price through a single picture of their product.</p>
                </div>
            </div>
            <div className="bullet">
                <img src="/logos/cohort.png" alt="Cohort Tracker" />
                <div>
                    <p><span className="title"><a href="https://www.figma.com/design/hDn3R28RqskULs5GWjs6dy/V1-Cohort-Tracker?node-id=0-1" target="_blank" rel="noopener noreferrer">Cohort Tracker</a></span><span className="title-sub"> - V1 Platform Team</span></p>
                    <p className="description">Centralized page for information on V1 Michigan's cohort's attendance, coffee chats, project progress, and assignment implementation with separate interfaces for pledges and members.</p>
                </div>
            </div>
            <div margin-bottom='50px' className='extra-space'></div>
        </section>
    );
};

export default Projects;
