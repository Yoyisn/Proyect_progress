import NavBar from "../Components/NavBar.jsx";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <> 
        <div>
        <NavBar />

        <strong> Eres el tecnico? Registrate: </strong>
        <button>
          <Link to="/techRegister"> Click me </Link>
        </button>

        <br />

        <strong>Ya tienes tu cuenta y eres el tenico? Inicia sesion aqui: </strong>
        <button> <Link to="/techLogin"> Click me </Link> </button>
        </div>
        </>
    );
};

export default HomePage;