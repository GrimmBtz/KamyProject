import "./Letter.css";
import { Link } from "react-router-dom";

export default function Letter() {

    return(

        <section className="letterContainer">

            <div className="paper">

                <span className="date">
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
                    uma conversa.
                    uma risada.
                    uma lembrança.
                    as vezes, são apenas pequenos detalhes que nos fazem lembrar de alguém.
                    até mesmo uma jogatina
                </p>

                <p>
                    Aos poucos percebi que muitos desses pequenos
                    detalhes começaram a me lembrar você.
                    cada gosto, cada lembrança, cada risada, cada conversa, cada momento.
                </p>

                <p>
                    Então resolvi guardar todos eles em um lugar especial somente para você.
                </p>

                <p className="signature">

                    Espero que goste, feito com muito carinho e dedicação do Caio.

                </p>

                <Link
                    className="nextButton"
                    to="/favorites"
                >

                    Continuar →

                </Link>

            </div>

        </section>

    )

}