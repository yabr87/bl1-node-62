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

const getTask = async (req, res, next) => {};

const createTask = async (req, res, next) => {};

const updateTask = async (req, res, next) => {};

const deleteTask = async (req, res, next) => {};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
