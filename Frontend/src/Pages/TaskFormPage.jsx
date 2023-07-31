import { useTasks } from '../Context/TasksContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function TaskFormPage() {

    const { register, handleSubmit } = useForm();

    const { createTask } = useTasks();

    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        createTask(data);
        navigate('/tasks');
    });

    return(
        <>
             <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                <form onSubmit={onSubmit}>
                    <input  className='w-full  bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                     type='text' placeholder='Title' 
                     {...register("title")} autoFocus/>

                    <textarea className='w-full  bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                     rows="3" placeholder='Description' {...register("description")} 
                     autoFocus></textarea>

                    <button type='submit'> Save </button>
                </form>
            </div>
        </>
    );
};

export default TaskFormPage;