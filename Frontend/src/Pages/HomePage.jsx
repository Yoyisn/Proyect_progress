import NavBar from "../Components/NavBar.jsx";
import { Link } from "react-router-dom";

import MainArticle from "../Components/MainArticle.jsx"
import TecContainter from "../Components/TecContainer.jsx"
// import CardsContainer from "../Components/CardsContainer.jsx";

function HomePage() {
  return (
    <>
      <div className="shadow-inner hover:shadow-lg px-5 shadow-black hover:shadow-black py-5 mt-10 rounded-md bg-Bgblue">
        <NavBar />
        <div className="sm:flex sm:gap-8">
          {" "}
          <MainArticle />
          <TecContainter />


          {/* <strong> Eres el tecnico? Registrate: </strong>
        <button>
          <Link to="/techRegister"> Click me </Link>
        </button>

        <br />

        <strong>Ya tienes tu cuenta y eres el tenico? Inicia sesion aqui: </strong>
        <button> <Link to="/techLogin"> Click me </Link> </button> */}

        </div>
        {/* <CardsContainer /> */}
      </div>
    </>
  );
};

export default HomePage;