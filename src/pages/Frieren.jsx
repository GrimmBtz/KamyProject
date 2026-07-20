import "./Frieren.css";
import { useState } from "react";
import Background from "../components/Background/Background";
import FloatingPetals from "../components/FloatingPetals/FloatingPetals";
import MagicFrieren from "../components/Frieren/MagicFrieren";
import { Link } from "react-router-dom";
import Album from "../components/Album/Album";
import { useMemory } from "../hooks/useMemory";
import frierenImg from "../assets/frieren.png";

export default function Frieren() {
  const [message, setMessage] = useState("");
  const [showGrimorio, setShowGrimorio] = useState(false);
  const { collect } = useMemory();

  const interactives = [
    { id: "flower1", type: "flower", x: "20%", y: "80%", color: "blue", msg: "Se eu pudesse aprender apenas uma magia, escolheria a que faz uma tarde durar um pouco mais." },
    { id: "flower2", type: "flower", x: "75%", y: "85%", color: "orange", msg: "Acho que comecei a colecionar momentos com você." },
    { id: "tree1", type: "tree", x: "10%", y: "60%", msg: "Algumas pessoas atravessam séculos... outras atravessam nossos pensamentos." },
    { id: "butterfly", type: "butterfly", x: "46%", y: "20%", msg: "Acho que você virou uma daquelas lembranças que aparecem sem pedir licença." }
  ];

  const handleInteraction = (msg, id) => {
    if (id === "flower1") collect("frieren");
    setMessage(msg);
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <main className="frierenPage">
      <Background />
      <Album />
      <div className="frieren-scene">
        <div className="mountains" />
        <div className="field">
          {interactives.map((item) => (
            <div
              key={item.id}
              className={`interactive-item ${item.type} ${item.color || ""}`}
              style={{ left: item.x, top: item.y }}
              onClick={() => handleInteraction(item.msg, item.id)}
            >
              {item.type === "flower" && "🌸"}
              {item.type === "tree" && "🌳"}
              {item.type === "butterfly" && "🦋"}
            </div>
          ))}
        </div>
      </div>

      <img className="frierenBackground" src={frierenImg} alt="Frieren" />
      <div className="frierenOverlay" />
      <FloatingPetals />
      <MagicFrieren />

      {/* Grimório Flutuante */}
      <div 
        className={`grimorio-container ${showGrimorio ? "open" : ""}`}
        onClick={() => setShowGrimorio(!showGrimorio)}
      >
        <div className="grimorio-glow" />
        <div className="grimorio-book">📖</div>
        {showGrimorio && (
          <div className="grimorio-reveal">
            <p>Magia desbloqueada: "Transformar dias comuns em memórias eternas." ✨</p>
          </div>
        )}
      </div>

      {message && (
        <div className="frieren-toast">
          <p>{message}</p>
        </div>
      )}

      <section className="frierenHeroContent">
        <span className="frierenTag">🌸 Capítulo I - Sousou no Frieren</span>
        <h1>
          Algumas pessoas aparecem
          <br />
          como pequenas magias, você foi uma delas cheia de detalhes e encantos.
        </h1>
        <p>
          Existem encontros que parecem durar muito
          mais do que o próprio tempo, cada segundo passado com você é um presente.
        </p>
        <Link className="frierenNextBtn" to="/harry">
          Seguir para Hogwarts →
        </Link>
      </section>
    </main>
  );
}
