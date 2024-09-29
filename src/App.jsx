import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Thanks from './Components/Thanks/Thanks';
import Streaming from './Components/Streaming/Streaming';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/streaming" element={<Streaming/>} />
      </Routes>
    </Router>
  );
}

export default App;