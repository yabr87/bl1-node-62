const { Router } = require('express');

const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasksControllers');

const router = Router();

router.route('/').get(getTasks).post(createTask);
router.route('/:taskId').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = { tasksRouter: router };
