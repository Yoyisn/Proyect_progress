import FilteredTaskCards from "./FilteredTaskCards";
import { useTasks } from "../Context/TasksContext";
import { useState } from "react";

function FilterProblemCards() {

    const { tasks } = useTasks();

    const [filterText, setFilterText] = useState('');
    const taskData = tasks;

    const filteredTaskData = taskData.filter( taskData => taskData.dispositive.toLowerCase().includes(filterText.toLowerCase()) );

    return(
        <>
            <input onChange={ (e) => setFilterText(e.target.value) } value={filterText} className='w-full bg-Grayishblue text-black px-4 py-2 rounded-sm my-2'
             type="text" placeholder='Tipo de dispositivo (Movil, pc de mesa, pc portatil, otro...)'/>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 mt-6'>
             {
                 filteredTaskData.map(fData => (
                     <FilteredTaskCards tasks={fData} key={fData._id}/>
                ))
            }
            </div>
        </>
    );
};

export default FilterProblemCards;