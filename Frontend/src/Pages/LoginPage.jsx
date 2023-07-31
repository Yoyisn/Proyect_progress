import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useForm } from "react-hook-form";

import { useEffect } from "react";

function LoginPage() {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const { signin, isAuthenticated, errors: signinErrors } = useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if(isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

    return (
        <>
          <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            {
              signinErrors.map((error, i) => {
              <div key={i} className="bg-red-500 p-2 text-white text-center my-2"> { error } </div>
            })
          }

              <h1 className="text-2x1 font-bold"> LOGIN </h1>

            <form onSubmit={ onSubmit }>

              <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              type="email" {...register('email', {required:true})} placeholder="E-mail"/>
              { errors.email && (<p className="text-red-500"> Email required </p>) }

              <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              type="password" {...register('password', {required:true})} placeholder="Password"/>
              { errors.password && (<p className="text-red-500"> Password required </p>) }

              <button  className="my-2" type="submit"> Login </button>

             </form>

             <p className="flex gap-x-2 justify-between">
               Don't have you an account? <Link className="text-sky-500" to="/register"> Sign up </Link>
             </p>

            </div>
          </div>
        </>
    )
}

export default LoginPage;