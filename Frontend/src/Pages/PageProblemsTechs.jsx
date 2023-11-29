import FilterProblemCards from '../Components/FilterProblemCards.jsx';
import NavBarTechs from '../Components/NavBarTechs.jsx';
import { useTasks } from '../Context/TasksContext.jsx';

import { useEffect } from 'react';
 
function PageProblemsTechs() {

    const { getAllTasks} = useTasks();

    useEffect(() => {
        getAllTasks();
    }, []);

    return(
        <>
        <div className='shadow-inner hover:shadow-lg px-5 shadow-black hover:shadow-black py-5 mt-10 rounded-md bg-Darkred'>

            <NavBarTechs />
            <FilterProblemCards />
        </div>
        </>
    );
};

export default PageProblemsTechs;