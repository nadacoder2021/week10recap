
import css from "../header/header.module.css"

function Heading({text}){
 return  (

 <div className= {css.header}>
   <h1>  {text}</h1>
   </div>
 )
}

export default Heading;