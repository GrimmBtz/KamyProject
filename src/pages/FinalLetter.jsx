import "./FinalLetter.css";
import Background from "../components/Background/Background";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MysteryNote from "../components/MysteryNote/MysteryNote";

export default function FinalLetter() {
  const [showFireworks, setShowFireworks] = useState(false);
  const [activeFlower, setActiveFlower] = useState(null);
  const [journeyCycle] = useState(() => Number(localStorage.getItem("kamy_journey_cycle") || 0));
  const flowersData = [
    { id: 1, emoji: "🌸", msg: "Você é o meu encontro mais precioso." },
    { id: 2, emoji: "🌷", msg: "Seu sorriso ilumina qualquer noite estrelada." },
    { id: 3, emoji: "🌹", msg: "Obrigado por cada pequeno detalhe." },
    { id: 4, emoji: "🌻", msg: "Você faz o mundo parecer mais bonito." },
    { id: 5, emoji: "🌺", msg: "'Tive um Problema com a Minha mãe, sabia? kkkkk Referencias!'" },
  ];

  const journeyLines = [
    "Fim do site. Não da história.",
    "O universo ainda tem capítulos que não foram descobertos.",
    "Algumas portas só aparecem quando você volta com curiosidade.",
    "A aventura recomeça — desta vez com uma estrela a mais."
  ];
  const symbols = ["☾", "✦", "🌸", "🪄", "⚛", "🐾", "🎨", "♫"];

  const restartJourney = () => {
    localStorage.setItem("kamy_journey_cycle", String(journeyCycle + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowFireworks(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`finalPage ${showFireworks ? "darken" : ""}`}>
      <Background />
      <MysteryNote chapter="final" hint="o último envelope ainda respira" message="Este presente não precisa ser o fim de nada. Se algum dia o mundo ficar barulhento, volte para este lugar: haverá sempre uma luz acesa, uma história esperando e alguém torcendo pelo seu sorriso." />
      
      {showFireworks && (
        <div className="fireworks-container">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="firework" style={{ left: `${20 * i + 10}%`, animationDelay: `${i * 0.5}s` }} />
          ))}
        </div>
      )}

      <section className="finalContent">
        <div className="finalCard">
          <span className="finalTag">🎆 Último Capítulo - Para Sempre</span>
          <h2>Obrigado por ser você mesma, kamilly.</h2>
          
          <div className="finalText">
            <p>
              Existem pessoas que chegam na nossa vida e mudam silenciosamente tudo ao redor.
            </p>
            <p>
              Você é como uma "Noite Estrelada" em meio ao caos: cheia de detalhes, luz e beleza, tem os seus passados e problemas, mas ainda assim brilha com uma luz única.
            </p>
          </div>

          <div className="final-recap">
            <span className="recap-label">Você atravessou dimensões de</span>
            <div className="recap-symbols">{symbols.map((symbol) => <span key={symbol}>{symbol}</span>)}</div>
            <p>{journeyLines[journeyCycle % journeyLines.length]}</p>
          </div>

          <div className="buque-interativo">
            <p className="buque-hint">Clique nas flores do buquê... 💐</p>
            <div className="flowers-row">
              {flowersData.map((f) => (
                <div key={f.id} className="buque-flower" onClick={() => setActiveFlower(f.id)}>
                  {f.emoji}
                  {activeFlower === f.id && <div className="flower-pop">{f.msg}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="finalSignature">
            <p>Com todo o carinho do mundo, tem amo, viu? Feio Por</p>
            <span className="name">Grimm 🐾</span>
          </div>

          <Link className="finalHomeBtn" to="/" onClick={restartJourney}>
            Recomeçar a Jornada ✦ Comigo? 💍
          </Link>
        </div>
      </section>
    </main>
  );
}
