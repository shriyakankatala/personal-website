import React, { useEffect, useState } from 'react';
import './Sections.css';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

interface OrganizationsProps {
    darkMode: boolean;
}

const Organizations: React.FC<OrganizationsProps> = ({ darkMode }) => {
    return (
        <section className="section">
            {/* <Divider flexItem sx={{ fontSize: '1.6rem', fontWeight: 'bold'}}>ORGANIZATIONS</Divider> */}
            <Divider
                flexItem
                sx={{
                "&::before, &::after": {
                    borderColor: darkMode ? '#F2D8FF' : '#581F73', // Adjust border color based on darkMode
                },
                }}
            >
                <Typography variant="h3" sx={{ fontSize: '1.6rem', fontWeight: 'bold', }} className="divider-sub">ORGANIZATIONS</Typography>
            </Divider>
            <div className="bullet">
                <img src="/logos/v1_logo.jpeg" alt="V1 Michigan" />
                <div>
                    <p><span className="title"><a href="https://v1michigan.com/" target="_blank" rel="noopener noreferrer">V1 Michigan</a></span><span className="title-sub"> - Platform & Product Studio Teams</span></p>
                    <p className="description">Largest community of student builders on University of Michigan's campus</p>
                </div>
            </div>
            <div className="bullet">
                <img src="/logos/mhacks_logo.jpeg" alt="MHacks" />
                <div>
                    <p><span className="title"><a href="https://www.mhacks.org/" target="_blank" rel="noopener noreferrer">MHacks</a></span><span className="title-sub"> - Design Team</span></p>
                    <p className="description">Largest annual student-run hackathon in the Midwest</p>
                </div>
            </div>
            <div className="bullet">
                <img src="/logos/IASA.png" alt="IASA" />
                <div>
                    <p><span className="title"><a href="https://www.michiganiasa.com/" target="_blank" rel="noopener noreferrer">Indian American Student Association</a></span><span className="title-sub"> - Marketing Chair</span></p>
                    <p className="description">The University of Michigan's premier South Asian cultural organization seeking to preserve and celebrate our history</p>
                </div>
            </div>
        </section>
    );
};

export default Organizations;
