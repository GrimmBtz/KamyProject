import "./MysteryNote.css";
import { useState } from "react";

export default function MysteryNote({ chapter = "segredo", message, hint = "há algo escondido aqui" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`mystery-note-trigger mystery-${chapter}`}
        type="button"
        aria-label={`Abrir bilhete escondido: ${hint}`}
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true">✦</span>
        <small>{hint}</small>
      </button>

      {open && (
        <div className="mystery-note-overlay" onClick={() => setOpen(false)}>
          <article className="mystery-note-card" onClick={(event) => event.stopPropagation()}>
            <div className="mystery-note-seal" aria-hidden="true">✧</div>
            <span className="mystery-note-label">Bilhete encontrado · {chapter}</span>
            <p>{message}</p>
            <button type="button" onClick={() => setOpen(false)}>Guardar no coração</button>
          </article>
        </div>
      )}
    </>
  );
}
