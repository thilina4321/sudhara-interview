const Task = require('../model/task')

// read
exports.getTasks = async(req, res) => {
    try {
        const tasks = await Task.find()
        res.send(tasks)
    } catch (error) {
        res.status(500).send('something went wrong')

    }
};


// get one
exports.getOneTask = async(req, res) => {
    const {id} = req.params
    try {
        const task = await Task.findById(id)
        res.send(task)
    } catch (error) {
        res.status(500).send('something went wrong')

    }
};

// update
exports.updateTask = async(req,res)=>{
    const {id} = req.params
    const data = req.body
    try {
        const task = await 
        Task.findByIdAndUpdate(id, {...data}, {new:true})
        res.send(task)
    } catch (error) {
        res.status(500).send('something went wrong')

    }
}

// delete
exports.deleteTask = async(req,res)=>{
    const {id} = req.params
    try {
        const task = await 
        Task.findByIdAndDelete(id)
        res.send(task)
    } catch (error) {
        res.status(500).send('something went wrong')

    }
}

// create
exports.createTask = async(req, res) => {
  const { name, value } = req.body;

  try {
      const task = await Task.create({name, value})
      res.status(201).send(task)
  } catch (error) {
      res.status(500).send('something went wrong')
  }

};

