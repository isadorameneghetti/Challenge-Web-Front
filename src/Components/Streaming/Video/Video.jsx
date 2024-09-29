import React from "react";
import './Video.css';
import videoFile from '../../../assets/Video/video.mp4';

const Video = () => {
    return (
        <div className="video">
            <video 
                src={videoFile} 
                autoPlay 
                muted 
                controls 
                loop
                className="video-player"
            />
        </div>
    );
};

export default Video;