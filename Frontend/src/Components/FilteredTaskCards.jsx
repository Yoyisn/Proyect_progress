import utc from 'dayjs/plugin/utc';
import TimeAgo from './TimeAgo';
import dayjs from 'dayjs';
import Textareaplug from '../Subcomponents/Textareaplug';
import PrecioPlug from '../Subcomponents/PrecioPlug';

dayjs.extend(utc);

function FilteredTaskCards({ tasks }) {
  return (
    <>
      <div className="bg-Bgbluelow max-w-md 
           w-full p-10 rounded-md shadow-inner hover:shadow-lg shadow-black hover:shadow-black">

        <header className="flex justify-between">
          <h1 className="text-2xl font-bold">Problema: {tasks.title}</h1>
        </header>        
        <p className="text-slate-300">Descripcion del problema: {tasks.description}</p>
        <strong>Tipo de equipo: {tasks.dispositive}</strong>
        <p> Publicado hace: <TimeAgo date={tasks.date} /></p>

        <Textareaplug />
        <PrecioPlug />
      </div>
    </>
  );
};

export default FilteredTaskCards;