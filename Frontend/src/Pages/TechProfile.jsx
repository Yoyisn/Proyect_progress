import { Link } from 'react-router-dom';
import NavBarTechs from '../Components/NavBarTechs.jsx';
import { useAuth } from '../Context/AuthContext';
import TimeAgo from '../Components/TimeAgo';
import multiTec from '../assets/assets/images/multiTecnico.avif';

import { useTasks } from '../Context/TasksContext';
import { useEffect } from 'react';
import dayjs from 'dayjs';


function TechProfilePage() {

    const { getTasks } = useTasks();
    const { tecnicoo } = useAuth();

    useEffect(() => {
        getTasks()
    }, []);

    return (
        <>
            <div className="shadow-inner hover:shadow-lg px-5 shadow-black hover:shadow-black py-5 mt-10 rounded-md bg-Darkred">

                <NavBarTechs />

                <div className='flex justify-between'>

                    <ul className='px-5 py-3'>
                        <li className='pb-3 hover:list-disc '>
                            <strong> Tecnico Profile </strong>
                        </li>
                        <li className='pb-3 hover:list-disc '>
                            <Link
                                className="bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-Bgblue px-4 py-1 rounded-md"
                                to="/payloads"
                            >
                                {" "}
                                Compra tu Subscripcion Mensual{" "}
                            </Link>
                        </li>
                        <li className='pb-3 hover:list-disc '>
                            <Link
                                className="bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-Bgblue px-4 py-1 rounded-md"
                                to="/comunityProblemsTechs"
                            >
                                {" "}
                                Ver problemas subidos{" "}
                            </Link>
                        </li>
                    </ul>
                    <div>

                        <strong className='px-1 text-[10px] font-abc sm:text-[30px] leading-none text-Grayishblue'> Bienvenido {tecnicoo.name}</strong>
                        <img className='py-5 h-[350px] m-[1px]' src={multiTec} alt="imagen de perfil" />
                        <span className='text-1xl text-Grayishblue font-abc'>Se unio el: {dayjs(tecnicoo.createAt).utc().format('DD/MM/YYYY')} <br /> Hace: <TimeAgo date={tecnicoo.createAt} /></span>

                    </div>
                </div >

            </div>

        </>
    );
};

export default TechProfilePage;