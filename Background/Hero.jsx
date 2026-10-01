import "./Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="homeHero">

      <span className="smallTitle">
        Para alguém muito especial
      </span>

      <span className="homeUniverseSeal">MAGIA <b>+</b> CIÊNCIA <b>+</b> MEMÓRIAS</span>

      <h1>
        Cartas para um Dia Frio
      </h1>

      <p>
        Algumas pessoas deixam pequenos detalhes
        espalhados pelo mundo.
        Você foi uma delas.
      </p>

      <button
        className="openButton"
        onClick={() => navigate("/carta")}
      >
        Abrir a primeira carta ✉
      </button>

      <button
        className="birthdayButton"
        onClick={() => navigate("/aniversario")}
      >
        ✦ Capítulo especial: aniversário da Kamilly
      </button>

      <span className="homeMenuHint">ou continue a jornada para visitar as outras histórias</span>

      <nav className="storyMenu" aria-label="Escolher uma história">
        <button type="button" onClick={() => navigate("/harry")}>⚡ Hogwarts</button>
        <button type="button" onClick={() => navigate("/tbbt")}>🔬 TBBT</button>
        <button type="button" onClick={() => navigate("/frieren")}>🌸 Frieren</button>
        <button type="button" onClick={() => navigate("/pets")}>🐾 Pets</button>
      </nav>

    </section>
  );
}
