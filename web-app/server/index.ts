import express from 'express';
import { getGPTResponse } from '../lib/gpt-api';
import { SYSTEM_MESSAGE } from '../lib/system-message';

const app = express();
app.use(express.json());

let tasks = [];

app.post('/createTask', (req, res) => {
  const { objective } = req.body;
  const id = tasks.length + 1;
  const steps = getGPTResponse(objective);
  const status = 'pending';
  const task = { id, objective, steps, status };
  tasks.push(task);
  res.json({ message: SYSTEM_MESSAGE.TASK_CREATED, task });
});

app.put('/updateTask/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const task = tasks.find(task => task.id === Number(id));
  if (task) {
    task.status = status;
    res.json({ message: SYSTEM_MESSAGE.TASK_UPDATED, task });
  } else {
    res.status(404).json({ message: SYSTEM_MESSAGE.SYSTEM_ERROR });
  }
});

app.delete('/deleteTask/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id === Number(id));
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    res.json({ message: SYSTEM_MESSAGE.TASK_DELETED });
  } else {
    res.status(404).json({ message: SYSTEM_MESSAGE.SYSTEM_ERROR });
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));

export default app;