import "./Album.css";
import { useState, useEffect } from "react";

export default function Album() {
  const [items, setItems] = useState({
    frieren: false,
    harry: false,
    vangogh: false,
    tbbt: false,
    pets: false,
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("kamy_memories") || "{}");
    setItems((prev) => ({ ...prev, ...saved }));

    const handleUpdate = () => {
      const updated = JSON.parse(localStorage.getItem("kamy_memories") || "{}");
      setItems((prev) => ({ ...prev, ...updated }));
    };

    window.addEventListener("memory_found", handleUpdate);
    return () => window.removeEventListener("memory_found", handleUpdate);
  }, []);

  const total = Object.values(items).filter(Boolean).length;

  return (
    <div className="album-container">
      <div className="album-badge">
        📖 {total}/5
      </div>
      <div className="album-drawer">
        <h3>Álbum de Lembranças</h3>
        <div className="album-grid">
          <div className={`album-item ${items.frieren ? "found" : ""}`} title="Flor de Frieren">🌸</div>
          <div className={`album-item ${items.harry ? "found" : ""}`} title="Símbolo de Hogwarts">⚡</div>
          <div className={`album-item ${items.vangogh ? "found" : ""}`} title="Estrela de Van Gogh">⭐</div>
          <div className={`album-item ${items.tbbt ? "found" : ""}`} title="Átomo de TBBT">🧪</div>
          <div className={`album-item ${items.pets ? "found" : ""}`} title="Pegada dos Pets">🐾</div>
        </div>
        {total === 5 && <p className="all-found">✨ Todos os segredos encontrados!</p>}
      </div>
    </div>
  );
}
