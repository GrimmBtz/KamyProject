import "./Stars.css";

export default function Stars(){

    const stars = Array.from({length:220});

    return(

        <>

            {stars.map((_,index)=>(

                <span
                    key={index}
                    className="star"

                    style={{

                        left:`${Math.random()*100}%`,
                        top:`${Math.random()*100}%`,

                        animationDelay:`${Math.random()*6}s`,

                        animationDuration:`${2+Math.random()*5}s`

                    }}

                />

            ))}

        </>

    )

}