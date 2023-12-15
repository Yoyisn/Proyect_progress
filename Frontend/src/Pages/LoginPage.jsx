import Logo from "../assets/assets/images/image.png";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

import { useForm } from "react-hook-form";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import tecnicoazul from "../assets/assets/images/tecnicoazul.png"

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, isAuthenticated, errors: signinErrors } = useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated]);

  return (
    <>
      <div className="">
        <h1 className="flex font-abc text-6xl translate-y-[140px] justify-center">
          {" "}
          <Link to="/"> ServiTech </Link>{" "}
          <img
            className="flex h-[60px]"
            src={Logo}
            alt="Logo Servitecnicos"
          />
        </h1>

        <div className="shadow-inner hover:shadow-lg px-5 shadow-black hover:shadow-black py-5 mt-10 rounded-md bg-Bgblue max-h-[720px]">

          <div className="flex flex-col h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-Darkred max-w-md w-full p-10 shadow-inner hover:shadow-lg shadow-black hover:shadow-black mt-10 rounded-md">
              {signinErrors.map((error, i) => {
                <div
                  key={i}
                  className="bg-red-500 p-2 text-white text-center my-2"
                >
                  {" "}
                  {error}{" "}
                </div>;
              })}

              <h1 className="text-3xl font-abc  flex justify-center my-2"> INICIA SESION </h1>

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

                <button className=" bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-black px-4 py-2 rounded-md my-2 w-[360px]">
                  {" "}
                  Login{" "}
                </button>
              </form>


            </div>
            <Link to="/register">
              <strong className="flex gap-x-2 justify-between mt-4 hover:text-lg ">
                No tienes una cuenta? crea una! CLICK ME
              </strong>
            </Link>

            <Link to="/techLogin">
              <strong className="flex gap-x-2 justify-between mt-2 hover:text-lg">Eres Técnico? CLICK ME</strong>
            </Link>

          </div>
          <div className="pointer-events-none">
            <img className="flex translate-x-[899px] -translate-y-[850px]" src={tecnicoazul} alt="Televisor roto" />
          </div>
        </div>
        <Footer />

      </div>
    </>
  );
}

export default LoginPage;
