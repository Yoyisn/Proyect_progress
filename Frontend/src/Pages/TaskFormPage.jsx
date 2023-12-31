import { useNavigate, useParams, Link } from "react-router-dom";
import { useTasks } from "../Context/TasksContext";
import { useForm } from "react-hook-form";

import utc from "dayjs/plugin/utc";
import { useEffect } from "react";
import dayjs from "dayjs";

import Logo from "../assets/assets/images/image.png";
import celroto from "../assets/assets/images/celroto.png"
import tvroto from "../assets/assets/images/tvrotoimg.png"

dayjs.extend(utc);
function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();

  const { createTask, getTask, updateTask } = useTasks();

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("dispositive", task.dispositive);
        setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }
    navigate("/tasks");
  });


  return (
    <>
      <h1 className="flex font-abc text-6xl translate-y-[20px] justify-center">
        {" "}
        <Link to="/tasks"> ServiTech </Link>{" "}
        <img className="flex h-[60px]" src={Logo} alt="Logo Servitecnicos" />
      </h1>


      <div className="flex h-[calc(100vh-100px)] items-center justify-center">

        <div className="bg-Darkred max-w-md w-full p-10 shadow-inner hover:shadow-lg shadow-black hover:shadow-black rounded-md overflow-y-scroll max-h-[600px] scrollbar scrollbar-thumb-Grayishblue scrollbar-track-Darkgrayishblue">

          <h1 className="flex justify-center text-3xl font-abc my-2"> ¿Qué deseas resolver hoy? </h1>

          <form onSubmit={onSubmit}>
            <label htmlFor="title"> Title </label>
            <input
              className="w-full   bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
              autoFocus
            />

            <label htmlFor="description"> Descripción </label>
            <textarea
              className="w-full   bg-white text-black px-4 py-2 rounded-md my-2"
              rows="3"
              placeholder="Description"
              {...register("description", { required: true })}
              autoFocus
            ></textarea>

            <label>Digite su tipo de equipo:</label>
            <input
              type="text"
              placeholder="Movil, tv, pc portil, pc de mesa, otro..."
              className="w-full   bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
              {...register("dispositive", { required: true })}
            />

            <label htmlFor="date"> Date </label>
            <input
              className="w-full   bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
              type="date"
              {...register("date")}
            />

            <label> Sube el material audiovisual </label>
            <input
              accept="image/*"
              className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
              type="file"
              {...register("filePro")}
            />


            <label> Sube el material audiovisual </label>
            <input
              className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
              type="file"
              {...register("file-image2-to-fix")}
            />

            <label> Sube el material audiovisual </label>
            <input
              className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
              type="file"
              {...register("file-image2-to-fix")}
            />

            <button className="bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-black px-4 py-2 rounded-md my-2 w-[360px]">
              {" "}
              Save{" "}
            </button>
          </form>
        </div>
      </div>
      <div className="pointer-events-none">
        <img className="flex -translate-y-[600px]" src={celroto} alt="Celular roto" />
      </div>

      <div className="pointer-events-none">
        <img className="flex translate-x-[899px] -translate-y-[999px]" src={tvroto} alt="Televisor roto" />
      </div>

    </>
  );
}

export default TaskFormPage;
