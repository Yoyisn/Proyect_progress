import { useAuth } from "../Context/AuthContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { useNavigate, Link } from 'react-router-dom';
import Logo from "../assets/assets/images/image.png";
import Footer from "../Components/Footer";


function RegisterPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { sigup, isAuthenticated, errors: registerErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated]);

  return (
    <>
      <h1 className="flex font-abc text-6xl translate-y-[140px] justify-center">
        {" "}
        <Link to="/"> ServiTech </Link>{" "}
        <img
          className="flex h-[60px]"
          src={Logo}
          alt="Logo Servitecnicos"
        />
      </h1>

      <div className="shadow-inner hover:shadow-lg px-5 shadow-black hover:shadow-black py-5 mt-10 rounded-md bg-Bgblue">

        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
          <div className="bg-Darkred max-w-md p-10 shadow-inner hover:shadow-lg shadow-black hover:shadow-black mt-10 rounded-md">
            {registerErrors.map((error, i) => {
              <div key={i} className="bg-red-500 p-2 text-white text-center">
                {" "}
                {error}{" "}
              </div>;
            })}

            <h1 className="text-3xl font-bold my-2"> Register </h1>

            <form
              onSubmit={handleSubmit(async (values) => {
                sigup(values);
              })}
            >
              <input
                className="w-full bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="text"
                {...register("username", { required: true })}
                placeholder="Username"
              />
              {errors.username && (
                <p className="text-Softorange"> Username required </p>
              )}

              <input
                className="w-full bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="email"
                {...register("email", { required: true })}
                placeholder="E-mail"
              />
              {errors.email && (
                <p className="text-Softorange"> Email required </p>
              )}

              <input
                className="w-full bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="password"
                {...register("password", { required: true })}
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-Softorange"> Password required </p>
              )}

              <button className="bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-black px-4 py-2 rounded-md my-2">
                {" "}
                Register{" "}
              </button>
            </form>

            <Link to="/login">
              <p className="flex gap-x-2 justify-between">
                Ya tienes una cuenta? CLICK ME
              </p>
            </Link>

            <Link to="/techLogin">
              <strong>Quisieras ser Técnico? CLICK ME</strong>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterPage;