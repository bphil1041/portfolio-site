import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Music from './pages/Music/Music';
import About from './pages/About/About';
import styled, { keyframes } from 'styled-components';

const CursorWrapper = styled.div`
    width: 40px;
    height: 40px;
    background-color: navajowhite;
    border-radius: 50%;
    border-color: #558ABB;
    border-width: 10px;
    position: absolute;
    pointer-events: none;
    box-shadow: 0 0 60px navajowhite; 
    opacity: .55;
    z-index: 1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
`;

const Cursor = ({ delay }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTimeout(() => {
        setPosition({ x: e.pageX - 20, y: e.pageY - 20 });
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

const sparklePulse = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const SparkleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 200%;
  pointer-events: none;
  z-index: 0;
`;

const Sparkle = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 2px;
  height: 2px;
  background-color: navajowhite;
  animation: ${sparklePulse} 2s linear infinite, sparkleScroll 50s linear infinite;
  opacity: 0;

  @keyframes sparkleScroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100vh);
    }
  }
`;

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const musicRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <SparkleContainer>
        {[...Array(150)].map((_, index) => (
          <Sparkle
            key={index}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </SparkleContainer>

      <NavBar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, projectsRef, musicRef, contactRef }} />
      <Cursor delay={250} />

      <div className="content-container">
        <ContentContainer>
          <Page ref={homeRef}><Home /></Page>
          <Page ref={aboutRef}><About /></Page>
          <Page ref={projectsRef}><Projects /></Page>
          <Page ref={musicRef}><Music /></Page>
          <Page ref={contactRef}><Contact /></Page>
        </ContentContainer>
      </div>
    </div>
  );
}

export default App;
