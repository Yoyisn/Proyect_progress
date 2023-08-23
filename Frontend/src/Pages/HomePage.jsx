import NavBar from "../Components/NavBar.jsx";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <> 
        <div>
        <NavBar />

        <button>
          <Link to="/techRegister"> Registro Tecnico </Link>
        </button>
        </div>
        </>
    );
};

export default HomePage;