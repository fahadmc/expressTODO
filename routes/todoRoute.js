const express= require("express");
const todoController=("../controller/todocontroller");
const router =express.Router();

router.get("/todos",todoController.getTodos);
router.post("/todos",todoController.addTodos);
router.get("/todos/:id",todoController.getTodoById);
router.put("/todos/:id",todoController.editTodo);
router.delete("/todos/:id",todoController.deletetodo);


module.exports=router;
