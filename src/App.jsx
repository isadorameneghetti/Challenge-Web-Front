import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Informations from './Components/Informations/Informations';
import Footer from './Components/Footer/Footer';
import Races from './Components/Races/races';
import Carousel from './Components/Carousel/Carousel';

const App = () => {
  return (
    <Carousel />,
    <Informations />,
    <Navbar />,
    <Footer />,
    <Races />
  )
}

export default App
