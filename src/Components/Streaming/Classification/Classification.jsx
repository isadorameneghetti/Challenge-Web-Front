import React from 'react';
import "./Classification.css";
import Piloto from '../../../assets/Edu.png';

export default function Classification() {
  return (
    <div className="Classification">
      <div className="main-container">
        <div className="pilots">
          <img className="photo" src={Piloto} />
          <i class="fa-solid fa-arrow-right"></i>
        </div>
          <div className="main-box">
              <div>
                  <span></span>
                  <h3>Posição</h3>
                  <div className="text">
                      <h2>16°</h2>
                  </div>
              </div>
              
          </div>

          <div className="main-box">
              <span></span>
              <h3>FanBoost</h3>
              <div className="text">
                  <h2>57</h2>
                  <p>votos</p>
              </div>
          </div>
      </div>
    </div>
  )
}
