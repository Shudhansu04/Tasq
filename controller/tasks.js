const Task = require("../models/task.js");
const asyncWrapper = require("../middleware/async.js");
const CustomError = require("../middleware/custom-error.js");

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ success: true, count: tasks.length, data: tasks });
});


const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, data: task });
});


const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findById(taskID);

    if (!task) {
        return next(new CustomError(`No task found with ID: ${taskID}`, 404));
    }

    res.status(200).json({ success: true, data: task });
});


const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;

    const task = await Task.findByIdAndUpdate(taskID, req.body, {
        new: true,
        runValidators: true,
    });

    if (!task) {
        return next(new CustomError(`No task found with ID: ${taskID}`, 404));
    }

    res.status(200).json({ success: true, data: task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;

    const task = await Task.findByIdAndDelete(taskID);

    if (!task) {
        return next(new CustomError(`No task found with ID: ${taskID}`, 404));
    }

    res.status(200).json({ success: true, message: "Task deleted successfully." });
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};
