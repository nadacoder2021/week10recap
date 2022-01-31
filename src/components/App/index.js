
import LoginButton from "../loginbutton";
import Heading from "../header"

export default function App() {

  return (
    <div>
      <Heading text="Welcome to WikiPigeon"></Heading>
      <h3 style = {{textAlign: 'center'}}>Please click below to get exclusive access to the blog</h3>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
       
      </nav>
        
      <LoginButton />
    </div>
  );
}