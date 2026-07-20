import "./Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="homeHero">

      <span className="smallTitle">
        Para alguém muito especial
      </span>

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

    </section>
  );
}
