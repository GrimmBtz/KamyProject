import "./Cantinho.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background/Background";
import frierenImg from "../assets/frieren.png";

const candles = [
  "Uma luz pequena ainda ilumina muita coisa.",
  "Você não precisa brilhar hoje. Só existir já é bonito.",
  "Magia de verdade é o jeito que você cuida das coisas.",
  "Nenhum dia difícil dura para sempre.",
  "Seu coração é maior do que qualquer dia ruim.",
];

const keys = [
  { n: "Dó", f: 261.63 }, { n: "Ré", f: 293.66 }, { n: "Mi", f: 329.63 }, { n: "Fá", f: 349.23 },
  { n: "Sol", f: 392 }, { n: "Lá", f: 440 }, { n: "Si", f: 493.88 }, { n: "Dó", f: 523.25 },
];

const MELODY = [[293.66, 0], [440, 0.9], [493.88, 1.8], [587.33, 2.7], [493.88, 3.6], [440, 4.5], [329.63, 5.4], [440, 6.3], [523.25, 7.2], [659.25, 8.1], [523.25, 9], [440, 9.9]];

const animals = [
  { icon: "🐕", big: false, text: "Cada banho, cada escovada: cuidado de verdade." },
  { icon: "🐈", big: false, text: "Até os bichinhos mais desconfiados confiam em quem tem mãos calmas." },
  { icon: "🐎", big: true, text: "Um dia, campos abertos e animais enormes. Esse sonho é lindo." },
  { icon: "🐘", big: true, text: "Gigantes gentis combinam com quem tem um coração do tamanho do seu." },
  { icon: "🦒", big: true, text: "Seu sonho é grande, e está tudo bem ir devagar até ele." },
];

export default function Cantinho() {
  const [lit, setLit] = useState([]);
  const [phrase, setPhrase] = useState("");
  const [knock, setKnock] = useState(0);
  const [engine, setEngine] = useState(false);
  const [animal, setAnimal] = useState(null);
  const [hug, setHug] = useState(false);
  const [rest, setRest] = useState(false);
  const [bite, setBite] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [pressed, setPressed] = useState(null);
  const audio = useRef(null);
  const loop = useRef(null);

  useEffect(() => {
    const els = document.querySelectorAll(".cantReveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("on")), { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const ctx = () => {
    const C = window.AudioContext || window.webkitAudioContext;
    if (!audio.current && C) audio.current = new C();
    return audio.current;
  };

  const tone = (c, f, t, vol = 0.09, len = 2.4) => {
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "sine";
    o.frequency.value = f;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(c.destination);
    o.start(t);
    o.stop(t + len + 0.1);
  };

  const playKey = (k, i) => {
    const c = ctx();
    if (!c) return;
    tone(c, k.f, c.currentTime, 0.14, 1.8);
    setPressed(i);
    setTimeout(() => setPressed(null), 250);
  };

  const phraseOnce = () => {
    const c = ctx();
    const t0 = c.currentTime + 0.05;
    MELODY.forEach(([f, t]) => tone(c, f, t0 + t));
  };

  const stopMusic = () => {
    clearInterval(loop.current);
    setPlaying(false);
  };

  const toggleMusic = () => {
    if (playing) return stopMusic();
    if (!ctx()) return;
    phraseOnce();
    loop.current = setInterval(phraseOnce, 12000);
    setPlaying(true);
  };

  useEffect(() => () => { clearInterval(loop.current); audio.current?.close(); }, []);

  const lightCandle = (i) => {
    setPhrase(candles[i]);
    setLit((l) => (l.includes(i) ? l : [...l, i]));
  };

  const doKnock = () => {
    setKnock((k) => (k >= 3 ? 1 : k + 1));
  };

  const allLit = lit.length === candles.length;

  return (
    <main className={`cantinhoPage ${allLit ? "warm" : ""}`}>
      <Background />
      <div className="cantRunes" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>

      {/* 1. Abertura com a imagem da Frieren */}
      <header className="cantHero">
        <img className="cantHeroImg" src={frierenImg} alt="" />
        <div className="cantHeroShade" />
        <div className="cantRing" aria-hidden="true"><i /><i /><i /></div>
        <div className="cantHeroText">
          <span className="cantTag">Um cantinho só seu</span>
          <h1>Um cantinho para quando o dia pesar</h1>
          <p className="cantLead">Não precisa responder nada. Pode só ficar um pouquinho por aqui.</p>
          <span className="cantScroll" aria-hidden="true">✦</span>
        </div>
      </header>

      <div className="cantContent">
        {/* 2. Mensagem */}
        <p className="cantMsg cantReveal">
          Eu não sei exatamente como está o seu coração hoje, mas queria deixar aqui um pequeno gesto feito com carinho.
          Você não precisa responder, explicar nada ou fingir que está tudo bem. Eu respeito o seu espaço e o seu tempo.
          Só queria que você soubesse que é muito importante para mim.
        </p>

        {/* 3. Velas mágicas */}
        <section className="cantSection cantReveal">
          <span className="cantTag">Magia pequena</span>
          <h2>Acenda uma luz</h2>
          <div className="cantCandles">
            {candles.map((_, i) => (
              <button key={i} type="button" className={`cantCandle ${lit.includes(i) ? "lit" : ""}`} style={{ animationDelay: `${i * 0.7}s` }} onClick={() => lightCandle(i)} aria-label={`Acender vela ${i + 1}`}>
                <span className="flame" /><span className="wax" />
              </button>
            ))}
          </div>
          <p className="cantPhrase" aria-live="polite">{phrase || "Toque nas velas que flutuam."}</p>
          {allLit && <p className="cantPhrase gold">Todas acesas. O lugar ficou mais quente. ✨</p>}
        </section>

        {/* 4. TBBT */}
        <section className="cantSection cantReveal">
          <span className="cantTag">Para quando a vida aperta</span>
          <h2>O sofá continua reservado</h2>
          <div className="cantBoard">
            <code>você + sofá + sua série favorita</code>
            <code>= um dia um pouco melhor</code>
            <small>(hipótese aprovada, sem revisão necessária)</small>
          </div>
          <button type="button" className="cantBtn" onClick={doKnock}>
            {knock === 0 ? "Knock knock knock 🚪" : knock < 3 ? `${"Knock ".repeat(knock)}...` : "Bazinga! 🔬"}
          </button>
          <p className="cantPhrase">
            {knock === 3 ? "Você é a constante da minha equação." : "Bata três vezes. Sem pressa."}
          </p>
        </section>

        {/* 5. Silvia rosa */}
        <section className="cantSection cantReveal">
          <span className="cantTag">Rosa, rápido e sem pressa</span>
          <h2>Uma estradinha só para respirar</h2>
          <div className={`cantRoad ${engine ? "go" : ""}`}>
            <div className="cantMoonSmall" />
            <svg className="cantCar" viewBox="0 0 220 80" role="img" aria-label="Nissan Silvia S15 rosa">
              <defs>
                <linearGradient id="sil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffb7d5" /><stop offset="1" stopColor="#e0679f" /></linearGradient>
              </defs>
              <path d="M8 56 L14 42 Q20 36 40 33 L72 18 Q82 14 100 14 L138 14 Q152 16 162 28 L192 34 Q210 38 212 52 L212 58 L8 58 Z" fill="url(#sil)" />
              <path d="M76 22 L100 18 L134 18 Q144 20 150 30 L72 32 Z" fill="#1b2a44" opacity=".9" />
              <circle cx="56" cy="60" r="13" fill="#111" /><circle cx="56" cy="60" r="6" fill="#d8d8e8" />
              <circle cx="164" cy="60" r="13" fill="#111" /><circle cx="164" cy="60" r="6" fill="#d8d8e8" />
              <rect x="196" y="40" width="14" height="6" rx="3" fill="#fff6c8" className="lamp" />
            </svg>
            <div className="cantBeam" />
            <div className="cantLine" />
          </div>
          <button type="button" className="cantBtn" onClick={() => setEngine((v) => !v)}>
            {engine ? "Estacionar" : "Ligar o motor 🔑"}
          </button>
        </section>

        {/* 6. Piano */}
        <section className="cantSection cantReveal">
          <span className="cantTag">Música clássica</span>
          <h2>Um piano só para você</h2>
          <div className="cantPiano" role="group" aria-label="Piano">
            {keys.map((k, i) => (
              <button key={i} type="button" className={`cantKey ${pressed === i ? "down" : ""}`} onClick={() => playKey(k, i)} aria-label={k.n}>
                <small>{k.n}</small>
              </button>
            ))}
          </div>
          <button type="button" className="cantBtn" onClick={toggleMusic} aria-pressed={playing}>
            {playing ? "⏸ Pausar melodia" : "🎹 Tocar uma melodia calma"}
          </button>
          <p className="cantPhrase">O som só começa quando você tocar.</p>
        </section>

        {/* 7. Animais */}
        <section className="cantSection cantReveal">
          <span className="cantTag">Seu jeito de cuidar</span>
          <h2>Pequenos hoje, gigantes amanhã</h2>
          <div className="cantAnimals">
            {animals.map((a, i) => (
              <button key={i} type="button" className={`cantAnimal ${a.big ? "big" : ""} ${animal === i ? "active" : ""}`} style={{ animationDelay: `${i * 0.5}s` }} onClick={() => setAnimal(i)} aria-label={`Animal ${a.icon}`}>
                {a.icon}
              </button>
            ))}
          </div>
          <p className="cantPhrase" aria-live="polite">{animal === null ? "Toque em um deles." : animals[animal].text}</p>
        </section>

        {/* 8. Carta */}
        <article className="cantLetter cantReveal">
          <span className="seal" aria-hidden="true">🦉</span>
          <p>
            Eu admiro muito a forma como você cuida dos animais e coloca carinho nas coisas. Isso diz muito sobre o tamanho do seu coração.
            Sei que talvez hoje você precise de espaço, e eu vou respeitar isso. Você não precisa estar bem o tempo todo e não precisa encontrar palavras agora.
            Só quero que saiba que eu te amo, sinto sua falta e continuo aqui, sem cobrança, quando você quiser.
          </p>
        </article>

        {/* 9. Gestos opcionais */}
        <div className="cantActions cantReveal">
          <button type="button" onClick={() => setHug((v) => !v)} aria-expanded={hug}>🫂 Um abraço</button>
          <button type="button" onClick={() => setRest((v) => !v)} aria-expanded={rest}>🌙 Descansar</button>
          <button type="button" onClick={() => setBite((v) => !v)} aria-expanded={bite}>🦷 Morder</button>
        </div>
        <div className="cantReplies" aria-live="polite">
          {hug && <p className="cantReply">Um abraço bem apertado, desses que não pedem nada em troca.</p>}
          {rest && <p className="cantReply">Você não precisa fazer nada agora. Pode apenas descansar.</p>}
          {bite && <p className="cantReply">Nhac! 🦷 Uma mordidinha de carinho, para quando você quiser.</p>}
        </div>

        <p className="cantFinal cantReveal">Você pode seguir no seu ritmo. Eu estarei aqui.</p>
        <Link className="cantBack" to="/home">← Voltar ao início</Link>
      </div>
    </main>
  );
}
