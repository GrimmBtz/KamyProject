import "./Pets.css";
import Background from "../components/Background/Background";
import { Link } from "react-router-dom";
import Album from "../components/Album/Album";
import { useMemory } from "../hooks/useMemory";

// Importar as fotos específicas dos pets
import amoraPhoto from "../assets/Amora.png";  // amora
import icePhoto from "../assets/Ice.png";      // ice
import izzyPhoto from "../assets/Izzy.png";    // izzy

const petList = [
  { 
    name: "Amora", 
    type: "A guardiã da alegria e das bagunças, a mostardinha mais fofa do mundo", 
    photo: amoraPhoto, 
    color: "#8d5524",
    description: "Sempre pronta para uma aventura e um carinho!"
  },
  { 
    name: "Ice", 
    type: "O mago do frio e dos cochilos, o rei do aconchego", 
    photo: icePhoto, 
    color: "#a5a5a5",
    description: "Elegante, calmo e o rei do aconchego."
  },
  { 
    name: "Izzy", 
    type: "A estrelinha chapiscada, a pequena aventura", 
    photo: izzyPhoto, 
    color: "#e6b89c",
    description: "Pequena, única e cheia de personalidade."
  },
];

export default function Pets() {
  const { collect } = useMemory();
  return (
    <main className="petsPage">
      <Background />
      <Album />

      <section className="petsContent">
        <span className="petsTag">02 - Nossos Guardiões</span>
        <h1>Pequenas vidas, grandes amores.</h1>
        <p>
          Os melhores companheiros de aventuras que alguém poderia ter.
          Seus amigos de quatro patas, que com suas travessuras e carinho, tornam cada dia mais especial, eu sei o quanto você ama eles e o quanto eles amam você, por isso, aqui estão eles na seu site Kamy, para que você possa sempre lembrar de cada momento especial que passaram juntos.
        </p>

        <div className="petsGrid">
          {petList.map((pet, index) => (
            <div key={index} className="petCard" style={{ "--pet-color": pet.color }} onClick={() => collect("pets")}>
              <div className="petPhotoContainer">
                <img src={pet.photo} alt={pet.name} className="petRealPhoto" />
              </div>
              <div className="petInfo">
                <h3>{pet.name} 🐾</h3>
                <span className="petType">{pet.type}</span>
                <p className="petDesc">{pet.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link className="petsNextBtn" to="/galeria">
          Continuar para as coisas que você ama →
        </Link>
      </section>
    </main>
  );
}
