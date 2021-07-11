const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const tasksRouter = require("./routes/task");

app.use(express.json()); // json support
app.use(tasksRouter);


// connect to database
mongoose
  .connect("mongodb://127.0.0.1:27017/sudhara", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((_) => {
      // success message
    app.listen(port, () => {
      console.log("application runs on port ", port);
    });
  })
  .catch((e) => {
      // fail to connect to database
    console.log("fail to connect database");
  });
