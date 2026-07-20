import "./IntroMessage.css";

export default function IntroMessage({ onContinue }) {

    return (

        <section className="introMessage">

            <div className="introCard">

                <span>
                    Para alguém muito especial!
                </span>

                <h2>
                    Antes de começar...
                </h2>

                <p>
                    Existem pessoas que entram na nossa vida
                    sem fazer muito barulho.
                </p>

                <p>
                    Outras deixam pequenos detalhes
                    espalhados por todos os lugares.
                </p>

                <p>
                    E foi justamente isso que aconteceu.
                    As vezes, a vida nos presenteia com pessoas que, mesmo sem perceber, deixam marcas profundas em nosso coração.
                    ass: Caio
                </p>

                <button
                    className="continueButton"
                    onClick={onContinue}
                >
                    Ler a carta ✉
                </button>

            </div>

        </section>

    );

}
