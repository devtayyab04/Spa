import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
     </Router>
    </>
  )
}

export default App;
