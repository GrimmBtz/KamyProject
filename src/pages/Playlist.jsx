import "./Playlist.css";
import Background from "../components/Background/Background";
import { Link } from "react-router-dom";

const tracks = [
  { num: "01", title: "A noite que você apareceu",        artist: "Para sempre" },
  { num: "02", title: "This I Love",                      artist: "Guns N' Roses" },
  { num: "03", title: "Rap do Zoro: O Maio Espadachim do Mundo",                  artist: "7 Minutoz" },
  { num: "04", title: "O jeito que você ri",              artist: "Favoritos" },
  { num: "05", title: "Deixa Acontecer",              artist: "Entre nós" },
  { num: "06", title: "Camisa 10",              artist: "Turma Do Pagode" },
];

export default function Playlist() {
  return (
    <main className="playlistPage">

      <Background />

      <div className="playlistContainer">

        {/* Disco de vinil */}
        <div className="playlistVinyl">
          <div className="playlistVinylCenter" />
        </div>

        {/* Lista de músicas */}
        <div className="playlistTracks">

          <span className="playlistTag">Playlist</span>

          <h1>Músicas que me lembram você</h1>

          <ul className="playlistList">
            {tracks.map((track) => (
              <li key={track.num} className="playlistTrack">
                <span className="playlistTrackNum">{track.num}</span>
                <div className="playlistTrackInfo">
                  <strong>{track.title}</strong>
                  <small>{track.artist}</small>
                </div>
              </li>
            ))}
          </ul>

          <Link className="playlistNextBtn" to="/final">
            Continuar
          </Link>

        </div>

      </div>

    </main>
  );
}
