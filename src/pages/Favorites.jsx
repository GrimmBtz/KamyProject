import "./Favorites.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Background from "../components/Background/Background";
import Album from "../components/Album/Album";
import { useMemory } from "../hooks/useMemory";

const cards = [
  { emoji: "❄️",  title: "Frieren",           route: "/frieren"  },
  { emoji: "⚡",  title: "Harry Potter",       route: "/harry"    },
  { emoji: "🎨",  title: "Van Gogh",           route: "/vangogh"  },
  { emoji: "🔬",  title: "TBBT",               route: "/tbbt"     },
  { emoji: "🐾",  title: "Pequenos detalhes",  route: "/pets"     },
  { emoji: "🎵",  title: "Playlist",           route: "/playlist" },
];

export default function Favorites() {
  const [knockCount, setKnockCount] = useState(0);
  const [message, setMessage] = useState("");
  const { collect } = useMemory();

  const handleKnock = () => {
    const nextCount = knockCount + 1;
    setKnockCount(nextCount);
    
    if (nextCount === 1) setMessage("Knock...");
    if (nextCount === 2) setMessage("Knock, knock...");
    if (nextCount === 3) {
      setMessage("Bazinga! 🔬 Você é a constante na minha equação da felicidade.");
      collect("tbbt");
      setKnockCount(0);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <main className="favoritesPage">
      <Background />
      <Album />

      <section className="favoritesContent">
        <span className="miniTitle">🎨 Capítulo III - Coisas que você ama</span>

        <h1>
          Existem coisas que hoje não consigo ver...
          <br />
          sem lembrar de você.
        </h1>

        <p>Cada uma dessas pequenas lembranças guarda um motivo. Explore cada detalhe seu nesse mundo.</p>

        <div className="favoritesGrid">
          {cards.map((item, index) => (
            <Link key={index} className="memoryCard" to={item.route}>
              <div className="cardIcon">{item.emoji}</div>
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>

        {/* Easter Egg TBBT */}
        <div className="tbbt-easter-egg">
          <div className="couch-icon" onClick={() => setMessage("Esse é o lugar do Sheldon... mas você pode sentar aqui comigo. 🛋️")}>🛋️</div>
          <button className="knock-btn" onClick={handleKnock}>
            {knockCount > 0 ? `Knock ${knockCount}...` : "Knock Knock Knock"}
          </button>
          <div className="formula">K + C = ❤️</div>
        </div>

        {message && (
          <div className="tbbt-toast">
            <p>{message}</p>
          </div>
        )}

      </section>
    </main>
  );
}
