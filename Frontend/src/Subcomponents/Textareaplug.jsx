import { Textarea, Button } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import { Modal } from 'flowbite-react';


import { useState } from "react";

function Textareaplug() {

    const { handleSubmit, control, reset} = useForm();
    const [isModalOpen, setModalOpen] = useState(false);

    const onSubmit = (data) => {
        console.log(data);

        setTimeout(() => {
            setModalOpen(false);
        }, 2500);

        reset();
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

                <Controller name="dropDown" rules={{ required: 'You must put the price' }} defaultValue="" control={ control } render={ ({ field, fieldState }) => (
                    <>
                        Select a price:
                        <select className="text-black" {...field}>
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
