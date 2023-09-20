import { useTasks } from '../Context/TasksContext.jsx';
import TaskCard from '../Components/TaskCard.jsx';
import { useEffect } from 'react';

import NavBar from '../Components/NavBar.jsx';
import { Link } from 'react-router-dom';

function TasksPage() {

    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);

    if(tasks.length === 0) return (
        <div> 
            <NavBar />  
            <h1> No tienes problemas? Sube uno </h1> 
        </div> 
    );

    return(
        <>
        <NavBar />

        <strong> <Link to='/comunityProblems'> == Podras ver tus problemas subidos conmigo, clic me! == </Link> </strong>

        <br />

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2'>
            {
                tasks.map(task => (
                    <TaskCard task={task} key={task._id}/>
                ))
            }
          </div> 
        </>
    );
};

export default TasksPage;