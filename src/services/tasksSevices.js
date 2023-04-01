const fs = require('fs/promises');
const path = require('path');

const db = path.join(process.cwd(), 'src', 'db', 'tasks.json');

const getTasksService = async () => {
  const rawData = await fs.readFile(db);
  const parsedData = JSON.parse(rawData);
  return parsedData;
};

const getTaskService = async () => {};

const createTaskService = async () => {};

const updateTaskService = async () => {};

const deleteTaskService = async () => {};

module.exports = {
  getTasksService,
  getTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
