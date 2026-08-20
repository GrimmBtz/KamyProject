import "./Quote.css";
import {useEffect,useState} from "react";

const frases=[

"Algumas pessoas aparecem como uma pequena magia.",

"Existem lembranças que o tempo nunca leva.",

"Mesmo uma curta caminhada pode durar para sempre.",

"Os momentos simples costumam ser os mais preciosos."

];

export default function Quote(){

const[index,setIndex]=useState(0);

useEffect(()=>{

const timer=setInterval(()=>{

setIndex((prev)=>(prev+1)%frases.length);

},7000);

return()=>clearInterval(timer);

},[]);

return(

<div className="quote">

<p>

{frases[index]}

</p>

</div>

)

}