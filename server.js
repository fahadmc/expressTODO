const expres=require("express");
const todoRoute = require("./routes/todoRoute");
require("dotenv").config();
const app=expres();

app.use(express.json())
app.use(todoRoute)
app.listen(process.env.PORT,(err)=>{
    console.log("server is runnning:")
})
