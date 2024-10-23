import React, { useState, useEffect } from "react";
import './Dashboard.css';
import freq from '../../../assets/heart-rate.gif';

const Dashboard = () => {
    
    const [positionTime1, setPositionTime1] = useState({ minutes: 5, seconds: 134 });
    const [positionTime2, setPositionTime2] = useState({ minutes: 6, seconds: 140 });
    const [enginePower, setEnginePower] = useState(600); // em kW
    const [batteryLevel, setBatteryLevel] = useState(62); // em %
    const [pitStop1, setPitStop1] = useState({ minutes: 45, seconds: 12 });
    const [pitStop2, setPitStop2] = useState({ minutes: null, seconds: null });
    const [heartRate, setHeartRate] = useState(180); // bpm
    const [oxygenLevel, setOxygenLevel] = useState(92); // %
    const [carTemperature, setCarTemperature] = useState(52); // em °C

    useEffect(() => {
        
        const interval = setInterval(() => {
            
            setPositionTime1(prev => ({
                minutes: prev.minutes,
                seconds: prev.seconds + Math.floor(Math.random() * 3) - 1 // aleatório -1, 0, +1
            }));
            setPositionTime2(prev => ({
                minutes: prev.minutes,
                seconds: prev.seconds + Math.floor(Math.random() * 3) - 1 // aleatório -1, 0, +1
            }));

            
            setEnginePower(prev => prev + Math.floor(Math.random() * 5) - 2);

            
            setBatteryLevel(prev => prev - Math.random().toFixed(2) * 0.1);

         
            setPitStop1(prev => ({
                minutes: prev.minutes,
                seconds: prev.seconds + Math.floor(Math.random() * 2) - 1
            }));

           
            setHeartRate(prev => prev + Math.floor(Math.random() * 4) - 2);

            
            setOxygenLevel(prev => prev + Math.floor(Math.random() * 3) - 1);

            
            setCarTemperature(prev => prev + Math.floor(Math.random() * 3) - 1);
        }, 1000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="analytics">
            <div className="container">
                <div className="box">
                    <span></span>
                    <h3>Attack Mode</h3>
                    <div className="icons">
                        <i className="fa-regular fa-square-check"></i>
                        <i className="fa-regular fa-square"></i>
                    </div>
                    <div className="main-1">
                        <h2>1° - {positionTime1.minutes}" {positionTime1.seconds}''</h2>
                        <h2>2° - {positionTime2.minutes}" {positionTime2.seconds}''</h2>
                    </div>
                </div>

                <div className="box">
                    <h3>Potência do Motor</h3>
                    <span></span>
                    <h2>{enginePower} kW</h2>
                    <p>Eixo Traseiro: 350 kW</p>
                    <p>Eixo Frontal: 250 kW</p>            
                </div>

                <div className="box">
                    <span></span>
                    <h3>Estado da Bateria</h3>
                    <div className="main-3">
                        <h2>{batteryLevel.toFixed(2)}%</h2>
                        <p>≅ 25 a 30 minutos</p>
                    </div>
                </div>

                <div className="box">
                    <span></span>
                    <h3>Pit Stops</h3>
                    <div className="main-4">
                        <h2>1°</h2>
                        <p>{pitStop1.minutes}" {pitStop1.seconds}'</p>
                        <h2>2°</h2>
                        <p>{pitStop2.minutes ? `${pitStop2.minutes}" ${pitStop2.seconds}'` : '-'}</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="box center">
                    <span></span>
                    <h3>Frequência Cardíaca</h3>
                    <img src={freq} alt="Heart Rate" />
                    <div className="main-5">
                        <p>{heartRate} bpm</p>
                    </div>
                </div>

                <div className="box">
                    <span></span>
                    <h3>Oxigênio no Sangue</h3>
                    <div className="main-6">
                        <h2>{oxygenLevel}%</h2>
                    </div>
                </div>

                <div className="box">
                    <span></span>
                    <h3>Temperatura do Carro</h3>
                    <div className="main-7">
                        <h2>{carTemperature}°C</h2>
                    </div>
                </div>

                <div className="box">
                    <span></span>
                    <h3>Pilotos Próximos</h3>
                    <div className="main-8">
                        <h2>Frente</h2>
                        <p>S. Fenestraz - Nissan e.dams</p>
                        <h2>Atrás</h2>
                        <p>N. Cassidy - Jaguar Racing</p>
                    </div>
                </div>
            </div>        
        </div>
    );
};

export default Dashboard;