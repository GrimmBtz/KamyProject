import "./Achievements.css";
import { useEffect, useState } from "react";

const achievementList = [
  { id: "explorer", icon: "✦", title: "Primeiro segredo", text: "Você abriu uma porta escondida." },
  { id: "magic-science", icon: "⚛", title: "Magia + ciência", text: "Hogwarts e Pasadena foram conectadas." },
  { id: "comfort", icon: "♡", title: "Refúgio encontrado", text: "Você encontrou magia, memórias e aconchego." },
  { id: "complete", icon: "∞", title: "Universo completo", text: "Todos os capítulos deixaram uma lembrança." },
  { id: "favorite", icon: "★", title: "Pessoa favorita", text: "Achievement desbloqueado: você é a favorita do desenvolvedor." }
];

export default function Achievements({ items }) {
  const [open, setOpen] = useState(false);
  const [memoryState, setMemoryState] = useState(items);

  useEffect(() => {
    setMemoryState(items);
  }, [items]);

  const total = Object.values(memoryState).filter(Boolean).length;
  const unlocked = {
    explorer: total >= 1,
    "magic-science": Boolean(memoryState.harry && memoryState.tbbt),
    comfort: Boolean(memoryState.frieren && memoryState.pets),
    complete: total === 5,
    favorite: total === 5
  };
  const totalUnlocked = Object.values(unlocked).filter(Boolean).length;

  return (
    <div className="achievements-wrap">
      <button className="achievements-button" type="button" onClick={() => setOpen((current) => !current)}>
        <span>🏆</span><small>{totalUnlocked}/5</small>
      </button>
      {open && (
        <div className="achievements-drawer">
          <div className="achievements-heading"><span>Conquistas desbloqueáveis</span><b>{totalUnlocked}/5</b></div>
          {achievementList.map((achievement) => (
            <div key={achievement.id} className={`achievement-row ${unlocked[achievement.id] ? "unlocked" : ""}`}>
              <span className="achievement-icon">{unlocked[achievement.id] ? achievement.icon : "🔒"}</span>
              <div><strong>{achievement.title}</strong><small>{unlocked[achievement.id] ? achievement.text : "Continue explorando para descobrir."}</small></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
