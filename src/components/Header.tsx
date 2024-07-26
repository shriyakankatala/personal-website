import React, { useEffect, useRef } from 'react';
import './Header.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import Divider from '@mui/material/Divider';

const Header: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const contactIconsRef = useRef<HTMLDivElement>(null);
    const dividerRef = useRef<HTMLHRElement>(null); // Use HTMLHRElement for Divider reference

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-visible');
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        if (contactIconsRef.current) observer.observe(contactIconsRef.current);
        if (dividerRef.current) observer.observe(dividerRef.current); // Observe Divider

        return () => observer.disconnect();
    }, []);

    return (
        <header className="header-container">
            <h1 className="fade-in-section" ref={headerRef}>Shriya Kankatala</h1>
            <div className="contact-icons fade-in-section" ref={contactIconsRef}>
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
            <Divider
                flexItem
                sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px', backgroundColor: '#000' }}
                className='divider fade-in-section' // Add fade-in-section class
                ref={dividerRef} // Attach the ref to Divider
            />
        </header>
    );
};

export default Header;
