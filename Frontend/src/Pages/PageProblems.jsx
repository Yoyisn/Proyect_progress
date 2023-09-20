import { useTasks } from '../Context/TasksContext.jsx';
import TaskCard from '../Components/TaskCard.jsx';
import { useEffect } from 'react';

function PageProblems() {

    const { getAllTasks, tasks } = useTasks();

    useEffect(() => {
        getAllTasks();
    }, []);

    return(
        <>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 mt-6'>
            {
                tasks.map(task => (
                    <TaskCard task={task} key={task._id}/>
                ))
            }
          </div>   
        </>
    );
};

export default PageProblems;