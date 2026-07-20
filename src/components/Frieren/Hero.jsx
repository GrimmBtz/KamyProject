import "./Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {

    return (

        <section className="hero">

            <span className="smallTitle">
                PARA ALGUÉM MUITO ESPECIAL
            </span>

            <h1>
                Cartas para um Dia Frio
            </h1>

            <p>
                Algumas pessoas deixam pequenos detalhes espalhados
                pelo mundo.
                Você foi uma delas.
            </p>

            <Link
                className="startButton"
                to="/intro"
            >
                Abrir Carta ✉
            </Link>

        </section>

    )

}