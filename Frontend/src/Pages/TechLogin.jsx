import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useForm } from "react-hook-form";

import { useEffect } from "react";
import Logo from "../assets/assets/images/image.png";
import Footer from "../Components/Footer";


function TechLogin() {

  const { tecnicoSignin, isAuthenticated, errors: signinErrors } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    tecnicoSignin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/techProfile");
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
      <div className="shadow-inner hover:shadow-lg px-5 shadow-black hover:shadow-black py-5 mt-10 rounded-md bg-Darkredlow">


        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
          <div className="bg-Bgblue max-w-md w-full p-10 shadow-inner hover:shadow-lg shadow-black hover:shadow-black mt-10 rounded-md">
            {signinErrors.map((error, i) => {
              <div
                key={i}
                className="bg-Softorange p-2 text-black text-center my-2"
              >
                {" "}
                {error}{" "}
              </div>;
            })}

            <h1 className="text-3xl font-bold my-2"> LOGIN TECNICO </h1>

            <form onSubmit={onSubmit}>
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
                Login{" "}
              </button>
            </form>

            <Link to="/techRegister">
              <p className="flex gap-x-2 justify-between">
                Aún no tienes tu cuenta de Técnico? CLICK ME
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechLogin;