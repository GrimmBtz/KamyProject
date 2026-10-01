import "./Aniversario.css";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  { text: "Você encontra um animal enorme que parece assustado. O que faz?", options: ["Observo primeiro", "Tento ganhar confiança", "Mantenho distância e estudo", "Oiê, quem é o neném?"] },
  { text: "Uma noite fria. O que combina mais com você?", options: ["Cobertor e chocolate", "Uma aventura inesperada", "Um livro e café", "Um campo cheio de animais"] },
  { text: "Que qualidade deve acompanhar seu novo ano?", options: ["Coragem", "Curiosidade", "Lealdade", "Liberdade"] },
  { text: "Você recebe um dia totalmente livre. O que escolheria?", options: ["Explorar um lugar novo", "Cuidar de um bichinho", "Assistir uma série", "Guardar uma lembrança"] },
];

const creatures = [
  { icon: "🦄", name: "Unicórnio", text: "Criatura extremamente rara. Parece confiar em você." },
  { icon: "🦅", name: "Hipogrifo", text: "Uma reverência perfeita. Você acaba de ganhar respeito." },
  { icon: "🐉", name: "Dragão", text: "Missão cancelada. Talvez começar pelos animais menores fosse uma ideia melhor." },
];

const bestiaryCreatures = [
  { icon: "🐎", name: "Cavalo", text: "Força não significa ausência de delicadeza." },
  { icon: "🐘", name: "Elefante", text: "Algumas presenças ocupam espaço. Outras deixam memória." },
  { icon: "🦒", name: "Girafa", text: "Nem tudo precisa ser visto de perto para ser admirado." },
  { icon: "🦁", name: "Leão", text: "Coragem também pode ser tranquila." },
];

const pets = ["🐈", "🐕", "🐴", "🦉", "🦄"];
export default function Aniversario() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState({});
  const [house, setHouse] = useState(null);
  const [creature, setCreature] = useState(null);
  const [foundBestiary, setFoundBestiary] = useState([]);
  const [couchClicks, setCouchClicks] = useState(0);
  const [experiment, setExperiment] = useState(false);
  const [softKitty, setSoftKitty] = useState(false);
  const [relationship, setRelationship] = useState(null);
  const [museumRoom, setMuseumRoom] = useState(0);
  const [foundGifts, setFoundGifts] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [finalTheory, setFinalTheory] = useState(false);
  const [secretOpen, setSecretOpen] = useState(false);
  const [secretInput, setSecretInput] = useState("");

  useEffect(() => {
    const move = (event) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const houseResult = useMemo(() => {
    if (!house) return null;
    const result = [
      { name: "Lufa-Lufa", crest: "🦡", text: "lealdade, cuidado e um coração que faz qualquer lugar parecer casa." },
      { name: "Corvinal", crest: "🦅", text: "curiosidade, inteligência e perguntas que deixam o universo mais interessante." },
      { name: "Grifinória", crest: "🦁", text: "coragem, presença e a força de continuar brilhando." },
      { name: "Sonserina", crest: "🐍", text: "determinação, personalidade e vontade de viver coisas inesquecíveis." },
    ];
    return result[house % result.length];
  }, [house]);

  const chooseAnswer = (optionIndex) => {
    setScores((current) => ({ ...current, [optionIndex]: (current[optionIndex] || 0) + 1 }));
    if (questionIndex === questions.length - 1) {
      const values = { ...scores, [optionIndex]: (scores[optionIndex] || 0) + 1 };
      const winner = Number(Object.entries(values).sort((a, b) => b[1] - a[1])[0]?.[0] || 1);
      setHouse(winner);
    }
    setQuestionIndex((current) => Math.min(current + 1, questions.length));
  };

  const collectGift = (gift) => setFoundGifts((current) => current.includes(gift) ? current : [...current, gift]);
  const toggleBestiary = (name) => setFoundBestiary((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  const goToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="birthdayPage" onDoubleClick={() => collectGift("segredo")}>
      {selectedPet && <div className="birthdayCompanion" style={{ left: `${cursor.x + 16}px`, top: `${cursor.y + 16}px` }}>{selectedPet}</div>}
      <div className="birthdayStars" aria-hidden="true">✦ · ✧ · ✦ · ✧ · ✦</div>
      <div className="birthdayGlow birthdayGlowOne" aria-hidden="true" />
      <div className="birthdayGlow birthdayGlowTwo" aria-hidden="true" />

      <header className="birthdayHeader">
        <Link className="birthdayBack" to="/home">← voltar à jornada</Link>
        <span className="birthdayChapter">CAPÍTULO EXTRA · O DIA DELA</span>
        <span className="giftCounter">🎁 {foundGifts.length}/5</span>
      </header>

      <nav className="chapterMap" aria-label="Mapa do capítulo">
        <button type="button" onClick={() => goToSection("hogwarts")}>⚡ Hogwarts</button><button type="button" onClick={() => goToSection("bestiario")}>🐾 Campo</button><button type="button" onClick={() => goToSection("laboratorio")}>🔬 Laboratório</button><button type="button" onClick={() => goToSection("museu")}>🖼 Museu</button><button type="button" onClick={() => goToSection("final")}>✦ ???</button>
      </nav>

      <section className="birthdayHero">
        <span className="birthdayEyebrow">uma nova história foi desbloqueada</span>
        <h1>O dia em que<br /><em>o universo</em> foi feito para Kamilly</h1>
        <p>Algumas histórias são sobre lugares. Outras são sobre aventuras. Esta é sobre uma pessoa. E, por algum motivo, o universo decidiu fazer aniversário junto com ela.</p>
        <button className="birthdayPrimary" type="button" onClick={() => goToSection("hogwarts")}>Abrir o capítulo ✦</button>
        <div className="birthdayScrollHint">desça para explorar <span>↓</span></div>
      </section>

      <section id="hogwarts" className="birthdaySection letterSection">
        <div className="sectionKicker">01 · uma correspondência muito importante</div>
        <h2>A carta de Hogwarts, feita especialmente para ela.</h2>
        <div className={`birthdayEnvelope ${letterOpen ? "is-open" : ""}`}>
          <div className="envelopeFlap">✦</div><div className="envelopeBody"><span>H</span><small>HOGWARTS</small></div>
          <button type="button" onClick={() => { setLetterOpen(true); collectGift("carta"); }}>{letterOpen ? "carta aberta" : "abrir carta"}</button>
        </div>
        {letterOpen && <article className="hogwartsLetter"><div className="letterSeal">✦</div><span>Escola de Magia e Bruxaria</span><h3>Srta. Kamilly,</h3><p>Depois de uma análise cuidadosa de seus registros, descobrimos uma peculiaridade bastante rara em seu perfil.</p><p>Você apresenta afinidade extraordinária com criaturas. Tanto mágicas quanto aquelas grandes o suficiente para assustar qualquer pessoa normal.</p><p>Por isso, sua presença foi solicitada no Departamento de Trato das Criaturas Mágicas.</p><strong>Com carinho,<br />a direção deste pequeno universo</strong></article>}
      </section>

      <section className="birthdaySection selectorSection">
        <div className="sectionKicker">02 · o chapéu já estava esperando</div>
        <h2>Descobrindo quem é a Kamilly.</h2>
        {questionIndex < questions.length ? <div className="selectorBox"><span className="selectorHat">🎩</span><p>{questions[questionIndex].text}</p><div className="selectorChoices">{questions[questionIndex].options.map((option, index) => <button key={option} type="button" onClick={() => chooseAnswer(index)}>{String.fromCharCode(65 + index)}) {option}</button>)}</div><small>pergunta {questionIndex + 1} de {questions.length}</small></div> : <div className="houseResult"><span className="resultCrest">{houseResult?.crest || "🦡"}</span><span>O chapéu está em dúvida. Você apresenta características demais para uma única casa.</span><h3>{houseResult?.name || "Lufa-Lufa"}</h3><p>{houseResult?.text || "lealdade, cuidado e um coração que faz qualquer lugar parecer casa."}</p><button type="button" onClick={() => { setQuestionIndex(0); setScores({}); setHouse(null); }}>consultar novamente</button></div>}
      </section>

      <section className="birthdaySection creaturesSection">
        <div className="sectionKicker">03 · aula de trato das criaturas mágicas</div>
        <h2>Professor Hagrid · Aluna Kamilly</h2><p className="sectionIntro">Status: apta para trabalho de campo. Clique nas criaturas para descobrir o resultado da missão.</p>
        <div className="creatureGrid">{creatures.map((item) => <button key={item.name} type="button" className={`creatureCard ${creature?.name === item.name ? "selected" : ""}`} onClick={() => { setCreature(item); collectGift("lembrança"); }}><span>{item.icon}</span><strong>{item.name}</strong><small>tocar para aproximar</small></button>)}</div>
        {creature && <div className={`creatureResult ${creature.name === "Dragão" ? "danger" : ""}`}><span>{creature.icon}</span><p>{creature.text}</p></div>}
      </section>

      <section id="bestiario" className="birthdaySection bestiarySection">
        <div className="sectionKicker">04 · arquivo de campo</div><h2>O Bestiário da Kamilly.</h2><p className="sectionIntro">Algumas criaturas são mágicas. Outras são reais. Todas dizem alguma coisa sobre você.</p>
        <div className="bestiaryBook"><div className="bookTitle">BESTIÁRIO<br /><small>KAMILLY</small></div><div className="bestiaryGrid">{bestiaryCreatures.map((item) => <button key={item.name} type="button" className={foundBestiary.includes(item.name) ? "found" : ""} onClick={() => toggleBestiary(item.name)}><span>{item.icon}</span><strong>{item.name}</strong><small>{foundBestiary.includes(item.name) ? item.text : "□ descobrir"}</small></button>)}</div><p className="rareCreature">Criatura mais rara encontrada: <strong>Kamilly</strong><br /><small>Habitat: onde existem animais, livros, frio e histórias. é só para rir, eu não necessariamente te chamei de animal, mas somos todos animais racionais, ok? kkkkk</small></p></div>
      </section>

      <section id="laboratorio" className="birthdaySection theorySection">
        <div className="sectionKicker">05 · transição dimensional autorizada</div><div className="theoryHeading"><span>∑</span><div><h2>The Kam<strong>illy</strong> Theory</h2><p>Bem-vinda ao apartamento 4A do universo.</p></div></div>
        <div className="apartmentRoom"><div className="whiteboard"><span>THE KAMILLY THEORY</span><b>K + A² = FELICIDADE</b><small>ANIMAIS ↑<br />FRIO ↑<br />HARRY POTTER ↑<br />TBBT ↑</small><strong>RESULTADO: ∞</strong></div><div className="couch"><button type="button" onClick={() => { const next = couchClicks + 1; setCouchClicks(next); if (next >= 3) collectGift("carinho"); }}>{couchClicks >= 3 ? "Kamilly pode sentar aqui" : "Este lugar está ocupado"}</button><span>🛋️</span></div><button className="elevator" type="button" onClick={() => setCouchClicks((current) => current + 1)}>🚪 elevador<br /><small>fora de serviço</small></button><button className="kitty" type="button" onClick={() => setSoftKitty(true)}>🐱</button></div>
        {couchClicks > 0 && couchClicks < 3 && <p className="eggText">Você realmente achou que eu deixaria você subir quatro andares? (toque mais uma vez)</p>}
        {softKitty && <div className="comfortProtocol"><strong>PROTOCOLO DE CONFORTO ATIVADO</strong><p>Diagnóstico: Kamilly precisa de um dia bonito.</p><p>Tratamento: carinho + comida + cobertor + nenhum problema por aproximadamente 24 horas.</p><button type="button" onClick={() => setSoftKitty(false)}>fechar com cuidado</button></div>}
        <div className="experiment"><span>EXPERIÊNCIA Nº 001</span><h3>Podemos calcular o quanto você é especial?</h3><button type="button" onClick={() => { setExperiment(true); collectGift("foto"); }}>{experiment ? "experimento concluído" : "iniciar experimento"}</button>{experiment && <div className="experimentResult"><p>Animais amados: ██████████</p><p>Uma Coisa que ama/Gosta de fazer: ██████████</p><p>Nível Harry Potter: ██████████</p><p>Nível TBBT: ██████████</p><p>Nível lindeza: <b>ERROR</b></p><p>Nível De Quanto a Kamilly é Especial: <b>ERROR Fatal!</b></p><strong>ERRO CRÍTICO</strong><small>O sistema não possui unidade de medida compatível.</small><b>BAZINGA.</b></div>}</div>
      </section>

      <section className="birthdaySection relationshipSection"><div className="sectionKicker">06 · quadro de relacionamentos do universo</div><h2>As variáveis que fazem tudo funcionar.</h2><div className="relationshipBoard"><button type="button" onClick={() => setRelationship("animais")}>🐾 ANIMAIS</button><button type="button" onClick={() => setRelationship("livros")}>📚 LIVROS</button><button type="button" onClick={() => setRelationship("harry")}>⚡ HARRY POTTER</button><button type="button" onClick={() => setRelationship("voce")}>♡ VOCÊ</button></div>{relationship && <div className="relationshipMessage">{relationship === "animais" && "Você encontra vida em coisas que outras pessoas nem sempre percebem."}{relationship === "livros" && "Você gosta de histórias porque sabe que cada uma guarda um mundo."}{relationship === "harry" && "Você acredita um pouquinho em magia. E isso já é uma forma de coragem."}{relationship === "voce" && "Essa variável ainda não conseguimos explicar. Mas ela faz tudo ficar melhor."}</div>}</section>

      <section id="museu" className="birthdaySection museumSection"><div className="sectionKicker">07 · museu da Kamilly</div><h2>Uma sala para tudo que faz seus olhos brilharem.</h2><div className="museumTabs">{["Coisas que fazem Kamilly feliz", "Coisas que lembram você", "Coisas que eu gosto em você"].map((label, index) => <button key={label} type="button" className={museumRoom === index ? "active" : ""} onClick={() => setMuseumRoom(index)}>Sala {String(index + 1).padStart(2, "0")}</button>)}</div><div className="museumCard"><span>{museumRoom === 0 ? "✨" : museumRoom === 1 ? "🪄" : "💌"}</span><h3>{["Coisas que fazem Kamilly feliz", "Coisas que lembram você", "Coisas que eu gosto em você"][museumRoom]}</h3><p>{["Animais, frio, livros, músicas e tudo que transforma um dia comum em uma história boa.", "Harry Potter, The Big Bang Theory, Frieren, pets, piadas internas e pequenas descobertas.", "Eu gosto do jeitinho estranho e das pegadas no meu pé. Gosto das coisas que fazem seus olhos brilharem. Gosto de descobrir mais uma coisa que você ama. Gosto do seu chamego! Gosto de como você é esforçada. gosto das suas risadas das minhas besteiras. gosto de você garota! se não vou falar muitos pontos aqui kkkkk"][museumRoom]}</p></div></section>

      <section className="birthdaySection petSection"><div className="sectionKicker">08 · escolha seu companheiro</div><h2>Um pet para acompanhar a aventura.</h2><div className="petChoices">{pets.map((pet) => <button key={pet} type="button" className={selectedPet === pet ? "active" : ""} onClick={() => setSelectedPet(pet)}>{pet}</button>)}</div>{selectedPet && <p className="petHint">Seu companheiro {selectedPet} agora acompanha o cursor. Amora, Ice e Izzy estão observando também. ✦</p>}</section>

      <section id="final" className="birthdaySection finalSection"><div className="finalConstellation">✦ · ✧ · ✦<br /><span>♡</span></div><div className="sectionKicker">09 · a teoria final</div><h2>Vida + histórias + animais<br /><em>+ Kamilly = ?</em></h2><p>{finalTheory ? "MEMÓRIAS. Talvez felicidade não seja uma coisa que dê para calcular. Mas eu tentei." : "Clique no ponto de interrogação para descobrir o resultado."}</p><button className="theoryQuestion" type="button" onClick={() => { setFinalTheory(true); collectGift("segredo"); }}>{finalTheory ? "memórias ✦" : "?"}</button>{finalTheory && <div className="missions">TODAS AS MISSÕES CONCLUÍDAS.<br /><small>Hogwarts ✓ · Criaturas ✓ · Ciência ✓ · Teorias ✓ · Memórias ✓</small></div>}<h3>Feliz aniversário, Kamilly.</h3><p>Eu poderia ter feito apenas um presente. Mas você gosta de histórias. Então fiz uma para você.</p><button className="secretButton" type="button" onClick={() => setSecretOpen((current) => !current)}>🔐 {secretOpen ? "fechar arquivo secreto" : "psiu..."}</button>{secretOpen && <div className="secretFile"><strong>ARQUIVO SECRETO</strong><p>Senha:</p><input value={secretInput} onChange={(event) => setSecretInput(event.target.value)} placeholder="uma palavra só de vocês" /><p className={secretInput.toLowerCase() === "deus é presente" ? "unlocked" : ""}>{secretInput.toLowerCase() === "deus é presente" ? "💌 Para você, sem personagem dessa vez. Você é uma das histórias mais bonitas que eu tive a sorte de encontrar." : "O arquivo aguarda a senha."}</p></div>}<Link className="birthdayHomeLink" to="/home">voltar ao menu principal →</Link></section>
    </main>
  );
}
