import React from 'react';
import './Streaming.css'
import '../../index.css';
import Navbar from './Navbar/Navbar';
import Informations from './Informations/Informations';
import Chat from './Chat/Chat';
import Video from './Video/Video'
import PowerBi from './PowerBi/PowerBi';
import Footer from './Footer/Footer';

const Streaming = () => {
  return (
    <main>
        <Navbar />
        <div className="screens">
            <Informations />
            <Chat />
            <Video />
        </div>
            <PowerBi />
            <Footer />
    </main>
  );
};

export default Streaming;