import "./MagicDust.css";

export default function MagicDust(){

const particles=[];

for(let i=0;i<40;i++){

particles.push(i)

}

return(

<div className="dust">

{

particles.map((p)=>

<div

key={p}

className="particle"

/>

)

}

</div>

)

}