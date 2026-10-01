import "./SintoniaNerd.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background/Background";
import Album from "../components/Album/Album";
import MysteryNote from "../components/MysteryNote/MysteryNote";
import { useMemory } from "../hooks/useMemory";

const nerdFlirts = [
  "Se eu fosse uma equação, você seria a variável que faz tudo finalmente fazer sentido.",
  "Meu coração não precisa de mapa: ele sempre encontra o caminho até você.",
  "Entre todos os universos possíveis, eu escolheria aquele em que posso fazer você sorrir.",
  "Você não é uma hipótese: é a conclusão mais bonita a que eu já cheguei.",
  "Se carinho fosse uma matéria em Hogwarts, você seria a professora mais querida de todas.",
  "A gravidade explica muita coisa, mas não explica por que eu sempre caio no seu encanto."
];

const comfortNotes = [
  "Hoje a missão é pequena: respirar, beber água e lembrar que você não precisa dar conta de tudo ao mesmo tempo.",
  "O laboratório confirmou: seu valor não diminui nos dias em que sua energia está baixa.",
  "A Lufa-Lufa deixaria um lugar preparado para você descansar. Este capítulo também.",
  "Resultado provisório: ainda existem muitas coisas bonitas esperando por você, sem pressa."
];

export default function SintoniaNerd() {
  const [activeWorld, setActiveWorld] = useState(null);
  const [doorClicks, setDoorClicks] = useState(0);
  const [doorOpen, setDoorOpen] = useState(false);
  const [flirtIndex, setFlirtIndex] = useState(0);
  const [comfortIndex, setComfortIndex] = useState(0);
  const [secretFound, setSecretFound] = useState(false);
  const { collect } = useMemory();

  const openWorld = (world) => {
    setActiveWorld(world);
    collect("sintonia");
  };

  const knock = () => {
    const next = doorClicks + 1;
    setDoorClicks(next);
    if (next >= 3) {
      setDoorOpen(true);
      collect("sintonia");
    }
  };

  return (
    <main className="sintoniaPage">
      <Background />
      <Album />
      <MysteryNote
        chapter="sintonia"
        hint="há uma frequência escondida"
        message="A sintonia mais rara não é gostar das mesmas coisas. É encontrar alguém que faz o mundo parecer um pouco mais gentil."
      />

      <section className="sintoniaContent">
        <span className="sintoniaTag">Capítulo extra · arquivo de carinho</span>
        <h1>Sintonia Nerd</h1>
        <p className="sintoniaLead">Dois universos favoritos, uma coleção de referências e um cantinho reservado para fazer você sorrir.</p>

        <div className="sintoniaConstellation" aria-hidden="true">
          <span>✦</span><span>·</span><span>✧</span><span>·</span><span>✦</span>
        </div>

        <div className="worldGrid">
          <button className={`worldCard wizardWorld ${activeWorld === "wizard" ? "worldActive" : ""}`} type="button" onClick={() => openWorld("wizard")}>
            <span className="worldMark">✦</span>
            <span className="worldKicker">Arquivo mágico</span>
            <strong>Harry Potter</strong>
            <small>Lufa-Lufa, Patronos, cartas e coragem gentil.</small>
          </button>
          <button className={`worldCard scienceWorld ${activeWorld === "science" ? "worldActive" : ""}`} type="button" onClick={() => openWorld("science")}>
            <span className="worldMark">∿</span>
            <span className="worldKicker">Arquivo científico</span>
            <strong>The Big Bang Theory</strong>
            <small>Equações, sofá, amizade e um pouco de caos carinhoso.</small>
          </button>
        </div>

        {activeWorld && (
          <article className={`worldReveal ${activeWorld}`}>
            {activeWorld === "wizard" ? (
              <>
                <span className="revealKicker">Registro da Casa Kamy</span>
                <h2>O coração escolheu Lufa-Lufa.</h2>
                <p>Não por falta de aventura, mas porque gentileza, lealdade e cuidado também são formas de magia. Este arquivo reconhece oficialmente sua capacidade de fazer qualquer lugar parecer casa.</p>
                <div className="revealTokens"><span>Patrono: esperança</span><span>Feitiço: acolhimento</span><span>Objeto: uma carta que chega no dia certo</span></div>
              </>
            ) : (
              <>
                <span className="revealKicker">Relatório do laboratório 4A</span>
                <h2>Hipótese: você melhora qualquer universo.</h2>
                <p>Foram observadas risadas, curiosidade, referências aleatórias e uma capacidade estatisticamente improvável de transformar um dia comum em memória boa.</p>
                <div className="revealTokens"><span>Constante: carinho</span><span>Unidade: um sorriso</span><span>Resultado: Bazinga particular</span></div>
              </>
            )}
          </article>
        )}

        <section className="secretDoorPanel">
          <div className={`apartmentDoor ${doorOpen ? "doorIsOpen" : ""}`}>
            <span className="doorNumber">4A</span>
            <span className="doorLabel">uma porta que só abre para quem tem curiosidade</span>
            <button type="button" onClick={knock}>{doorOpen ? "Entrar no conforto" : "Bater três vezes"}</button>
            {doorClicks > 0 && !doorOpen && <small>{Array.from({ length: doorClicks }, () => "toc").join(" · ")}</small>}
          </div>
          {doorOpen && <p className="doorReveal">A porta abriu. Não há problema para resolver aqui — só um sofá imaginário, uma conversa tranquila e a autorização oficial para descansar.</p>}
        </section>

        <section className="cantadaPanel">
          <span className="revealKicker">Central de cantadas nerds</span>
          <h2>Uma hipótese carinhosa por vez</h2>
          <p className="cantadaText">{nerdFlirts[flirtIndex]}</p>
          <button type="button" onClick={() => { setFlirtIndex((current) => (current + 1) % nerdFlirts.length); collect("sintonia"); }}>Testar outra hipótese</button>
          <span className="cantadaCounter">hipótese {flirtIndex + 1} de {nerdFlirts.length}</span>
        </section>

        <section className="comfortDecoder">
          <span className="revealKicker">Decodificador de dias difíceis</span>
          <h2>Mensagem encontrada</h2>
          <p>{comfortNotes[comfortIndex]}</p>
          <button type="button" onClick={() => setComfortIndex((current) => (current + 1) % comfortNotes.length)}>Encontrar outra mensagem</button>
        </section>

        <button className={`hiddenSignal ${secretFound ? "signalFound" : ""}`} type="button" onClick={() => { setSecretFound(true); collect("sintonia"); }} aria-label="Sinal secreto">{secretFound ? "Sinal decodificado" : "..."}</button>
        {secretFound && <p className="hiddenSignalMessage">Você encontrou o sinal secreto: mesmo nos dias sem energia, ainda existe um universo inteiro torcendo por você.</p>}

        <Link className="sintoniaNextBtn" to="/final">Levar esta sintonia para o final →</Link>
      </section>
    </main>
  );
}
