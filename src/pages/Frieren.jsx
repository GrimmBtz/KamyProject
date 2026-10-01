import "./Frieren.css";
import { useState } from "react";
import Background from "../components/Background/Background";
import FloatingPetals from "../components/FloatingPetals/FloatingPetals";
import MagicFrieren from "../components/Frieren/MagicFrieren";
import { Link } from "react-router-dom";
import Album from "../components/Album/Album";
import { useMemory } from "../hooks/useMemory";
import MysteryNote from "../components/MysteryNote/MysteryNote";
import frierenImg from "../assets/frieren.png";

export default function Frieren() {
  const [message, setMessage] = useState("");
  const [showGrimorio, setShowGrimorio] = useState(false);
  const [magicStage, setMagicStage] = useState(0);
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

  const plantMagic = () => {
    const nextStage = Math.min(magicStage + 1, 3);
    setMagicStage(nextStage);
    collect("frieren");
    const stages = [
      "A semente ouviu você. Algumas magias começam quase em silêncio.",
      "Um pequeno broto apareceu. O tempo também sabe cuidar do que é bonito.",
      "A flor está quase pronta. Tenha paciência com o que ainda está aprendendo a florescer.",
      "A flor azul nasceu. Encontrei uma lembrança: até os dias longos guardam um instante bonito para você."
    ];
    setMessage(stages[nextStage]);
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <main className="frierenPage">
      <Background />
      <Album />
      <MysteryNote chapter="frieren" hint="uma folha guarda algo" message="Nem todo encontro precisa durar uma eternidade para ser importante. Algumas pessoas ficam em nós pela delicadeza com que fizeram um instante parecer infinito." />
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
          <button className={`magic-seed stage-${magicStage}`} type="button" onClick={plantMagic} aria-label="Plantar e fazer florescer a magia azul">
            <span className="seed-sparkle">✦</span>
            <span className="seed-visual">{["·", "🌱", "🌿", "💠"][magicStage]}</span>
            <span className="seed-hint">{magicStage === 0 ? "algo espera ser encontrado" : magicStage === 3 ? "flor encontrada" : "a magia está crescendo"}</span>
          </button>
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
        <button className="magic-invite" type="button" onClick={plantMagic}>
          {magicStage === 0 ? "Procurar uma magia escondida" : magicStage === 3 ? "A flor azul está florescendo" : "Continuar cuidando da magia"}
        </button>
        {magicStage === 3 && (
          <p className="himmel-note">Uma pequena lembrança para guardar: algumas pessoas tornam o caminho mais bonito só por terem passado por ele. E você faz isso sem perceber. ✦</p>
        )}
        <Link className="frierenNextBtn" to="/silvia">
          Encontrar o caminho →
        </Link>
      </section>
    </main>
  );
}
