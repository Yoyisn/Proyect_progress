import { Router } from 'express';
import { authRequired } from '../Middlewares/validateToken.js';
import { getTasks, createTask, getTask, updateTask, deleteTasks } from '../Controllers/tasks.controller.js';

const router = Router();

router.get('/tasks', authRequired, getTasks);

router.get('/tasks/:id', authRequired, getTask);

router.post('/tasks', authRequired, createTask);

router.put('/tasks/:id', authRequired, updateTask);

router.delete('/tasks/:id', authRequired, deleteTasks);

export default router;