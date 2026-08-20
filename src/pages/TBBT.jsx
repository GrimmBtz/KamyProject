import "./TBBT.css";
import { useState, useEffect } from "react";
import Background from "../components/Background/Background";
import Album from "../components/Album/Album";
import { useMemory } from "../hooks/useMemory";
import MysteryNote from "../components/MysteryNote/MysteryNote";
import { Link } from "react-router-dom";

export default function TBBT() {
  const [timelineIndex, setTimelineIndex] = useState(0);
  const [showSoftKitty, setShowSoftKitty] = useState(false);
  const [showAlgorithm, setShowAlgorithm] = useState(false);
  const [comfortIndex, setComfortIndex] = useState(0);
  const [showContract, setShowContract] = useState(false);
  const [signedClauses, setSignedClauses] = useState([]);
  const [quantumIndex, setQuantumIndex] = useState(0);
  const [experimentRunning, setExperimentRunning] = useState(false);
  const [experimentDone, setExperimentDone] = useState(false);
  const [loveIndex, setLoveIndex] = useState(0);
  const [doorClicks, setDoorClicks] = useState(0);
  const [doorOpen, setDoorOpen] = useState(false);
  const [gameChoice, setGameChoice] = useState(null);
  const [gameResult, setGameResult] = useState("");
  const [comfortMode, setComfortMode] = useState(false);
  const { collect } = useMemory();

  const contractClauses = [
    "Toda crise de humor abaixo de 40% dá direito a chocolate, cafuné ou uma mensagem boba.",
    "Nenhuma pessoa precisa explicar o próprio cansaço para merecer cuidado.",
    "Risadas inesperadas serão consideradas evidência de que o universo ainda funciona.",
    "A pessoa Kamy terá acesso vitalício a um lugar seguro para respirar e recomeçar."
  ];

  const quantumFlirts = [
    "Você é a variável que faz qualquer equação deixar de ser apenas cálculo e virar história.",
    "Nosso entrelaçamento é curioso: mesmo quando o dia parece distante, meu carinho continua chegando até você.",
    "Se o universo tem infinitas possibilidades, eu escolheria encontrar você em todas elas.",
    "Não preciso medir sua perfeição: basta observar que meu sorriso aumenta quando você aparece."
  ];

  const loveResults = [
    "Resultado: ainda gosto de você.",
    "Resultado: isso está ficando cientificamente preocupante.",
    "Resultado: Sheldon provavelmente contestaria, mas os dados são convincentes.",
    "Resultado: 99,999999999% de certeza.",
    "Resultado: erro. Você é impossível de calcular."
  ];
  const gameOptions = ["Pedra", "Papel", "Tesoura", "Lagarto", "Spock"];
  const gameIcons = { Pedra: "🪨", Papel: "📄", Tesoura: "✂️", Lagarto: "🦎", Spock: "🖖" };

  const signClause = (index) => {
    setSignedClauses((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
    collect("tbbt");
  };

  const comfortMenu = [
    { title: "Para quando o cérebro estiver fazendo barulho", text: "Pausa científica: coloque os pés no chão, respire devagar e escolha apenas uma coisa pequena para fazer agora." },
    { title: "Para quando faltar energia", text: "Cláusula do conforto: descansar não é falhar. Até estrelas precisam de uma noite escura para aparecer." },
    { title: "Para quando você esquecer quem é", text: "Resultado da pesquisa: você continua sendo curiosa, carinhosa, engraçada e importante — mesmo nos dias em que não consegue sentir isso." },
    { title: "Para um sorriso de emergência", text: "Bazinga particular: você foi oficialmente considerada uma pessoa rara, adorável e cientificamente impossível de substituir." }
  ];

  const nextComfort = () => {
    setComfortIndex((current) => (current + 1) % comfortMenu.length);
  };

  const startExperiment = () => {
    setExperimentRunning(true);
    setExperimentDone(false);
    collect("tbbt");
    window.setTimeout(() => {
      setExperimentRunning(false);
      setExperimentDone(true);
    }, 1800);
  };

  const knockDoor = () => {
    const next = doorClicks + 1;
    setDoorClicks(next);
    if (next >= 3) {
      setDoorOpen(true);
      collect("tbbt");
    }
  };

  const playGame = (choice) => {
    const outcome = [
      "Bazinga. Você venceu a pessoa mais perigosa deste site.",
      "Vitória tecnicamente comprovada. Mas eu deixei você ganhar.",
      "O universo entrou em equilíbrio. Empate quântico."
    ][Math.floor(Math.random() * 3)];
    setGameChoice(choice);
    setGameResult(outcome);
    collect("tbbt");
  };const timeline = [
  {
    year: "No início",
    event: "No início, o universo era denso e quente."
  },
  {
    year: "Há quase 14 bilhões de anos",
    event: "Então, há quase quatorze bilhões de anos, a expansão começou."
  },
  {
    year: "Depois",
    event: "A Terra começou a esfriar."
  },
  {
    year: "Depois",
    event: "Os autótrofos surgiram."
  },
  {
    year: "Depois",
    event: "Neandertais, ferramentas."
  },
  {
    year: "Depois",
    event: "A Muralha da China."
  },
  {
    year: "Depois",
    event: "Matemática, Ciências, História e o mistério."
  },
  {
    year: "E então...",
    event: "Que começou com o Big Bang! 💥"
  },
  {
    year: "Há 97 perguntas",
    event: "O efeito borboleta que trouxe você até aqui. ✨"
  },
  {
    year: "Hoje",
    event: "Você é a minha pessoa favorita em todo o multiverso."
  }
];

useEffect(() => {
  const interval = setInterval(() => {
    setTimelineIndex((prev) => (prev + 1) % timeline.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);
  return (
    <main className="tbbtPage">
      <Background />
      <Album />
      <MysteryNote chapter="tbbt" hint="uma equação saiu do papel" message="Hipótese particular: mesmo quando você não está se sentindo no seu melhor, continua sendo a parte mais rara e interessante deste universo. Resultado: meu carinho por você tende ao infinito." />

      <div className="tbbt-overlay" />

      <section className="tbbtContent">
        <span className="tbbtTag">🔬 Capítulo V — A Teoria do Big Bang</span>
        
        {/* Abertura Dinâmica */}
        <div className="opening-timeline">
          <div className="timeline-year">{timeline[timelineIndex].year}</div>
          <div className="timeline-event">{timeline[timelineIndex].event}</div>
        </div>

        <div className="tbbt-grid">
          {/* O Sofá do Sheldon */}
          <div className="tbbt-card couch-card" onClick={() => collect("tbbt")}>
            <div className="card-icon">🛋️</div>
            <h3>O Lugar do Sheldon</h3>
            <p>"Este é o meu lugar. Em um mundo que gira, este é o ponto 0,0,0."</p>
            <span className="card-hint">Mas para você, eu abriria exceção...</span>
          </div>

          {/* Gatinho Macio */}
<div
  className="tbbt-card kitty-card"
  onClick={() => setShowSoftKitty(!showSoftKitty)}
>
  <div className="card-icon">🐱</div>

  <h3>Gatinho Macio</h3>

  <p>Clique para uma canção de conforto.</p>

  {showSoftKitty && (
    <div className="kitty-lyrics">
      <span className="kitty-adaptation">Gatinho Macio</span>
      <p>Gatinho quentinho</p>
      <p>Bolinha de pelo</p>
      <p>Gatinho feliz</p>
      <p>Gatinho dorminhoco</p>
      <p>Miau, miau, miau 🐱</p>
    </div>
  )}
</div>

          {/* Contrato de Namoro */}
          <div className={`tbbt-card contract-card ${showContract ? "contract-open" : ""}`} onClick={() => { setShowContract((current) => !current); collect("tbbt"); }} role="button" tabIndex={0} onKeyDown={(event) => event.key === "Enter" && setShowContract((current) => !current)}>
            <div className="card-icon">📜</div>
            <h3>Contrato de Conforto</h3>
            <p>Um documento não oficial, mas absolutamente válido no coração.</p>
            <span className="card-hint">Clique para revelar as cláusulas secretas</span>
            {showContract && (
              <div className="contract-reveal" onClick={(event) => event.stopPropagation()}>
                {contractClauses.map((clause, index) => (
                  <button key={clause} className={`contract-clause ${signedClauses.includes(index) ? "signed" : ""}`} type="button" onClick={() => signClause(index)}>
                    <span>{signedClauses.includes(index) ? "✓" : "§"}</span>
                    <small>Cláusula {42 + index}</small>
                    <strong>{clause}</strong>
                  </button>
                ))}
                <span className="contract-status">{signedClauses.length === contractClauses.length ? "Contrato selado com carinho." : `${signedClauses.length}/${contractClauses.length} cláusulas acolhidas`}</span>
              </div>
            )}
          </div>
        </div>

        {/* Algoritmo da Amizade */}
        <section className="friendship-lab">
          <div className="lab-heading">
            <span className="lab-icon">⚛️</span>
            <div>
              <span className="lab-kicker">Laboratório de relações improváveis</span>
              <h2>Algoritmo da Amizade</h2>
            </div>
          </div>
          <p className="lab-intro">Uma análise absolutamente não revisada por pares sobre por que você merece um lugar seguro e muitos motivos para sorrir.</p>
          <button className="lab-button" type="button" onClick={() => { setShowAlgorithm((current) => !current); collect("tbbt"); }}>
            {showAlgorithm ? "Fechar análise" : "Executar algoritmo"}
          </button>
          {showAlgorithm && (
            <div className="algorithm-result">
              <div className="algorithm-equation">Kamy + cuidado + risadas <span>=</span> conforto elevado ao infinito</div>
              <div className="algorithm-bars">
                <div><span>Lealdade</span><b style={{ width: "98%" }} /></div>
                <div><span>Carinho</span><b style={{ width: "100%" }} /></div>
                <div><span>Capacidade de iluminar um ambiente</span><b style={{ width: "97%" }} /></div>
              </div>
              <p>Conclusão: nenhuma teoria explica completamente o quanto você é especial. Mas esta é a nossa hipótese favorita.</p>
            </div>
          )}
        </section>

        {/* Menu de conforto */}
        <section className="comfort-menu">
          <span className="comfort-kicker">Menu secreto do conforto</span>
          <h2>{comfortMenu[comfortIndex].title}</h2>
          <p>{comfortMenu[comfortIndex].text}</p>
          <button className="comfort-button" type="button" onClick={nextComfort}>Abrir outro bilhete</button>
          <span className="comfort-counter">bilhete {comfortIndex + 1} de {comfortMenu.length}</span>
        </section>

        {comfortMode && (
          <div className="comfort-mode-overlay" onClick={() => setComfortMode(false)}>
            <div className="comfort-mode-card" onClick={(event) => event.stopPropagation()}>
              <span className="comfort-mode-kicker">Protocolo de conforto ativado</span>
              <h2>Experimento em modo abraço</h2>
              <div className="comfort-checks"><span>Cobertor ✓</span><span>Friozinho ✓</span><span>Música ✓</span><span>Companhia ✓</span><span>Kamy ✓</span><span>Problemas: temporariamente ignorados</span></div>
              <p>Não é preciso resolver o universo agora. Só ficar aqui por um minuto já conta.</p>
              <button type="button" onClick={() => setComfortMode(false)}>Voltar devagar</button>
            </div>
          </div>
        )}

        {/* Experimento #01 */}
        <section className="experiment-lab">
          <span className="comfort-kicker">Departamento de Estudos Mágico-Científicos</span>
          <h2>Experimento #01</h2>
          <p className="experiment-hypothesis"><strong>Hipótese:</strong> é possível medir cientificamente o quanto eu gosto da Kamy?</p>
          <div className="equation-stream" aria-hidden="true"><span>E = mc²</span><span>F = ma</span><span>∫ carinho dx</span><span>Kamy = ♡</span></div>
          {!experimentDone && <button className="experiment-button" type="button" onClick={startExperiment} disabled={experimentRunning}>{experimentRunning ? "Analisando dados..." : "Iniciar experimento"}</button>}
          {experimentRunning && <div className="experiment-loader"><i /><i /><i /><span>calibrando o medidor de carinho</span></div>}
          {experimentDone && <div className="experiment-result"><strong>Resultado: erro de sistema.</strong><p>A quantidade de carinho excede os limites conhecidos da ciência.</p><span>Conclusão: hipótese considerada verdadeira.</span><button type="button" onClick={startExperiment}>Repetir pesquisa</button></div>}
        </section>

        {/* Cantadas quânticas */}
        <section className="quantum-lab">
          <span className="comfort-kicker">Observatório de cantadas nerds</span>
          <div className="quantum-orbit" aria-hidden="true"><span>e⁻</span><span>♡</span><span>∞</span></div>
          <p className="quantum-line">{quantumFlirts[quantumIndex]}</p>
          <button className="quantum-button" type="button" onClick={() => setQuantumIndex((current) => (current + 1) % quantumFlirts.length)}>Medir outra possibilidade</button>
          <span className="quantum-caption">resultado experimental: 100% de chance de você ser especial</span>
        </section>

        {/* Equação do Amor */}
        <section className="love-equation-lab">
          <span className="comfort-kicker">EQUAÇÃO DO AMOR DA KAMY</span>
          <div className="love-equation"><b>K</b> = carinho <span>+</span> <b>A</b> = admiração <span>+</span> <b>M</b> = momentos <span>+</span> <b>Y</b> = você <strong>→ ∞</strong></div>
          <p>{loveResults[loveIndex]}</p>
          <button type="button" onClick={() => setLoveIndex((current) => (current + 1) % loveResults.length)}>Calcular novamente</button>
        </section>

        {/* Porta do Apartamento 4A */}
        <section className={`sheldon-door ${doorOpen ? "open" : ""}`}>
          <div className="door-plate">Apartamento 4A</div>
          <div className="door-body"><span className="door-knock-label">{doorOpen ? "porta aberta" : "toque três vezes"}</span><button type="button" onClick={knockDoor}>{doorOpen ? "Kamy entrou" : "TOC TOC TOC"}</button>{doorClicks > 0 && !doorOpen && <small>{Array.from({ length: doorClicks }, () => "Kamy?").join(" · ")}</small>}</div>
          {doorOpen && <p className="door-message">Não, não é Penny. É a Kamy. E esta porta sempre pode abrir para um pouco de conforto.</p>}
        </section>

        {/* Mini-game científico */}
        <section className="rpsls-lab">
          <span className="comfort-kicker">Desafio científico</span>
          <h2>Kamy contra Caio</h2>
          <p>Escolha uma opção e teste o equilíbrio do universo.</p>
          <div className="rpsls-options">{gameOptions.map((option) => <button key={option} type="button" onClick={() => playGame(option)} className={gameChoice === option ? "chosen" : ""}>{gameIcons[option]}<small>{option}</small></button>)}</div>
          {gameResult && <p className="game-result">{gameResult}</p>}
        </section>

        <button className="comfort-mode-button" type="button" onClick={() => setComfortMode(true)}>Ativar modo conforto</button>

        <div className="tbbt-messages">
          <div className="message-bubble">
            "Você é o meu Bazinga em um mundo de teorias chatas." ❤️
          </div>
          <div className="message-bubble">
            "Se fôssemos partículas, estaríamos em entrelaçamento quântico: o que acontece com você, acontece comigo." ⚛️
          </div>
        </div>

        <Link className="tbbtNextBtn" to="/galeria">
          Seguir para nossa galeria →
        </Link>
      </section>
    </main>
  );
}
