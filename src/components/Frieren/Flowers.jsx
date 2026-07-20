import "./Flowers.css";

const flowers = Array.from({ length: 100 });

export default function Flowers(){

    return(

        <div className="flowers">

            {flowers.map((_,index)=>{

                const left=Math.random()*100;
                const delay=Math.random()*4;
                const size=24+Math.random()*28;

                const type=Math.random()>0.5
                    ?"blue"
                    :"orange";

                return(

                    <img

                        key={index}

                        src={`/flowers/${type}.png`}

                        className="flower"

                        style={{

                            left:`${left}%`,
                            width:size,
                            animationDelay:`${delay}s`

                        }}

                        alt=""

                    />

                )

            })}

        </div>

    )

}