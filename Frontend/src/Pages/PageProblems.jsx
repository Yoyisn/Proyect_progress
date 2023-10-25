import FilterProblemCards from '../Components/FilterProblemCards.jsx';
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
            <FilterProblemCards />
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