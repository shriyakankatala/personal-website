import React from 'react';
import logo from './shriya_k.png';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Organizations from './components/Organizations';
import Projects from './components/Projects';

const App: React.FC = () => {
    return (
        <div className="App">
          <Header />
            <main>
                <About />
                <Experience />
                <Organizations />
                <Projects />
            </main>
        </div>
    );
};

export default App;

