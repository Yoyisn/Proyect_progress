import { useAuth } from "../Context/AuthContext";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Logo from "../assets/assets/images/image.png";
import Footer from "../Components/Footer";


function TechRegisterPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { sigupTecnico, isAuthenticated, errors: registerErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/techProfile");
  }, [isAuthenticated]);

  return (
    <>
      <h1 className="flex font-abc text-6xl translate-y-[60px] justify-center">
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

          <div className="bg-Bgblue max-w-md p-10 shadow-inner hover:shadow-lg shadow-black hover:shadow-black mt-10 rounded-md overflow-y-scroll max-h-[700px] scrollbar scrollbar-thumb-Grayishblue scrollbar-track-Darkgrayishblue">
            {registerErrors.map((error, i) => {
              <div key={i} className="bg-Softorange p-2 text-black text-center">
                {" "}
                {error}{" "}
              </div>;
            })}

            <h1 className="text-3xl my-2 font-abc  flex justify-center"> REGISTRO TECNICO </h1>

            <form
              onSubmit={handleSubmit(async (values) => {
                sigupTecnico(values);
              })}
            >
              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2 hover:list-disc "
                type="text"
                placeholder="Nombre Completo"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-Softorange"> Tu nombre es requerido </p>
              )}

              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="email"
                placeholder="Correo"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-Softorange"> El Email es requerido </p>
              )}

              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="password"
                placeholder="Contraseña"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-Softorange"> Contrasena es requerida </p>
              )}

              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="number"
                placeholder="Numero Movil"
                maxLength={10}
                {...register("number", { required: true })}
              />
              {errors.number && (
                <p className="text-Softorange"> El numero es requerido </p>
              )}

              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="text"
                placeholder="Direccion de residencia"
                {...register("direccion", { required: true })}
              />
              {errors.number && (
                <p className="text-Softorange">La direccion es requerida </p>
              )}

              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="number"
                placeholder="Codigo postal"
                maxLength={6}
                {...register("Codigo postal", { required: true })}
              />
              {errors.number && (
                <p className="text-Softorange"> El codigo postal es requerido </p>
              )}

              <input
                className="w-full  bg-Grayishblue text-Darkgrayishblue px-4 py-2 rounded-md my-2"
                type="date"
                placeholder="Fecha de nacimiento"

                {...register("Fecha nacimiento", { required: true })}
              />
              {errors.number && (
                <p className="text-Softorange"> Tu fecha de nacimiento es requerida </p>
              )}


              <label> Sube tu certificado de basica Primaria </label>
              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="file"
                {...register("file-Primaria")}
              />

              <label> Sube tu certificado de basica Secundaria </label>
              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="file"
                {...register("file-Secundaria")}
              />

              <label> Sube tu certificado de estudios Tecnico o Tecnologo </label>
              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="file"
                {...register("file-Tecnico-Tecnologo")}
              />

              <label> Sube tu certificado de estudios Universitarios  </label>
              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="file"
                {...register("file-Universidad")}
              />

              <label> Sube tu certificado de estudios de idiomas opcional </label>
              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="file"
                {...register("file-Idiomas")}
              />

              <label> Sube tu certificado de antecedentes penales  </label>
              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="file"
                {...register("file-Antecedentes")}
              />

              <label> Tienes alguna discapacidad? opcional  </label>
              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="file"
                {...register("file-Discapacidad")}
              />

              <label> Sube tu certificados o historial de trabajos realizados  </label>
              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="file"
                {...register("file-Trabajos-realizados")}
              />

              <label> Sube tu certificado de trabajos anteriores  </label>
              <input
                className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
                type="file"
                {...register("file-Extrabajos")}
              />



              <button className="bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-black px-4 py-2 rounded-md my-2 w-[355px]">
                {" "}
                Registrarse{" "}
              </button>
            </form>

          </div>
            <Link to="/techLogin">
              <p className="flex gap-x-2 justify-between mt-4 hover:text-lg">
                <strong>Ya tienes una cuenta de Técnico? Inicia sesión CLICK ME</strong>
              </p>
            </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechRegisterPage;