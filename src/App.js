import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Music from './pages/Music/Music';
import styled from 'styled-components';


const CursorWrapper = styled.div`
    width: 30px;
    height: 30px;
    background-color: navajowhite;
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    box-shadow: #FC0 1px 0 50px;
    opacity: .2;
    z-index: 1;
`;

const Cursor = ({ delay }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTimeout(() => {
        setPosition({ x: e.pageX, y: e.pageY });
      }, delay);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [delay]);

  return (
    <CursorWrapper style={{ top: position.y, left: position.x }} />
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sparkle-container">
          {[...Array(350)].map((_, index) => (
            <div key={index} className="sparkle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 500}%` }} />
          ))}
        </div>

        <NavBar />
        <Cursor delay={100} />
        <Cursor delay={400} />

        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}


export default App;
