import "./Background.css";
import { useState } from "react";

export default function Background() {
  const stars    = [...Array(180)];
  const snow     = [...Array(60)];
  const fireflies = [...Array(18)];
  const [moonClicks, setMoonClicks] = useState(0);
  const [message, setMessage] = useState("");

  const handleMoonClick = () => {
    const next = moonClicks + 1;
    setMoonClicks(next);
    if (next === 5) {
      setMessage("Você encontrou um segredo lunar! 🌙 'O universo é grande, mas você é o meu centro'.");
      setMoonClicks(0);
      setTimeout(() => setMessage(""), 5000);
    }
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
          className="star"
          style={{
            left:              `${Math.random() * 100}%`,
            top:               `${Math.random() * 100}%`,
            animationDelay:    `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />
      ))}

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
