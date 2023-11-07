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
            <NavBarTechs />
            <FilterProblemCards />
        </>
    );
};

export default PageProblemsTechs;