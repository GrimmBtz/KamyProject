import "./Cantinho.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background/Background";

const tiles = [
  { icon: "🔬", text: "Bazinga: hoje o experimento é só respirar." },
  { icon: "❄️", text: "Frieren sabe: o tempo passa, e as coisas boas ficam." },
  { icon: "🪄", text: "Uma luz pequena, de um feitiço inventado só para você." },
  { icon: "🎻", text: "Um pouco de silêncio também é música." },
  { icon: "🚗", text: "Uma estrada vazia, faróis baixos, sem pressa." },
  { icon: "🐾", text: "Patinhas, pelos macios e o seu jeito de cuidar." },
  { icon: "🐎", text: "E um dia, campos enormes e gigantes gentis." },
];

const NOTES = [
  [293.66, 0], [440, 0.9], [493.88, 1.8], [587.33, 2.7], [493.88, 3.6], [440, 4.5],
  [329.63, 5.4], [440, 6.3], [523.25, 7.2], [659.25, 8.1], [523.25, 9], [440, 9.9],
];

export default function Cantinho() {
  const [hug, setHug] = useState(false);
  const [rest, setRest] = useState(false);
  const [bite, setBite] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audio = useRef(null);
  const loop = useRef(null);

  useEffect(() => {
    const els = document.querySelectorAll(".cantReveal");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("on")), { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const playPhrase = () => {
    const ctx = audio.current;
    const t0 = ctx.currentTime + 0.05;
    NOTES.forEach(([f, t]) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = f;
      g.gain.setValueAtTime(0, t0 + t);
      g.gain.linearRampToValueAtTime(0.09, t0 + t + 0.05);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + t + 2.4);
      o.connect(g).connect(ctx.destination);
      o.start(t0 + t);
      o.stop(t0 + t + 2.5);
    });
  };

  const stopMusic = () => {
    clearInterval(loop.current);
    audio.current?.close();
    audio.current = null;
    setPlaying(false);
  };

  const toggleMusic = () => {
    if (playing) return stopMusic();
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    audio.current = new Ctx();
    playPhrase();
    loop.current = setInterval(playPhrase, 12000);
    setPlaying(true);
  };

  useEffect(() => () => { clearInterval(loop.current); audio.current?.close(); }, []);

  return (
    <main className="cantinhoPage">
      <Background />
      <div className="cantRunes" aria-hidden="true"><i /><i /><i /><i /><i /></div>

      <section className="cantContent">
        <span className="cantTag">Um cantinho</span>
        <h1>Um cantinho para quando o dia pesar</h1>
        <p className="cantLead">Não precisa responder nada. Pode só ficar um pouquinho por aqui.</p>

        <p className="cantMsg cantReveal">
          Eu não sei exatamente como está o seu coração hoje, mas queria deixar aqui um pequeno gesto feito com carinho.
          Você não precisa responder, explicar nada ou fingir que está tudo bem. Eu respeito o seu espaço e o seu tempo.
          Só queria que você soubesse que é muito importante para mim.
        </p>

        <div className="cantTiles">
          {tiles.map((t) => (
            <div key={t.icon} className="cantTile cantReveal"><span>{t.icon}</span><p>{t.text}</p></div>
          ))}
        </div>

        <article className="cantLetter cantReveal">
          <p>
            Eu admiro muito a forma como você cuida dos animais e coloca carinho nas coisas. Isso diz muito sobre o tamanho do seu coração.
            Sei que talvez hoje você precise de espaço, e eu vou respeitar isso. Você não precisa estar bem o tempo todo e não precisa encontrar palavras agora.
            Só quero que saiba que eu te amo, sinto sua falta e continuo aqui, sem cobrança, quando você quiser.
          </p>
        </article>

        <div className="cantActions cantReveal">
          <button type="button" onClick={() => setHug((v) => !v)} aria-expanded={hug}>🫂 Um abraço</button>
          <button type="button" onClick={toggleMusic} aria-pressed={playing}>{playing ? "⏸ Pausar a música" : "🎹 Música clássica"}</button>
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
      </section>
    </main>
  );
}
