import "./Intro.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Configuração das estrelas (Universo)
    const stars = [];
    const starCount = 400;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random(),
      });
    }

    const draw = () => {
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="intro-container">
      <canvas ref={canvasRef} className="intro-canvas" />
      <div className="intro-content">
        <h1 className="intro-title">O Universo Inteiro...</h1>
        <p className="intro-subtitle">em um pequeno lugar feito para você.</p>
        <button className="intro-btn" onClick={() => navigate("/home")}>
          Entrar na Jornada →
        </button>
      </div>
    </div>
  );
}
