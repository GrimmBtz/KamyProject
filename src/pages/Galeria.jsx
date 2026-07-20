import "./Galeria.css";
import Background from "../components/Background/Background";
import Stars from "../components/Stars";
import Moon from "../components/Moon";
import { useState } from "react";
import { Link } from "react-router-dom";
import EasterEggs from "../components/EasterEggs/EasterEggs";

// Importar as fotos
import photo1 from "../assets/Screenshot_20260702_031159_Instagram.jpg";
import photo2 from "../assets/Screenshot_20260702_031307_Instagram.jpg";
import photo3 from "../assets/Screenshot_20260702_031312_Instagram.jpg";
import photo4 from "../assets/Screenshot_20260702_031319_Instagram.jpg";
import photo5 from "../assets/Screenshot_20260702_031332_Instagram.jpg";
import photo6 from "../assets/Screenshot_20260702_031335_Instagram.jpg";
import photo7 from "../assets/Screenshot_20260702_031349_Instagram.jpg";
import photo8 from "../assets/Screenshot_20260702_031354_Instagram.jpg";
import photo9 from "../assets/Screenshot_20260702_031408_Instagram.jpg";

export default function Galeria() {
  const [easterEggs, setEasterEggs] = useState({
    bigbang: false,
    frieren: false,
    harry: false,
    love: false
  });

  const photos = [
    { id: 1, src: photo1, alt: "Momento especial 1" },
    { id: 2, src: photo2, alt: "Izzy" },
    { id: 3, src: photo3, alt: "Ice" },
    { id: 4, src: photo4, alt: "Amora" },
    { id: 5, src: photo5, alt: "Momento especial 2" },
    { id: 6, src: photo6, alt: "Momento especial 3" },
    { id: 7, src: photo7, alt: "Momento especial 4" },
    { id: 8, src: photo8, alt: "Momento especial 5" },
    { id: 9, src: photo9, alt: "Momento especial 6" }
  ];

  const interests = [
    { 
      emoji: "🔬", 
      title: "The Big Bang Theory", 
      desc: "Sheldon, Leonard e toda a turma",
      easter: "bigbang",
      message: "Bazinga! 🎓 Você é tão inteligente quanto Sheldon, mas muito mais carismática!"
    },
    { 
      emoji: "❄️", 
      title: "Frieren", 
      desc: "As jornadas sobre tempo e memórias",
      easter: "frieren",
      message: "Algumas pessoas aparecem como uma pequena magia... você é uma delas! ✨"
    },
    { 
      emoji: "🪄", 
      title: "Harry Potter", 
      desc: "Magia, amizade e coragem",
      easter: "harry",
      message: "Você é tão especial quanto um Patrono! 💙"
    },
    { 
      emoji: "📚", 
      title: "Livros", 
      desc: "Histórias que nos transportam" 
    },
    { 
      emoji: "🎵", 
      title: "Música", 
      desc: "A trilha sonora da vida" 
    },
    { 
      emoji: "🌙", 
      title: "Noites Estreladas", 
      desc: "Momentos de paz e contemplação" 
    },
    { 
      emoji: "☕", 
      title: "Café", 
      desc: "Pequenos prazeres do dia a dia" 
    },
    { 
      emoji: "💙", 
      title: "Amor", 
      desc: "O que mais importa",
      easter: "love",
      message: "Você é amada mais do que imagina! 💕"
    }
  ];

  const toggleEasterEgg = (type) => {
    setEasterEggs(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <main className="galeriaPage">
      <Background />
      <Stars />
      <Moon />

      <div className="galeria-overlay"></div>

      <section className="galeriaContent">
        <span className="galeriaTag">Sobre você</span>
        <h1>Uma galeria de você.</h1>
        <p>
          Cada um desses pequenos detalhes faz parte da pessoa incrível que você é.
        </p>

        {/* Fotos em grid */}
        <div className="fotos-grid">
          {photos.map((photo, index) => (
            <div key={photo.id} className="foto-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>

        {/* Componente de Easter Eggs com referências e cantadas */}
        <EasterEggs />

        {/* Interesses Originais */}
        <div className="galeriaGrid">
          {interests.map((item, index) => (
            <div key={index} className="galeriaCard">
              <div className="galeriaCardEmoji">{item.emoji}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <Link className="galeriaNextBtn" to="/playlist">
          Continuar →
        </Link>
      </section>
    </main>
  );
}
