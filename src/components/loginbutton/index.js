import { useAuth0 } from "@auth0/auth0-react";
import css from "../../components/loginbutton/loginbutton.module.css"



function LoginButton(){
    const {loginWithRedirect} = useAuth0();

   return (
    <div style={{display: "flex", justifyContent: "center", margin: "20px"}}>  
    <button className = {css.login} onClick={()=> loginWithRedirect()}>
        Log in
    </button>
   </div> ) 
}

export default LoginButton;