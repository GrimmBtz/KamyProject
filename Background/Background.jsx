import "./Background.css";
import { useState } from "react";

export default function Background() {
  const stars    = [...Array(180)];
  const snow     = [...Array(60)];
  const fireflies = [...Array(18)];
  const [moonClicks, setMoonClicks] = useState(0);
  const [message, setMessage] = useState("");
  const [afagoIndex, setAfagoIndex] = useState(0);
  const [constellationFound, setConstellationFound] = useState([]);

  const afagos = [
    "Você não precisa ser forte o tempo todo. Pode descansar aqui.",
    "Seu jeito de existir já é motivo suficiente para ser tratada com carinho.",
    "Um passo pequeno ainda é um passo. Eu acredito em você.",
    "Se hoje estiver cinza, tudo bem. A luz não desapareceu; ela está só esperando.",
    "Você é importante, inclusive nos dias em que não consegue perceber isso."
  ];

  const constellationStars = [
    { id: "c1", x: "18%", y: "24%", note: "A primeira estrela guarda curiosidade." },
    { id: "c2", x: "31%", y: "18%", note: "A segunda guarda um pouco de coragem." },
    { id: "c3", x: "45%", y: "27%", note: "A terceira lembra que gentileza também é força." },
    { id: "c4", x: "58%", y: "19%", note: "A quarta aponta para novas histórias." },
    { id: "c5", x: "71%", y: "29%", note: "A quinta guarda uma risada que ainda vai acontecer." },
    { id: "c6", x: "83%", y: "20%", note: "A última completa a constelação da Kamy." }
  ];

  const handleAfago = () => {
    setMessage(afagos[afagoIndex]);
    setAfagoIndex((current) => (current + 1) % afagos.length);
    setTimeout(() => setMessage(""), 5000);
  };

  const handleMoonClick = () => {
    const next = moonClicks + 1;
    setMoonClicks(next);
    if (next === 5) {
      setMessage("Você encontrou um segredo lunar! O universo é grande, mas você é o meu centro.");
      setMoonClicks(0);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  const handleConstellation = (star) => {
    setConstellationFound((current) => {
      if (current.includes(star.id)) return current;
      const next = [...current, star.id];
      setMessage(next.length === constellationStars.length ? "Constelação da Kamy completa. Algumas estrelas simplesmente parecem estar no lugar certo." : star.note);
      setTimeout(() => setMessage(""), 3500);
      return next;
    });
  };

  return (
    <div className="background">
      {/* Lua interativa */}
      <div className="moon" onClick={handleMoonClick} style={{ cursor: "pointer" }} />

      {message && (
        <div className="global-toast">
          <p>{message}</p>
        </div>
      )}

      {/* Luz suave */}
      <div className="glow" />

      {/* Estrelas */}
      {stars.map((_, i) => (
        <span
          key={i}
          className={`star ${i % 18 === 0 ? "star-afago" : ""}`}
          role={i % 18 === 0 ? "button" : undefined}
          tabIndex={i % 18 === 0 ? 0 : undefined}
          aria-label={i % 18 === 0 ? "Estrela com uma mensagem de carinho" : undefined}
          onClick={i % 18 === 0 ? handleAfago : undefined}
          onKeyDown={i % 18 === 0 ? (event) => event.key === "Enter" && handleAfago() : undefined}
          style={{
            left:              `${Math.random() * 100}%`,
            top:               `${Math.random() * 100}%`,
            animationDelay:    `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />
      ))}

      <div className={`constellation-layer ${constellationFound.length === constellationStars.length ? "complete" : ""}`} aria-label="Constelação secreta da Kamy">
        <div className="constellation-lines" aria-hidden="true">
          <i className="constellation-line line-a" /><i className="constellation-line line-b" /><i className="constellation-line line-c" /><i className="constellation-line line-d" /><i className="constellation-line line-e" />
        </div>
        {constellationStars.map((star) => (
          <button key={star.id} className={`constellation-star ${constellationFound.includes(star.id) ? "found" : ""}`} type="button" style={{ left: star.x, top: star.y }} onClick={() => handleConstellation(star)} aria-label="Encontrar estrela da constelação secreta">✦</button>
        ))}
      </div>

      {/* Vagalumes */}
      {fireflies.map((_, i) => (
        <span
          key={"ff" + i}
          className="firefly"
          style={{
            left:           `${Math.random() * 100}%`,
            top:            `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}

      {/* Neve */}
      {snow.map((_, i) => (
        <span
          key={"sn" + i}
          className="snow"
          style={{
            left:              `${Math.random() * 100}%`,
            animationDelay:    `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
}
