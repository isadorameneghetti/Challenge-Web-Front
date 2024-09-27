import React from "react";
import './Carousel.css';
import andrettiNotPng from '../../assets/Cars/NotPng/andretti.jpg';
import andrettiPng from '../../assets/Cars/Png/andretti.png';

import cupraNotPng from '../../assets/Cars/NotPng/cupra.webp';
import cupraPng from  '../../assets/Cars/Png/cupra.png';

import envisionNotPng from '../../assets/Cars/NotPng/envision.webp';
import envisionPng from '../../assets/Cars/Png/envision.png';

import ertNotPng from '../../assets/Cars/NotPng/ert.jpg';
import ertPng from '../../assets/Cars/Png/ert.png';

import jaguarNotPng  from '../../assets/Cars/NotPng/jaguar.webp';
import jaguarPng from '../../assets/Cars/Png/jaguar.png';

import mahindraNotPng from  '../../assets/Cars/NotPng/mahindra.jpg';
import mahindraPng from '../../assets/Cars/Png/mahindra.png';

import maseratiNotPng from  '../../assets/Cars/NotPng/maserati.webp';
import maseratiPng from '../../assets/Cars/Png/maserati.png';

import neomNotPng  from  '../../assets/Cars/NotPng/neom.webp';
import neomPng from '../../assets/Cars/Png/neom.png';

import nissanNotPng from   '../../assets/Cars/NotPng/nissan.jpg';
import nissanPng from  '../../assets/Cars/Png/nissan.png';

import penskeNotPng  from  '../../assets/Cars/NotPng/penske.webp';
import penskePng from  '../../assets/Cars/Png/penske.png';

import porscheNotPng from   '../../assets/Cars/NotPng/porsche.avif';
import porschePng from  '../../assets/Cars/Png/porsche.png';

const carData = [
    { name: "ABT CUPRA FORMULA E TEAM", img: cupraPng, notImg: cupraNotPng },
    { name: "ANDRETTI FORMULA E", img: andrettiPng, notImg: andrettiNotPng },
    { name: "DS PENSKE", img: penskePng, notImg: penskeNotPng },
    { name: "ENVISION RACING", img: envisionPng, notImg: envisionNotPng },
    { name: "ERT FORMULA E TEAM", img: ertPng, notImg: ertNotPng },
    { name: "JAGUAR TCS RACING", img: jaguarPng, notImg: jaguarNotPng },
    { name: "MAHINDRA RACING", img: mahindraPng, notImg: mahindraNotPng },
    { name: "MASERATI MSG RACING", img: maseratiPng, notImg: maseratiNotPng },
    { name: "NEOM MCLAREN FORMULA E TEAM", img: neomPng, notImg: neomNotPng },
    { name: "NISSAN FORMULA E TEAM", img: nissanPng, notImg: nissanNotPng },
    { name: "TAG HEUER PORSCHE FORMULA E TEAM", img: porschePng, notImg: porscheNotPng },
];

const Carousel = () => {
    return (
        <div className="carousel">
            {carData.map((car, index) => (
                <div className="item" key={index}>
                    <div className="bg"></div>
                    <div className="info-box">
                        <div className="info-slider">
                            <div className="info-item" style={{ '--i': index }}>
                                <h2>{car.name}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                    dolorum sint tempora, eligendi odit commodi possimus sapiente
                                    distinctio deserunt dignissimos qui excepturi dicta ut.</p>
                                <a href="#" className="btn">Ver Mais</a>
                            </div>
                        </div>
                    </div>
                    <div className="img-box">
                        <div className="img-slider">
                            <div className="img-item" style={{ '--i': index }}>
                                <img src={car.img} alt={car.name} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <ul className="thumb">
                {carData.map((car, index) => (
                    <li key={index} className={index === 0 ? "selected" : ""}>
                        <img src={car.notImg} alt={car.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Carousel;
