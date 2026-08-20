import React, { useState, useEffect } from 'react';
import './MagicFrieren.css';

const MagicFrieren = () => {
  const [elements, setElements] = useState([]);

  const handleMouseMove = (e) => {
    // Adiciona um novo elemento (flor ou árvore) na posição do mouse
    const isTree = Math.random() > 0.8; // 20% de chance de ser árvore
    const newElement = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      type: isTree ? 'tree' : 'flower',
      size: isTree ? Math.random() * 100 + 100 : Math.random() * 30 + 20,
      rotation: Math.random() * 20 - 10,
      color: ['#b7d5ff', '#ffffff', '#e0c3fc', '#c0fdff'][Math.floor(Math.random() * 4)]
    };

    setElements((prev) => [...prev.slice(-30), newElement]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setElements((prev) => prev.filter(el => Date.now() - el.id < 3000));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="magic-container" onMouseMove={handleMouseMove}>
      {elements.map((el) => (
        <div
          key={el.id}
          className={`magic-element ${el.type}`}
          style={{
            left: el.x,
            top: el.y,
            width: el.size,
            height: el.size,
            transform: `translate(-50%, -50%) rotate(${el.rotation}deg)`,
            backgroundColor: el.type === 'flower' ? el.color : 'transparent',
            opacity: 1 - (Date.now() - el.id) / 3000
          }}
        >
          {el.type === 'tree' && (
            <svg viewBox="0 0 100 100" className="tree-svg">
              <path d="M50 10 L20 90 L80 90 Z" fill="#2d5a27" />
              <path d="M50 30 L25 80 L75 80 Z" fill="#3e7e39" />
              <rect x="45" y="85" width="10" height="15" fill="#5d4037" />
            </svg>
          )}
          {el.type === 'flower' && (
            <div className="flower-inner">
              <div className="petal-magic" style={{ transform: 'rotate(0deg)' }}></div>
              <div className="petal-magic" style={{ transform: 'rotate(72deg)' }}></div>
              <div className="petal-magic" style={{ transform: 'rotate(144deg)' }}></div>
              <div className="petal-magic" style={{ transform: 'rotate(216deg)' }}></div>
              <div className="petal-magic" style={{ transform: 'rotate(288deg)' }}></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MagicFrieren;
