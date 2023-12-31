import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useForm } from "react-hook-form";

import { useEffect } from "react";
import Logo from "../assets/assets/images/image.png";
import Footer from "../Components/Footer";
import tool from "../assets/assets/images/tool.png";
import destornillador from "../assets/assets/images/desto.webp";


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
      <div className="shadow-inner hover:shadow-lg px-5 shadow-black hover:shadow-black py-5 rounded-md bg-Darkredlow h-[800px]">


        <div className="flex flex-col h-[calc(100vh-100px)] items-center justify-center">
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

            <h1 className="text-3xl font-abc my-2 flex justify-center"> INICIO SESION TECNICO </h1>

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

              <button className="bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-black px-4 py-2 rounded-md my-2 w-[360px]">
                {" "}
                Login{" "}
              </button>
            </form>

          </div>
          <Link to="/techRegister">
            <strong className="flex gap-x-2 justify-between mt-4 hover:text-lg">
              Aún no tienes tu cuenta de Técnico? CLICK ME
            </strong>
          </Link>
        </div>
        <div className="pointer-events-none">
          <img className="flex translate-x-[990px] -translate-y-[850px] w-[25%] h-[25%]" src={tool} alt="Herramientas" />
        </div>
        <div className="pointer-events-none">
          <img className="flex -translate-y-[600px] w-[25%] h-[25%]" src={destornillador} alt="destornillador" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechLogin;