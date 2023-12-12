import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useTasks } from "../Context/TasksContext";
import { Link } from 'react-router-dom';

import { Modal } from 'flowbite-react';
import utc from 'dayjs/plugin/utc';
import { useState } from "react";

import dayjs from 'dayjs';


dayjs.extend(utc);
function TaskCard({ task }) {


    const [openModal, setOpenModal] = useState(false);

    const { deleteTask } = useTasks();

    return (
        <>
            <div className="bg-Darkred max-w-md 
           w-full p-10 rounded-md shadow-inner hover:shadow-lg shadow-black hover:shadow-black">
                <header className="flex justify-between">
                    <h1 className="text-2xl font-bold">Problema: {task.title}</h1>
                    <div className="flex gap-x-2 items-center">
                        {/* <button className="bg-red-500 hover:bg-red-600 text-white px-4
                    py-2 rounded-md" onClick={() => {
                                deleteTask(task._id);
                            }}> Delete </button> */}

                        <button className="bg-red-500 hover:bg-red-600 text-white px-4
                    py-2 rounded-md" onClick={() => setOpenModal(true)}>Delete</button>

                        <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                            <Modal.Header />
                            <Modal.Body>
                                <div className="text-center">
                                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                        Are you sure you want to delete this problem?
                                    </h3>
                                    <div className="flex justify-center gap-4">
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-4
                    py-2 rounded-md" onClick={() => {
                                deleteTask(task._id);
                            }}> Delete </button>
                                        <button className="bg-Darkgrayishblue hover:bg-Grayishblue text-white hover:text-black px-4
                    py-2 rounded-md" onClick={() => setOpenModal(false)}>
                                            No, cancel
                                        </button>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <Link  className="bg-Darkgrayishblue hover:bg-Grayishblue text-white hover:text-black px-4
                    py-2 rounded-md" to={`/tasks/${task._id}`}> Edit </Link>
                    </div>
                </header>
                <p className="text-slate-300">Descripcion del problema: {task.description}</p>
                <strong>Tipo de equipo: {task.dispositive}</strong>
                <p> Publicado el: {dayjs(task.date).utc().format('DD/MM/YYYY')}</p>
            </div>
            
        </>
    );
};

export default TaskCard;