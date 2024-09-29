import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
// import Contato from './Components/Contato/Contato';
// import Login from './Components/Login/Login';
// import Sobre from './Components/Sobre/Sobre';
import Streaming from './Components/Streaming/Streaming';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} /> */}
        <Route path="/streaming" element={<Streaming/>} />
      </Routes>
    </Router>
  );
}

export default App;