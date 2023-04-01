const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

const db = path.join(process.cwd(), 'src', 'db', 'tasks.json');

const getTasksService = async () => {
  const rawData = await fs.readFile(db);
  const parsedData = JSON.parse(rawData);
  return parsedData;
};

const getTaskService = async id => {
  const tasks = await getTasksService();
  const task = tasks.find(task => String(id) === String(task.id));
  if (!task) {
    throw new Error('task not found');
  }
  return task;
};

const createTaskService = async body => {
  const tasks = await getTasksService();

  const newTask = {
    id: crypto.randomUUID(),
    title: body.title,
    completed: body.completed,
  };

  tasks.push(newTask);

  await fs.writeFile(db, JSON.stringify(tasks, null, 2));

  return newTask;
};

const updateTaskService = async (id, body) => {
  const tasks = await getTasksService();
  const task = tasks.find(task => String(id) === String(task.id));

  task.title = body.title;
  task.completed = body.completed;

  await fs.writeFile(db, JSON.stringify(tasks, null, 2));
  return task;
};

const deleteTaskService = async id => {
  const tasks = await getTasksService();
  const filteredTasks = tasks.filter(task => String(id) !== String(task.id));
  await fs.writeFile(db, JSON.stringify(filteredTasks, null, 2));
  return id;
};

module.exports = {
  getTasksService,
  getTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
