import "./EasterEggs.css";
import { useState } from "react";

export default function EasterEggs() {
  const [activeEgg, setActiveEgg] = useState(null);

  const easterEggs = [
    {
      id: "bigbang",
      trigger: "🔬",
      title: "The Big Bang Theory",
      messages: [
        "Bazinga! 🎓 Você é a constante na minha equação da felicidade.",
        "Soft Kitty, Warm Kitty, Little Ball of Fur... 🐱 Cantaria para você sempre que precisasse.",
        "Contrato de Namoro: Cláusula 1: Você é a pessoa mais incrível desse universo.",
        "Cantada Nerd: Você deve ser feita de Bário e Berílio, porque você é uma BaBe! 🧪",
        "Howard diria que cruzaria o espaço por você, mas eu só preciso de um abraço seu."
      ]
    },
    {
      id: "frieren",
      trigger: "❄️",
      title: "Sousou no Frieren",
      messages: [
        "A jornada com você é a magia mais preciosa que já encontrei. ✨",
        "Se eu pudesse aprender apenas uma magia, escolheria a que faz uma tarde durar um pouco mais.",
        "Frieren coleciona feitiços inúteis, mas eu coleciono cada sorriso seu como se fosse o mais raro.",
        "Referência: 'As jornadas sobre o tempo, memórias e laços que ficam para sempre'. Você é o meu laço mais forte.",
        "Himmel estaria orgulhoso da pessoa maravilhosa que você se tornou."
      ]
    },
    {
      id: "harry",
      trigger: "🪄",
      title: "Harry Potter",
      messages: [
        "Você é o meu Patrono em dias de dementadores. 💙",
        "Eu juro solenemente não fazer nada de bom... a não ser te fazer feliz. 👣",
        "Você usou o feitiço 'Accio'? Porque meu coração voou direto para você! 🧹",
        "Penseira: Se eu colocasse minhas memórias nela, 90% seriam momentos com você.",
        "Dumbledore diria: 'É preciso muita coragem para enfrentar os inimigos, mas muito mais para admitir o quanto eu te amo'."
      ]
    },
    {
      id: "love",
      trigger: "💙",
      title: "Especial para Você",
      messages: [
        "Você é amada mais do que imagina! 💕",
        "Se Van Gogh te visse, a Noite Estrelada seria apenas o fundo do seu retrato.",
        "Você é a minha pessoa favorita no mundo inteiro.",
        "Obrigado por existir e por tornar tudo mais leve."
      ]
    }
  ];

  return (
    <div className="easter-eggs-container">
      <p className="easter-instruction">Clique nos ícones para descobrir segredos... ✨</p>
      <div className="eggs-list">
        {easterEggs.map((egg) => (
          <div
            key={egg.id}
            className={`easter-egg ${activeEgg === egg.id ? "active" : ""}`}
            onClick={() => setActiveEgg(activeEgg === egg.id ? null : egg.id)}
          >
            <span className="egg-trigger">{egg.trigger}</span>
            
            {activeEgg === egg.id && (
              <div className="egg-content">
                <button className="close-egg" onClick={(e) => { e.stopPropagation(); setActiveEgg(null); }}>×</button>
                <h3>{egg.title}</h3>
                <div className="egg-messages">
                  {egg.messages.map((msg, idx) => (
                    <p key={idx} className="egg-message">{msg}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
