import "./Trees.css";

import tree from "../../assets/scenery/tree.png";

export default function Trees(){

    return(

        <>

            <img
                src={tree}
                className="tree leftTree"
                alt=""
            />

            <img
                src={tree}
                className="tree rightTree"
                alt=""
            />

        </>

    )

}