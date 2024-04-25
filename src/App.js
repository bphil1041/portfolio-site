import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Music from './pages/Music/Music';

function App() {
  return (
    <Router>
      <div className="App">


        <NavBar />

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