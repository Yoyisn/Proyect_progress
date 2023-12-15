import { Textarea, Button } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import { Modal } from 'flowbite-react';

import { useQuote } from "../Context/QuotesContext";
//import { useTasks } from "../Context/TasksContext";
import { useAuth } from "../Context/AuthContext";

import { useState, useEffect } from "react";

function Textareaplug({ tasks }) {

    const { handleSubmit, control, reset, setValue} = useForm();
    const [isModalOpen, setModalOpen] = useState(false);

    const { createQuote } = useQuote();
    const { tecnicoo } = useAuth();

    console.log(tecnicoo);
    
    const otherData = {
        tech_id: tecnicoo.id,
        name: tecnicoo.name,
        email: tecnicoo.email,
        taskId: tasks._id,
        userTasks: tasks.user._id
    };

    useEffect( () => {
        Object.keys(otherData).forEach( (key) => {
            setValue(key, otherData[key]);
        });
    }, [setValue, otherData]);

    const onSubmit = (data) => {
        try {

            const tasksProblem = otherData.taskId;

            const dataToSend = {
                ...data, tasksProblem
            };

            createQuote(dataToSend);

            setTimeout(() => {
                setModalOpen(false);
            }, 2500);

            reset();
        } catch (error) {
            console.log(error);
        }
    };

   

    return (
        <>
            <div className="relative w-[20rem] ">
                <form onSubmit={ handleSubmit( onSubmit ) }>

                <Controller name="textArea" rules={{ required: 'You must justify your price' }} control={ control } defaultValue="" render={ ({ field, fieldState }) => (
                    <>
                        <Textarea {...field} placeholder="Justify your price" className="text-white" variant="static" rows={8}/>
                        { fieldState.error && <p className="text-Softorange">{fieldState.error.message}</p> }
                    </>
                )}/>

            

                <Controller name="tecnico_id" control={control}
                    defaultValue={otherData.tech_id} render={({ field }) => 
                    <input className="border p-2 mr-2 opacity-0 cursor-not-allowed absolute" {...field} />} />

                <Controller name="tecnico_name" control={control}
                    defaultValue={otherData.name} render={({ field }) => 
                    <input className="border p-2 mr-2 opacity-0 cursor-not-allowed absolute"{...field} />} />

                <Controller name="tecnico_email" control={control}
                    defaultValue={otherData.email} render={({ field }) => 
                    <input className="border p-2 mr-2 opacity-0 cursor-not-allowed absolute"{...field} />} />

                <Controller name="task_id" control={control}
                    defaultValue={otherData.taskId} render={({ field }) => 
                    <input className="border p-2 mr-2 opacity-0 cursor-not-allowed absolute"{...field} />} />

                <Controller name="task_user" control={control}
                    defaultValue={otherData.userTasks} render={({ field }) => 
                    <input className="border p-2 mr-2 opacity-0 cursor-not-allowed absolute"{...field} />} />



                <Controller name="dropDown" rules={{ required: 'You must put the price' }} defaultValue="" control={ control } render={ ({ field, fieldState }) => (
                    <>
                        Select a price:
                        <select className="text-black mt-10" {...field}>
                            <option value="5000">5.000</option>
                            <option value="10000">10.000</option>
                            <option value="15000">15.000</option>
                            <option value="20000">20.000</option>
                            <option value="25000">25.000</option>
                            <option value="30000">30.000</option>
                            <option value="35000">35.000</option>
                            <option value="40000">40.000</option>
                            <option value="45000">45.000</option>
                            <option value="50000">50.000</option>
                            <option value="55000">55.000</option>
                            <option value="60000">60.000</option>
                            <option value="65000">65.000</option>
                            <option value="70000">70.000</option>
                            <option value="75000">75.000</option>
                            <option value="80000">80.000</option>
                            <option value="85000">85.000</option>
                            <option value="90000">90.000</option>
                            <option value="95000">95.000</option>
                            <option value="100000">100.000</option>
                        </select>
                        {fieldState.error && <p className="text-Softorange">{fieldState.error.message}</p>}
                    </>
                )}/>

                <div className="flex w-[100%] justify-between py-1.5">
                <div className="flex gap-2">
                <Button type="submit" size="sm" className="rounded-md" onClick={() => setModalOpen(true)}>
                Publicar Comentario
                </Button>
               </div>

               <Modal show={isModalOpen} size="md" onClose={() => setModalOpen(false)} popup>
                    <Modal.Header />
                        <Modal.Body>
                        <div className="text-center">
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Tu cotizacion ha sido enviada correctamente
                            </h3>
                         </div>
                    </Modal.Body>
                </Modal>

            </div>
                </form>
            </div>
        </>
    );
};

export default Textareaplug;
