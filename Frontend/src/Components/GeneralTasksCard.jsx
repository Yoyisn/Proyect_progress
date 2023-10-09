import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';

dayjs.extend(utc);
function GeneralTasksCard({ task }) {
  return (
    <>
    <div className="bg-zinc-800 max-w-md 
           w-full p-10 rounded-md">
                <header className="flex justify-between">
                <h1 className="text-2xl font-bold">Problema: { task.title }</h1>
                </header>
                <p className="text-slate-300">Descripcion del problema: {task.description}</p>
                <p> Publicado el: { dayjs(task.date).utc().format('DD/MM/YYYY') }</p>
                <strong> Publicado por: { /*task.user*/ } </strong>
            </div>
    </>
  );
};

export default GeneralTasksCard;