import { useTasks } from "../Context/TasksContext";
import GeneralTasksCard from "./GeneralTasksCard";
import { useState } from "react";





function FilterProblemCards() {

    //const [filteredData, setFilteredData] = useState([]);
    //const [filter, setFilter] = useState('');

    const { tasks } = useTasks();

    const [filterText, setFilterText] = useState('');
    const taskData = tasks;

    const filteredTaskData = taskData.filter( taskData => taskData.dispositive.toLowerCase().includes(filterText.toLowerCase()) );

    return(
        <>
            <input onChange={ (e) => setFilterText(e.target.value) } value={filterText} className='w-full bg-Grayishblue text-black px-4 py-2 rounded-md my-2'
             type="text" placeholder='Tipo de dispositivo (Movil, pc de mesa, pc portatil, otro...)'/>

             {
                 filteredTaskData.map(fData => (
                    <GeneralTasksCard task={fData} key={fData._id}/>
                ))
            }
        </>
    );
};

export default FilterProblemCards;