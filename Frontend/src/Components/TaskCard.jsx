import { useTasks } from "../Context/TasksContext";
import { Link } from 'react-router-dom';
import utc from 'dayjs/plugin/utc';

import dayjs from 'dayjs';

dayjs.extend(utc);
function TaskCard({ task }) {

    const { deleteTask } = useTasks();

    return (
        <>
            <div className="bg-Darkred max-w-md 
           w-full p-10 rounded-md shadow-inner hover:shadow-lg shadow-black hover:shadow-black">
                <header className="flex justify-between">
                    <h1 className="text-2xl font-bold">Problema: {task.title}</h1>
                    <div className="flex gap-x-2 items-center">
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4
                    py-2 rounded-md" onClick={() => {
                                deleteTask(task._id);
                            }}> Delete </button>

                        <Link className="bg-blue-500 hover:bg-blue-600 text-white px-4
                    py-2 rounded-md" to={`/tasks/${task._id}`}> Edit </Link>
                    </div>
                </header>
                <p className="text-slate-300">Descripcion del problema: {task.description}</p>
                <strong>Tipo de equipo: {task.dispositive}</strong>
                <p> Publicado el: {dayjs(task.date).utc().format('DD/MM/YYYY')}</p>
            </div>
        </>
    );
};

export default TaskCard;