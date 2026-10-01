import "./Silvia.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background/Background";
import Album from "../components/Album/Album";
import MysteryNote from "../components/MysteryNote/MysteryNote";

export default function Silvia() {
  const [isStarted, setIsStarted] = useState(false);
  const [isDriving, setIsDriving] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleDrive = () => {
    setIsDriving(true);
  };

  return (
    <main className={`silviaPage ${isStarted ? "sunset-sky" : ""} ${isDriving ? "driving" : ""}`}>
      <Background />
      <Album />
      <MysteryNote chapter="silvia" hint="uma placa aponta para você" message="Que você encontre estradas que não cobrem pressa, lugares onde possa respirar e pessoas que façam a viagem parecer mais leve. Hoje, o destino pode ser apenas um pouco de paz." />

      <div className="silvia-overlay" />

      <section className="silviaContent">
        <div className="silvia-scene">
          <div className={`car-silvia ${isStarted ? "headlights-on" : ""}`} onClick={handleStart}>
            <div className="car-body">🚗</div>
            <div className="headlight left" />
            <div className="headlight right" />
          </div>
          
          <div className="road">
            <div className="road-lines" />
          </div>
        </div>

        <div className="silvia-text-box">
          {!isStarted ? (
            <p className="hint-text">O Silvia está estacionado... clique nele para ligar. 🕯️</p>
          ) : !isDriving ? (
            <div className="reveal-text">
              <p>"Algumas pessoas sonham com lugares.</p>
              <p>Outras sonham com estradas.</p>
              <p>Espero que você encontre as duas."</p>
              <button className="drive-btn" onClick={handleDrive}>✨ Dar uma volta</button>
            </div>
          ) : (
            <div className="driving-text">
              <p>Sentindo o vento e a paz do pôr do sol...</p>
              <Link className="silviaNextBtn" to="/pets">Continuar a Jornada →</Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
