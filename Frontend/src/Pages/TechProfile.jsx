import { Link } from 'react-router-dom';

function TechProfilePage() {
    return (
        <> 
            <strong> Tecnico Profile </strong>

            <Link to="/payloads"> <h2> Comprar: Subscripcion Mensual </h2> </Link>

            <Link to="/comunityProblemsTechs"> <h3> Ver problemas subidos </h3> </Link>
        </>
    );
};

export default TechProfilePage;