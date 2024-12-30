import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import About from './pages/Sobre/About';
import Courses from './pages/courses/Courses';
import Projects from './pages/Project/Projects';
import Languages from './pages/Languages/Languages';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <div className='App_Card'>
    
</div>
  <div className={`container ${menuOpen ? 'menuOpen' : ''}`} id='container' style={{ marginTop: '0' }}>
          <Routes>

            <Route path="/" element={<Home menuOpen={menuOpen} />} />
            <Route path="/About" element={<About />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Languages" element={<Languages />} />
          </Routes>

        </div>
     
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
