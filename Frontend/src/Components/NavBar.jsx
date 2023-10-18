import { useAuth } from '../Context/AuthContext';
import { Link } from "react-router-dom";

function NavBar() { 

    const { isAuthenticated, logout, user } = useAuth();

    return(
        <>
            <nav className="bg-Darkred  my-3 flex 
            justify-between py-5 px-10 rounded-lg">
                <Link to={
                    isAuthenticated ? "/tasks" : "/"
                }>
                    <h1 className="text-2xl font-abc"> ServiTech </h1>
                </Link>
                <ul className="flex gap-x-2">
                    {isAuthenticated ? (
                        <>
                        <li>
                            Bienvenido {user.username}
                        </li>
                        <li>
                            <Link className='bg-indigo-500 px-4 py-1 rounded-md' 
                            to='/add-task'> Sube tu problema </Link>
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
                            <Link className='bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-Bgblue px-4 py-1 rounded-md' 
                            to='/login'> Login </Link>
                        </li>
                         <li>
                            <Link className='bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-Bgblue px-4 py-1 rounded-md' 
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