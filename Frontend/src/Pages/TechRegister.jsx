import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

function TechRegisterPage() {

  const { register, handleSubmit } = useForm();

  return (
    <>
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">

          <h1 className="text-3xl font-bold my-2"> Registro Tecnico </h1>

          <form onSubmit={ handleSubmit(async (values) => {
             console.log(values);
            }) }>

            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
            type="text" placeholder="Nombre Completo" {...register('nombre')}/>

            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
             type="email" placeholder="correo" {...register('correo')}/>

            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
             type="password"  placeholder="Contraseña" {...register('contraseña')}/>

            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
             type="number"  placeholder="Numero Movil" maxLength={10} {...register('numero')}/>

            
            <label> Sube tu hoja de vida </label>
            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
             type="file" {...register('file')}/> 
            

            <button className="bg-sky-500 text-white px-4 py-2 rounded-md my-2"> Register </button>

          </form>

          <p className="flex gap-x-2 justify-between">
              Already have an account? <Link className="text-sky-500" to="/login"> Login </Link>
          </p>

          </div>
      </div>  
    </>
  );
};

export default TechRegisterPage;