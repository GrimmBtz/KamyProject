import "./Home.css";

import Background from "../components/Background/Background";
import Window     from "../components/Background/Window";
import Hero       from "../components/Background/Hero";

export default function Home() {
  return (
    <main className="homePage">
      {/* Background já inclui: lua, estrelas, neve, vagalumes */}
      <Background />

      {/* Janela antiga */}
      <Window />

      {/* Título, subtítulo e botão */}
      <Hero />
    </main>
  );
}
