import GeneralTasksCard from '../Components/GeneralTasksCard.jsx';
import { useTasks } from '../Context/TasksContext.jsx';
import { useEffect } from 'react';

function PageProblems() {

    const { getAllTasks, tasks } = useTasks();

    useEffect(() => {
        getAllTasks();
    }, []);

    return(
        <>
          <input className='w-full bg-Grayishblue text-black px-4 py-2 rounded-md my-2' type="text" placeholder='Tipo de dispositivo (Movil, pc de mesa, pc portatil, otro...)'/>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 mt-6'>
            {
                tasks.map(task => (
                    <GeneralTasksCard task={task} key={task._id} />
                ))
            }
          </div>   
        </>
    );
};

export default PageProblems;