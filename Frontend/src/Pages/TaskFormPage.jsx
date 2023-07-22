import { useForm } from 'react-hook-form';

function TaskFormPage() {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return(
        <>
         <div>
            <form onSubmit={ onSubmit }>

                <input  {...register('Title')} type="text" placeholder="Title" autoFocus/>
                <textarea  {...register('Description')} rows="3" placeholder="Description"></textarea>
                <button> SAVE </button>

            </form>
         </div>
        </>
    );
};

export default TaskFormPage;