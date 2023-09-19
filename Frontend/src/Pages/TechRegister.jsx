import { useAuth } from "../Context/AuthContext";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function TechRegisterPage() {

  const { register, handleSubmit, formState:{ errors } } = useForm();

  const { sigupTecnico, isAuthenticated, errors: registerErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) navigate("/techProfile");
  }, [isAuthenticated]);

  return (
    <>
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {
            registerErrors.map((error, i) => {
              <div key={i} className="bg-red-500 p-2 text-white text-center"> { error } </div>
            })
        }

          <h1 className="text-3xl font-bold my-2"> Registro Tecnico </h1>

          <form onSubmit={ handleSubmit(async (values) => {
             sigupTecnico(values);
            }) }>

            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
            type="text" placeholder="Nombre Completo" {...register('name', {required: true})}/>
            { errors.name && (<p className="text-red-500"> Your name is required </p>) }

            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
             type="email" placeholder="correo" {...register('email', {required: true})}/>
             { errors.email && (<p className="text-red-500"> Email is required </p>) }

            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
             type="password"  placeholder="Contraseña" {...register('password', {required: true})}/>
             { errors.password && (<p className="text-red-500"> Password is required </p>) }

            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
             type="number"  placeholder="Numero Movil" maxLength={10} {...register('number', {required: true})}/>
            { errors.number && (<p className="text-red-500"> Number is required </p>) }
            
            <label> Sube tu hoja de vida </label>
            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
             type="file" {...register('file')}/> 
            

            <button className="bg-sky-500 text-white px-4 py-2 rounded-md my-2"> Register </button>

          </form>

          <p className="flex gap-x-2 justify-between">
              <strong>Already have an Technical account? you can login here:</strong> 
          </p>
          <button className="bg-sky-500 text-white px-4 py-2 rounded-md my-2"><Link to="/techLogin"> Login </Link></button>
          </div>
      </div> 
    </>
  );
};

export default TechRegisterPage;