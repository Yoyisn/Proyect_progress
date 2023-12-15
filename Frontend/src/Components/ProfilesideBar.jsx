import { Link } from "react-router-dom";
import HelpBtn from "../Subcomponents/HelpBtn";

const ProfilesideBar = () => {
    return (
        <>
            <div className="flex flex-col">
                <ul className="-my-2 divide-y divide-gray-100 dark:divide-gray-800">
                    <li className="py-2">
                        <ul className="space-y-5">
                            <li>
                                <Link
                                    to="/profile"
                                    className="block rounded-lg bg-gray-100 px-4 py-2 text-lg font-medium text-black dark:bg-gray-800 dark:text-gray-200 hover:text-gray-700"
                                >
                                    Profile
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to=""
                                    className="block rounded-lg px-4 py-2 text-lg font-medium text-white hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                >
                                    Team
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/tasks"
                                    className="block rounded-lg px-4 py-2 text-lg font-medium text-white hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                >
                                    Ver o subir tus problemas
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/toQuote"
                                    className="block rounded-lg px-4 py-2 text-lg font-medium text-white hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                >
                                    Cotizaciones de tus problemas
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="py-2">
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    to=""
                                    className="block rounded-lg px-4 py-2 text-lg font-medium text-white hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                >
                                    Update
                                </Link>
                            </li>

                            <li>
                                <HelpBtn />
                            </li>
                        </ul>
                    </li>

                    <li className="py-2">
                    <Link
                                    to="/"
                                    className="block rounded-lg px-4 py-2 text-lg font-medium text-white hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                    onClick={() => {
                                        logout();
                                    }}
                                >
                                    {" "}
                                    Logout{" "}
                                </Link>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default ProfilesideBar;
