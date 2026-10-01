import "./MagicBook.css";

import book from "../../assets/scenery/book.png";

export default function MagicBook(){

return(

<div className="bookContainer">

<img

src={book}

className="book"

alt="grimório"

/>

</div>

)

}