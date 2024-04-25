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
    width: 20px;
    height: 20px;
    background-color: navajowhite;
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    box-shadow: #FC0 1px 0 50px;
    opacity: .2;
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
        <NavBar />
        <Cursor delay={100} />
        <Cursor delay={400} />
        <Cursor delay={700} />
        <Cursor delay={1000} />
        <Cursor delay={1300} />
        <Cursor delay={3000} />




        <Routes>
          <Route path="portfolio-site/music" element={<Music />} />
          <Route path="portfolio-site/projects" element={<Projects />} />
          <Route path="portfolio-site/contact" element={<Contact />} />
          <Route path="portfolio-site/home" element={<Home />} />
          <Route path="portfolio-site/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
