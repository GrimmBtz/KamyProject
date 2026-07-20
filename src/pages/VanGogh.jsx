import "./VanGogh.css";
import Background from "../components/Background/Background";
import Stars from "../components/Stars";
import Moon from "../components/Moon";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Album from "../components/Album/Album";
import { useMemory } from "../hooks/useMemory";
import starryImage from "../assets/vangogh_starry.png";

export default function VanGogh() {
  const [pinceladas, setPinceladas] = useState([]);
  const [vgStars, setVgStars] = useState([]);
  const { collect } = useMemory();

  useEffect(() => {
    const initialStars = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 15 + 10,
      delay: Math.random() * 5
    }));
    setVgStars(initialStars);
  }, []);

  const handleMouseMove = (e) => {
    if (Math.random() > 0.85) {
      const newPincelada = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        color: ["#f1c40f", "#3498db", "#2980b9", "#f39c12"][Math.floor(Math.random() * 4)],
        rotation: Math.random() * 360
      };
      setPinceladas((prev) => [...prev.slice(-15), newPincelada]);
    }
  };

  return (
    <main className="vangoghPage" onMouseMove={handleMouseMove}>
      <Background />
      <Album />
      <Stars />
      <Moon />

      <div className="vangoghOverlay" />

      {/* Pinceladas animadas */}
      {pinceladas.map((p) => (
        <div
          key={p.id}
          className="pincelada"
          style={{
            left: p.x,
            top: p.y,
            backgroundColor: p.color,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`
          }}
        />
      ))}

      {/* Estrelas de Van Gogh */}
      <div className="vanGogh-stars">
        {vgStars.map((s) => (
          <div
            key={s.id}
            className="vg-star"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`
            }}
          />
        ))}
      </div>

      <section className="vangoghContent">
        <span className="vangoghTag">🎨 Capítulo IV - Galeria de Van Gogh</span>
        <h1>Para quem vê o mundo com o coração.</h1>
        <p className="quote">
          "Eu não sei de nada com certeza, mas a visão das estrelas me faz sonhar.
          acho belo tudo o que puder. A maioria das pessoas não acha belo o suficiente, mas eu acho. E é isso que me faz sentir vivo." - Vincent van Gogh
        </p>
        <p>
          Assim como Van Gogh, você tem a capacidade de ver beleza onde outros não veem. A beleza que muito dos dias você não vê, está além da sua linda aparencia, mas o que realmente encanta é a sua essência única de ser.
        </p>

        <div className="painting-container">
          <div className="painting-frame">
            <div className="painting-canvas" onClick={() => collect("vangogh")}>
              <img src={starryImage} className="canvas-img" alt="Starry Night" />
              <div className="sunflowers">
                <div className="sunflower s1">🌻</div>
                <div className="sunflower s2">🌻</div>
                <div className="sunflower s3">🌻</div>
              </div>
              <div className="painting-text">
                <p>Assim como em suas telas, sua presença traz cor e luz para os meus dias.</p>
                <span className="painting-hint">Passe o mouse para pintar... 🎨</span>
              </div>
            </div>
          </div>
        </div>

        <div className="vanGogh-messages">
          <div className="vg-card">
            <p>Cantada de Artista: Nem Van Gogh conseguiria pintar a perfeição que é o seu olhar, o sorriso que dá cores para esse quadro da vida. ✨</p>
          </div>
        </div>

        <Link className="vangoghNextBtn" to="/pets">
          Continuar para os Pequenos Companheiros →
        </Link>
      </section>
    </main>
  );
}
