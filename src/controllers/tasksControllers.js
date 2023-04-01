const {
  getTasksService,
  getTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} = require('../services/tasksSevices');

const getTasks = async (req, res, next) => {
  const tasks = await getTasksService();
  res.status(200).json(tasks);
};

const getTask = async (req, res, next) => {
  const { taskId } = req.params;
  const task = await getTaskService(taskId);
  res.status(200).json(task);
};

const createTask = async (req, res, next) => {
  const createdTask = await createTaskService(req.body);
  res.status(201).json(createdTask);
};

const updateTask = async (req, res, next) => {
  const { taskId } = req.params;
  const updatedTask = await updateTaskService(taskId, req.body);
  res.status(200).json(updatedTask);
};

const deleteTask = async (req, res, next) => {
  const { taskId } = req.params;
  const deletedTaskId = await deleteTaskService(taskId);
  res.status(200).json({ id: deletedTaskId });
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
