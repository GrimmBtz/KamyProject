import { useState } from "react";
import { Link } from "react-router-dom";

import "./Carta.css";
import Background from "../components/Background/Background";

export default function Carta() {

    const [aberta, setAberta] = useState(false);

    return (

        <main className="cartaPage">

            <Background />

            <section className="cartaCena">

                {/* CARTA */}

                <div className={`cartaPapel ${aberta ? "aberta" : ""}`}>

                    <span className="cartaPapel__data">
                        Para alguém muito especial
                    </span>

                    <h2>
                        Antes de começar...
                    </h2>

                    <p>
                        Existem pessoas que passam pela nossa vida
                        como um vento qualquer.
                    </p>

                    <p>
                        Outras deixam pequenas marcas espalhadas
                        pelos lugares mais improváveis.
                    </p>

                    <p>
                        Um quadro.
                        Um livro.
                        Uma música.
                        Uma noite fria.
                    </p>

                    <p>
                        Aos poucos percebi que muitos desses pequenos
                        detalhes começaram a me lembrar você.
                    </p>

                    <p>
                        Então resolvi guardar todos eles em um lugar.
                    </p>

                    <p className="cartaPapel__assinatura">
                        Espero que goste. ✦
                    </p>

                    <Link
                        to="/favoritos"
                        className="cartaPapel__botao"
                    >
                        Continuar →
                    </Link>

                </div>

                {/* ENVELOPE */}

                <div

                    className={`envelope ${aberta ? "envelope--aberto" : ""}`}

                    onClick={() => setAberta(true)}

                >

                    <div className="envelope__aba"></div>

                    <div className="envelope__frente">

                        <div className="envelope__lacre"></div>

                    </div>

                </div>

                {!aberta && (

                    <p className="cartaDica">

                        Clique no envelope para abrir

                    </p>

                )}

            </section>

        </main>

    );

}