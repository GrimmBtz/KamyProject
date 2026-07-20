import "./TBBT.css";
import { useState, useEffect } from "react";
import Background from "../components/Background/Background";
import Album from "../components/Album/Album";
import { useMemory } from "../hooks/useMemory";
import { Link } from "react-router-dom";

export default function TBBT() {
  const [timelineIndex, setTimelineIndex] = useState(0);
  const [showSoftKitty, setShowSoftKitty] = useState(false);
  const { collect } = useMemory();

  const timeline = [
    { year: "14 Billion Years Ago", event: "Our whole universe was in a hot dense state..." },
    { year: "2 Million Years Ago", event: "Autotrophs began to drool..." },
    { year: "97 Questions Ago", event: "O efeito borboleta que trouxe você até aqui. ✨" },
    { year: "Today", event: "Você é a minha pessoa favorita em todo o multiverso." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimelineIndex((prev) => (prev + 1) % timeline.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="tbbtPage">
      <Background />
      <Album />

      <div className="tbbt-overlay" />

      <section className="tbbtContent">
        <span className="tbbtTag">🔬 Capítulo V - The Big Bang Theory</span>
        
        {/* Abertura Dinâmica */}
        <div className="opening-timeline">
          <div className="timeline-year">{timeline[timelineIndex].year}</div>
          <div className="timeline-event">{timeline[timelineIndex].event}</div>
        </div>

        <div className="tbbt-grid">
          {/* O Sofá do Sheldon */}
          <div className="tbbt-card couch-card" onClick={() => collect("tbbt")}>
            <div className="card-icon">🛋️</div>
            <h3>O Lugar do Sheldon</h3>
            <p>"Este é o meu lugar. Em um mundo que gira, este é o ponto 0,0,0."</p>
            <span className="card-hint">Mas para você, eu abriria exceção...</span>
          </div>

          {/* Soft Kitty */}
          <div className="tbbt-card kitty-card" onClick={() => setShowSoftKitty(!showSoftKitty)}>
            <div className="card-icon">🐱</div>
            <h3>Soft Kitty</h3>
            <p>Clique para uma canção de conforto.</p>
            {showSoftKitty && (
              <div className="kitty-lyrics">
                <p>Soft kitty, warm kitty...</p>
                <p>Little ball of fur...</p>
                <p>Happy kitty, sleepy kitty...</p>
                <p>Purr, purr, purr... 🎵</p>
              </div>
            )}
          </div>

          {/* Contrato de Namoro */}
          <div className="tbbt-card contract-card">
            <div className="card-icon">📜</div>
            <h3>Contrato de Relacionamento</h3>
            <p>Cláusula 42: O Caio deve fazer a Kamy sorrir todos os dias.</p>
            <p>Cláusula 43: Noites de Quinta são reservadas para nós dois.</p>
          </div>
        </div>

        <div className="tbbt-messages">
          <div className="message-bubble">
            "Você é o meu Bazinga em um mundo de teorias chatas." ❤️
          </div>
          <div className="message-bubble">
            "Se fôssemos partículas, estaríamos em entrelaçamento quântico: o que acontece com você, acontece comigo." ⚛️
          </div>
        </div>

        <Link className="tbbtNextBtn" to="/final">
          Seguir para o Último Capítulo →
        </Link>
      </section>
    </main>
  );
}
