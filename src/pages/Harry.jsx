import "./Harry.css";
import Background from "../components/Background/Background";
import { Link } from "react-router-dom";
import { useState } from "react";
import Album from "../components/Album/Album";
import { useMemory } from "../hooks/useMemory";

export default function Harry() {
  const [message, setMessage] = useState("");
  const [showMap, setShowMap] = useState(false);
  const { collect } = useMemory();
  const candles = [...Array(15)];
  const particles = [...Array(40)];

  const handleInteraction = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <main className="harryPage">
      <Background />
      <Album />

      {/* Castelo de Hogwarts ao fundo */}
      <div className="hogwarts-castle" />

      {/* Coruja voando */}
      <div className="owl-fly" onClick={() => handleInteraction("Uma carta de Hogwarts para você! 🦉 Deixe um Recado para o Caio, sua Linda!.")} />

      {/* Partículas douradas */}
      <div className="harryParticles">
        {particles.map((_, i) => (
          <span
            key={i}
            className="harryParticle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Velas flutuantes */}
      <div className="harryCandles">
        {candles.map((_, i) => (
          <div
            key={i}
            className="harryCandle"
            style={{
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          >
            <div className="harryCandleFlame" />
          </div>
        ))}
      </div>

      {/* Mapa do Maroto */}
      <div className={`marauders-map ${showMap ? "active" : ""}`} onClick={() => { setShowMap(!showMap); collect("harry"); }}>
        <div className="map-icon">🗺️</div>
        {showMap && (
          <div className="map-content">
            <div className="footsteps">👣</div>
            <p>"Eu juro solenemente não fazer nada de bom... a não ser te amar." ✨</p>
          </div>
        )}
      </div>

      {message && (
        <div className="harry-toast">
          <p>{message}</p>
        </div>
      )}

      <div className="harryOverlay" />

      <section className="harryContent">
        <span className="harryTag">⚡ Capítulo II - Hogwarts</span>
        <h1>
          Há magia em cada
          <br />
          detalhe que você guarda, e você é a magia que deixa tudo mais especial nesse site para você, Kamy. ✨
        </h1>
        <p>
         Dizem que a magia existe para aqueles que sabem onde procurar.

No começo eu achava que ela morava apenas em castelos antigos, varinhas e feitiços.

Mas descobri que ela também aparece em conversas, risadas, pequenas lembranças e pessoas que tornam dias comuns um pouco mais especiais.

Talvez Hogwarts nunca tenha enviado uma carta para mim.

Ainda assim, encontrei algo que parece bastante com magia. 🦌
          <br />
          <br />
          Você transformou dias comuns em pequenos encantamentos, risadas além de calls que não vou esquecer, tipo 97 perguntas que foi o efeito borboleta de tudo isso, incrível, né?
        </p>
        <Link className="harryNextBtn" to="/vangogh">
          Seguir para a Galeria de Van Gogh →
        </Link>
      </section>
    </main>
  );
}
