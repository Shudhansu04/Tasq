const express = require("express")
const router = express.Router()

const { getAllTasks, createTask , getTask , deleteTask , updateTask }
     = require("../controller/tasks.js")

router.get("/getall", getAllTasks);         // GET all tasks
router.post("/create", createTask);      // POST a new task
router.get("/get/:id", getTask);             // GET a specific task by ID
router.patch("/update/:id", updateTask); // PATCH update a task
router.delete("/delete/:id", deleteTask); // DELETE a task


module.exports = router