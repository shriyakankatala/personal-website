import React from 'react';
import './Header.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import Divider from '@mui/material/Divider';

const Header: React.FC = () => {
    return (
        <header className="header-container">
            <h1>Shriya Kankatala</h1>
            <div className="contact-icons">
                <a href="https://github.com/shriyakankatala" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ fontSize: 40 }} />
                </a>
                <a href="mailto:kankats@umich.edu">
                    <EmailIcon sx={{ fontSize: 40 }} />
                </a>
                <a href="https://www.linkedin.com/in/shriyakankatala" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ fontSize: 40 }} />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <DescriptionIcon sx={{ fontSize: 40 }} />
                </a>
            </div>
            <Divider flexItem sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px'}}></Divider>
        </header>
    );
};

export default Header;
