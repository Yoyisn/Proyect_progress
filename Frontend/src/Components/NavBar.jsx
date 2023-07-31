import { useAuth } from '../Context/AuthContext';
import { Link } from "react-router-dom";

function NavBar() { 

    const { isAuthenticated, logout, user } = useAuth();

    return(
        <>
            <nav className="bg-zinc-700 my-3 flex 
            justify-between py-5 px-10 rounded-lg">
                <Link to='/'>
                    <h1 className="text-2xl font-bold"> Task Manager </h1>
                </Link>
                <ul className="flex gap-x-2">
                    {isAuthenticated ? (
                        <>
                        <li>
                            Welcome User {user.username}
                        </li>
                        <li>
                            <Link className='bg-indigo-500 px-4 py-1 rounded-sm' 
                            to='/add-task'> Añade una tarea </Link>
                        </li>
                        <li>
                            <Link to='/' onClick={() => {
                                logout();
                            }}> Logout </Link>
                        </li>                          
                        </>
                    ) : (
                        <>
                        <li>
                            <Link className='bg-indigo-500 px-4 py-1 rounded-sm' 
                            to='/login'> Login </Link>
                        </li>
                         <li>
                            <Link className='bg-indigo-500 px-4 py-1 rounded-sm' 
                            to='/register'> Register </Link>
                        </li>
                    </>
                    )}
                </ul>
            </nav>
        </>
    ); 
};

export default NavBar;