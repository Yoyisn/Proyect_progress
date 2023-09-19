import { Link } from 'react-router-dom';

function TechProfilePage() {
    return (
        <> 
            <h1> Perfil Tecnico </h1> 
            <button> <Link to="/comunityProblems"> Problemas que ha subido la comunidad </Link> </button>
        </>
    );
};

export default TechProfilePage;