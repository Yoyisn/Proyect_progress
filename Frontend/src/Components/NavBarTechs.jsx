import Logo from "../assets/assets/images/image.png";
import { useAuth } from '../Context/AuthContext';
import { Link } from "react-router-dom";

function NavBarTechs() {

    const { isAuthenticated, logout, tecnicoo } = useAuth();

    console.log(tecnicoo);

    return(
        <>
            <nav
                className="bg-Darkred  my-3 flex 
              justify-between py-5 px-10 rounded-lg shadow-inner hover:shadow-lg"
            >
                <ul className="flex gap-x-2">
                    <li>
                        <Link to={isAuthenticated ? "/techProfile" : "/"}>
                            <h1 className="text-2xl font-abc"> ServiTech </h1>
                        </Link>
                    </li>
                    <li>
                        <img
                            className="flex h-[40px] translate-y-[-5px]"
                            src={Logo}
                            alt="Logo Servitecnicos"
                        />
                    </li>
                </ul>

                <ul className="flex gap-x-2">
                    {isAuthenticated ? (
                        <>
                            <li>Bienvenido {tecnicoo.name}</li>
                            <li>
                                <Link
                                    className="bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-Bgblue px-4 py-1 rounded-md"
                                    to="/techProfile"
                                >
                                    {" "}
                                    Profile{" "}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => {
                                        logout();
                                    }}
                                >
                                    {" "}
                                    Logout{" "}
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link
                                    className="bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-Bgblue px-4 py-1 rounded-md"
                                    to="/login"
                                >
                                    {" "}
                                    Login{" "}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-Bgblue px-4 py-1 rounded-md"
                                    to="/register"
                                >
                                    {" "}
                                    Register{" "}
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </>
    );
};

export default NavBarTechs;