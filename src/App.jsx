import React from 'react';
import Navbar from './Components/Home/Navbar/Navbar';
import Informations from './Components/Home/Informations/Informations';
import Calendar from './Components/Home/Calendar/Calendar';
import Carousel from './Components/Home/Carousel/Carousel';
import Footer from './Components/Home/Footer/Footer';
import Races from './Components/Home/Races/Races';


const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Informations />
        <Races />
        <Calendar />
        <Carousel />
      </main>
      <Footer />
    </div>
  );
};

export default App;
