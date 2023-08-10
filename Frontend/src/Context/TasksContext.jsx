import {createTaskRequest, getTasksRequest, deleteTaskRequest} from '../Api/tasks.js';
import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }

    return context;
};

export function TaskProvider({ children }) {

    const [ tasks, setTasks] = useState([]);

    const getTask = async () => {
        try {
            const res = await getTasksRequest();
            setTasks(res.data);
        } catch (error) {
            console.log(error)
        }
    };

    const createTask = async (task) => {
        const res = await createTaskRequest(task);
        console.log(res)
    };

    const deleteTask = async (id) => {
        try {

            const res = await deleteTaskRequest(id);
            if(res.status === 204) setTasks(tasks.filter((task) => task._id !== id));

        } catch (error) {
            console.log(error);
        }
    };

    return(
        <TaskContext.Provider value={{tasks, createTask, getTask, deleteTask}}>
            { children }
        </TaskContext.Provider>
    );
};