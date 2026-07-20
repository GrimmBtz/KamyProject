import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro       from "../pages/Intro";
import Home        from "../pages/Home";
import Carta       from "../pages/Carta";
import Favorites   from "../pages/Favorites";
import Frieren     from "../pages/Frieren";
import Harry       from "../pages/Harry";
import VanGogh     from "../pages/VanGogh";
import TBBT        from "../pages/TBBT";
import Pets        from "../pages/Pets";
import Galeria     from "../pages/Galeria";
import Playlist    from "../pages/Playlist";
import FinalLetter from "../pages/FinalLetter";

export default function Router() {
  return (
    <BrowserRouter basename="/KamyProject">
      <Routes>
        {/* Fluxo: Home → Carta → Favoritos → Frieren → Harry → VanGogh → Pets → Galeria → Playlist → Final */}
        <Route path="/"          element={<Intro />}       />
        <Route path="/home"      element={<Home />}        />
        <Route path="/carta"     element={<Carta />}       />
        <Route path="/favoritos" element={<Favorites />}   />
        <Route path="/frieren"   element={<Frieren />}     />
        <Route path="/harry"     element={<Harry />}       />
        <Route path="/vangogh"   element={<VanGogh />}     />
        <Route path="/tbbt"      element={<TBBT />}        />
        <Route path="/pets"      element={<Pets />}        />
        <Route path="/galeria"   element={<Galeria />}     />
        <Route path="/playlist"  element={<Playlist />}    />
        <Route path="/final"     element={<FinalLetter />} />
      </Routes>
    </BrowserRouter>
  );
}
