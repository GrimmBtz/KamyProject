import "./FloatingPetals.css";

export default function FloatingPetals(){

    return(

        <>

            {Array.from({length:20}).map((_,i)=>(

                <span

                    key={i}

                    className="petal"

                    style={{

                        left:`${Math.random()*100}%`,
                        animationDelay:`${Math.random()*10}s`,
                        animationDuration:`${12+Math.random()*12}s`

                    }}

                />

            ))}

        </>

    )

}