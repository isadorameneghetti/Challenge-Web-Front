import React from 'react';
import './Streaming.css'
import '../../index.css';
import Navbar from './Navbar/Navbar';
import Informations from './Informations/Informations';
import Chat from './Chat/Chat';
import Video from './Video/Video'
import Classification from './Classification/Classification';
import PowerBi from './PowerBi/PowerBi';
import Footer from './Footer/Footer';

const Streaming = () => {
  return (
    <main>
        <Navbar />
        <div className="screens">
            <Informations />
            <Video />
            <Classification />
            <Chat />
        </div>
        <div className="statistcsF">
            <PowerBi />
            <Footer />
        </div>
    </main>
  );
};

export default Streaming;