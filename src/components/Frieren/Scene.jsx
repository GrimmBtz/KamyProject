import "./Scene.css";

import Field from "./Field";
import Trees from "./Trees";
import Flowers from "./Flowers";
import FrierenHero from "./FrierenHero";
import MagicBook from "./MagicBook";
import MagicDust from "./MagicDust";

export default function Scene(){

    return(

        <section className="scene">

            <Field/>

            <Trees/>

            <Flowers/>

            <MagicBook/>

            <MagicDust/>

            <FrierenHero/>

        </section>

    )

}