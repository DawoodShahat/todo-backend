import { Router } from 'express';
import { createNewTask, deleteTask, getAllTasks, updateTask } from './handlers/task';

const router = new Router();

router.get('/task', getAllTasks); 
router.post('/task/new', createNewTask);
router.delete('/task/:id', deleteTask);
router.put('/task/:id', updateTask);

export default router;