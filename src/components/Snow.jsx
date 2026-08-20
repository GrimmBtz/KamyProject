import "./Snow.css";

export default function Snow(){

    return(

        <div className="snow">

            {[...Array(60)].map((_,i)=>(

                <span
                    key={i}
                    style={{
                        left:`${Math.random()*100}%`,
                        animationDelay:`${Math.random()*10}s`,
                        animationDuration:`${6+Math.random()*6}s`
                    }}
                />

            ))}

        </div>

    )

}