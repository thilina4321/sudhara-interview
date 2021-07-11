const express = require("express");
const router = express.Router();

const taskController = require("../controller/tasks");

router.get("/tasks", taskController.getTasks);
router.get("/one-task/:id", taskController.getOneTask);
router.patch("/update-task/:id", taskController.updateTask);
router.delete("/delete-task/:id", taskController.deleteTask);
router.post("/create-task", taskController.createTask);

module.exports = router;
