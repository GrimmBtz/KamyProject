import "./Harry.css";
import Background from "../components/Background/Background";
import { Link } from "react-router-dom";
import { useState } from "react";
import Album from "../components/Album/Album";
import { useMemory } from "../hooks/useMemory";
import MysteryNote from "../components/MysteryNote/MysteryNote";

export default function Harry() {
  const [message, setMessage] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showPatronus, setShowPatronus] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const [showPensieve, setShowPensieve] = useState(false);
  const [showMirror, setShowMirror] = useState(false);
  const [selectorChoice, setSelectorChoice] = useState(null);
  const [showSpellbook, setShowSpellbook] = useState(false);
  const [activeSpell, setActiveSpell] = useState(null);
  const [lumos, setLumos] = useState(false);
  const [pensieveMemory, setPensieveMemory] = useState(0);
  const { collect } = useMemory();

  const pensieveMemories = [
    "Uma lembrança feliz: você não precisa resolver tudo hoje. Respire. O próximo passo pode ser pequeno.",
    "Outra lembrança: seu jeito cuidadoso transforma lugares comuns em lugares seguros.",
    "Segredo da Penseira: dias difíceis passam; sua gentileza, sua criatividade e sua coragem continuam.",
    "Memória guardada para sempre: existe um cantinho neste universo onde você pode descansar sem precisar fingir que está tudo bem."
  ];

  const selectorOptions = ["um dia frio", "um dia ensolarado", "uma noite estrelada", "uma noite aconchegante"];
  const spells = [
    { name: "Lumos", effect: "Acende uma pequena luz nas partes do dia que ficaram escuras." },
    { name: "Accio Kamy", effect: "Puxa para perto tudo que lembra aconchego, cuidado e um sorriso seu." },
    { name: "Alohomora", effect: "Abre portas que pareciam fechadas e revela uma carta feita especialmente para você." },
    { name: "Kamyus Adorabilis", effect: "Resultado: a pessoa que lançou o feitiço esquece como agir normalmente perto de você." },
    { name: "Risos Infinitum", effect: "Resultado: sua risada aparece na fórmula e o responsável fica feliz automaticamente." }
  ];

  const openSelector = () => {
    setShowSelector(true);
    collect("harry");
  };

  const openPensieve = () => {
    setPensieveMemory((current) => (current + 1) % pensieveMemories.length);
    setShowPensieve(true);
  };

  const openMirror = () => {
    setShowMirror(true);
    collect("harry");
  };

  const chooseHousePath = (choice) => {
    setSelectorChoice(choice);
    collect("harry");
  };

  const castSpell = (spell) => {
    setActiveSpell(spell);
    collect("harry");
    if (spell.name === "Lumos") setLumos(true);
    if (spell.name === "Alohomora") setShowLetter(true);
    if (spell.name === "Accio Kamy") handleInteraction("Accio! Tudo que é aconchegante encontrou o caminho até você.");
    if (spell.name === "Kamyus Adorabilis") handleInteraction("Feitiço concluído: o sistema perdeu a compostura ao detectar você.");
    if (spell.name === "Risos Infinitum") handleInteraction("Risos Infinitum: seu sorriso foi identificado como a magia mais poderosa daqui.");
  };
  const candles = [...Array(15)];
  const particles = [...Array(40)];

  const handleInteraction = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 5000);
  };

  const castPatronus = () => {
    setShowPatronus(true);
    handleInteraction("Expecto Patronum! ✨ Que sua luz afaste qualquer tristeza.");
    setTimeout(() => setShowPatronus(false), 8000);
  };

  return (
    <main className={`harryPage ${showPatronus ? "patronus-active" : ""} ${lumos ? "lumos-on" : ""}`}>
      <Background />
      <Album />
      <MysteryNote chapter="harry" hint="uma coruja deixou algo" message="Se o dia estiver pesado, não precisa atravessá-lo de uma vez. Acenda uma luz pequena, descanse um pouco e lembre: você não está sozinha neste cantinho do universo." />
      
      {/* Castelo de Hogwarts ao fundo */}
      <div className="hogwarts-castle" />

      {/* Coruja voando */}
      <div className="owl-fly" onClick={() => setShowLetter(true)} />

      {/* Patrono da Esperança */}
      <div className="patronus-trigger" onClick={castPatronus}>🪄</div>
      {showPatronus && (
        <div className="patronus-spirit">
          <div className="patronus-light" />
          <div className="patronus-message">
            "A felicidade pode ser encontrada, mesmo nos tempos mais sombrios, se alguém se lembrar de acender a luz." 🦌✨
          </div>
        </div>
      )}

      {/* Pequenos artefatos para explorar */}
      <div className="harry-artifacts" aria-label="Artefatos mágicos interativos">
        <button className="artifact-button" onClick={openSelector} type="button">
          🎩 <span>Chapéu Seletor</span>
        </button>
        <button className={`artifact-button ${lumos ? "active" : ""}`} onClick={() => setLumos((current) => !current)} type="button">
          ✨ <span>{lumos ? "Nox" : "Lumos"}</span>
        </button>
        <button className="artifact-button" onClick={openPensieve} type="button">
          🫧 <span>Penseira</span>
        </button>
        <button className="artifact-button" onClick={openMirror} type="button">
          🪞 <span>Espelho</span>
        </button>
        <button className="artifact-button" onClick={() => setShowSpellbook(true)} type="button">
          📚 <span>Feitiços</span>
        </button>
      </div>

      {showSelector && (
        <div className="selector-overlay" onClick={() => setShowSelector(false)}>
          <div className="selector-card" onClick={(event) => event.stopPropagation()}>
            <div className="selector-game">
              <span className="selector-game-kicker">Uma pergunta antes da cerimônia</span>
              <p>Qual destes pequenos universos você escolheria para descansar?</p>
              <div className="selector-options">
                {selectorOptions.map((option) => (
                  <button key={option} type="button" className={selectorChoice === option ? "selected" : ""} onClick={() => chooseHousePath(option)}>{option}</button>
                ))}
              </div>
              {selectorChoice && <p className="selector-analysis">O Chapéu Seletor analisou: {selectorChoice}. Detectados inteligência, ternura e um nível admirável de caos.</p>}
            </div>
            <div className="selector-hat">🎩</div>
            <span className="selector-whisper">Hmm... curiosidade, cuidado e um coração enorme...</span>
            <h2>LUFA-LUFA</h2>
            <p>
              A casa que reconhece quem escolhe permanecer gentil, leal e presente — mesmo quando o dia pesa.
            </p>
            <p className="selector-note">Seu lugar não é definido por uma parede. É definido pelo que você faz o mundo sentir.</p>
            <button className="close-letter" onClick={() => setShowSelector(false)} type="button">Guardar esta escolha</button>
          </div>
        </div>
      )}

      {showSpellbook && (
        <div className="spellbook-overlay" onClick={() => setShowSpellbook(false)}>
          <div className="spellbook-card" onClick={(event) => event.stopPropagation()}>
            <div className="spellbook-cover">✦</div>
            <span className="spellbook-label">Livro de Feitiços — edição exclusiva</span>
            <h2>Feitiços que eu usaria em você</h2>
            <div className="spell-list">
              {spells.map((spell) => (
                <button key={spell.name} type="button" className={activeSpell?.name === spell.name ? "active" : ""} onClick={() => castSpell(spell)}>
                  <strong>{spell.name}</strong><span>{spell.effect}</span>
                </button>
              ))}
            </div>
            {activeSpell && <p className="spell-result">{activeSpell.name} concluído: {activeSpell.effect}</p>}
            <button className="close-letter" type="button" onClick={() => setShowSpellbook(false)}>Fechar o grimório</button>
          </div>
        </div>
      )}

      {showPensieve && (
        <div className="pensieve-overlay" onClick={() => setShowPensieve(false)}>
          <div className="pensieve-card" onClick={(event) => event.stopPropagation()}>
            <div className="pensieve-symbol">🫧</div>
            <span className="pensieve-label">Penseira de lembranças gentis</span>
            <p>{pensieveMemories[pensieveMemory]}</p>
            <div className="pensieve-ripples" aria-hidden="true"><i /><i /><i /></div>
            <div className="pensieve-actions">
              <button type="button" onClick={openPensieve}>Encontrar outra lembrança</button>
              <button type="button" onClick={() => setShowPensieve(false)}>Voltar ao castelo</button>
            </div>
          </div>
        </div>
      )}

      {showMirror && (
        <div className="mirror-overlay" onClick={() => setShowMirror(false)}>
          <div className="mirror-card" onClick={(event) => event.stopPropagation()}>
            <div className="mirror-frame">
              <div className="mirror-glass">
                <span className="mirror-stars">✦　·　✧　·　✦</span>
                <span className="mirror-silhouette">K</span>
                <span className="mirror-reflection">A pessoa que você procura já está aí.</span>
              </div>
            </div>
            <span className="mirror-label">Espelho de desejos gentis</span>
            <h2>Você é o encanto.</h2>
            <p>
              Este espelho não mostra um destino distante. Ele devolve aquilo que às vezes o cansaço esconde: sua ternura, sua inteligência e a forma bonita como você torna o mundo mais habitável.
            </p>
            <p className="mirror-flirt">Cantada aprovada pelo Departamento de Mistérios: se beleza fosse feitiço, você seria a magia que mantém este universo aceso.</p>
            <button className="close-letter" onClick={() => setShowMirror(false)} type="button">Guardar este segredo</button>
          </div>
        </div>
      )}

      {/* Carta de Hogwarts */}
      {showLetter && (
        <div className="hufflepuff-letter-overlay" onClick={() => setShowLetter(false)}>
          <div className="hufflepuff-letter" onClick={(e) => e.stopPropagation()}>
            <div className="letter-header">
              <span className="crest">🦡</span>
              <h3>Escola de Magia e Bruxaria de Hogwarts</h3>
            </div>
            <div className="letter-body">
              <p>Prezada Kamilly,</p>
              <p>
                Temos o prazer de informar que sua curiosidade, criatividade e coragem 
                já eram mágicas muito antes desta carta existir.
              </p>
              <p>
                Sua lealdade e dedicação brilham com as cores da <strong>Lufa-Lufa</strong>. 
                O mundo precisa de mais corações gentis como o seu.
              </p>
              <p>Com carinho,</p>
              <p className="signature">Minerva McGonagall</p>
            </div>
            <button className="close-letter" onClick={() => setShowLetter(false)}>Fechar Carta</button>
          </div>
        </div>
      )}

      {/* Partículas douradas */}
      <div className="harryParticles">
        {particles.map((_, i) => (
          <span
            key={i}
            className="harryParticle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Velas flutuantes */}
      <div className="harryCandles">
        {candles.map((_, i) => (
          <div
            key={i}
            className="harryCandle"
            style={{
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          >
            <div className="harryCandleFlame" />
          </div>
        ))}
      </div>

      {/* Mapa do Maroto */}
      <div className={`marauders-map ${showMap ? "active" : ""}`} onClick={() => { setShowMap(!showMap); collect("harry"); }}>
        <div className="map-icon">🗺️</div>
        {showMap && (
          <div className="map-content">
            <div className="footsteps">👣</div>
            <p>"Eu juro solenemente não fazer nada de bom... a não ser te amar." ✨</p>
          </div>
        )}
      </div>

      {message && (
        <div className="harry-toast">
          <p>{message}</p>
        </div>
      )}

      <div className="harryOverlay" />

      <section className="harryContent">
        <span className="harryTag">⚡ Capítulo II - Hogwarts</span>
        <h1>
          Há magia em cada
          <br />
          detalhe que você guarda, e você é a magia que deixa tudo mais especial nesse site para você, Kamy. ✨
        </h1>
        <div className="harry-text-scroll">
          <p>
            Dizem que a magia existe para aqueles que sabem onde procurar.
            No começo eu achava que ela morava apenas em castelos antigos, varinhas e feitiços.
            Mas descobri que ela também aparece em conversas, risadas, pequenas lembranças e pessoas que tornam dias comuns um pouco mais especiais.
          </p>
          <p>
            "Depois de todo esse tempo?" - "Sempre." 🦌
            <br />
            Você transformou dias comuns em pequenos encantamentos, risadas além de calls que não vou esquecer, tipo 97 perguntas que foi o efeito borboleta de tudo isso.
          </p>
        </div>
        <Link className="harryNextBtn" to="/vangogh">
          Seguir para a Galeria de Van Gogh →
        </Link>
      </section>
    </main>
  );
}
