import { Link } from 'react-router-dom';

function TechProfilePage() {
    return (
        <>
            <div className='shadow-inner hover:shadow-lg px-5 shadow-black hover:shadow-black py-5 mt-10 rounded-md bg-Darkred'>
                <strong> Tecnico Profile </strong>

                <Link to="/payloads"> <h2> Comprar: Subscripcion Mensual </h2> </Link>

                <Link to="/comunityProblemsTechs"> <h3> Ver problemas subidos </h3> </Link>
            </div >
        </>
    );
};

export default TechProfilePage;