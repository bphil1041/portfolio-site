import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Music from './pages/Music/Music';
import ImageOne from './components/Parallax/ImageOne';

function App() {
  return (
    <Router>
      <div className="App">


        <NavBar />

        <Routes>
          <Route path="/music" element={<Music />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />

        </Routes>

      </div>

    </Router>
  );
}

export default App;