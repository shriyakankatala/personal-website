// import React from 'react';
// import './About.css';

// const About: React.FC = () => {
//     return (
//         <section className="about" style={{ fontSize: '1.25rem'}}>
//             <p>Hi, I'm Shriya!</p>
//             <p>I'm studying CSE and minoring in Business & Math at the University of Michigan. I'm super passionate about using technology to improve social and mental well-being.</p>
//             <p>Currently building a sheet music generator for any given mp3 file! - planning to add harmony generation as well in a future iteration.</p>
//             <p>Hobbies: singing, dancing, traveling, hiking!</p>
//             <p>Always down to meet new people and do spontaneous things :)</p>
//             <p>Let's chat: <a href="mailto:kankats@umich.edu" style={{ textDecoration: 'none', color: '#581F73', fontWeight: '600' }}>kankats@umich.edu</a></p>
//         </section>
//     );
// };

// export default About;

import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section className="about">
            <div className="about-content">
                <img src='/logos/headshot.jpg' alt="Headshot" className="profile-image" />
                <div className="text" style={{ fontSize: '1.25rem'}}>
                    <p>Hi, I'm Shriya!</p>
                    <p>I'm studying CSE and minoring in Business & Math at the University of Michigan.</p>
                    <p>I'm super passionate about using technology to improve social and mental well-being.</p>
                    <p>Currently building a sheet music generator for any given mp3 file! - planning to add harmony generation as well in a future iteration.</p>
                    <p>Hobbies: singing, dancing, traveling, hiking!</p>
                    <p>Always down to meet new people and do spontaneous things :)</p>
                    <p>Let's chat: <a href="mailto:kankats@umich.edu" style={{ textDecoration: 'none', color: '#581F73', fontWeight: '600' }} className="hyperlink">kankats@umich.edu</a></p>
                </div>
            </div>
        </section>
    );
};

export default About;

