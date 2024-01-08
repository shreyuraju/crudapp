const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req, res) => {
    // res.send("HIIIII")
    const task = await TaskModel.find()
    res.send(tasks)
};

module.exports.saveTask = (req, res) => {
    const {task} = req.body
    TaskModel.create({task})
    .then((data) => {
        console.log("Saved Successfully");
        res.status(201).send(data);
    }).catch((err) => {
        console.log(err);
        res.send({error:err,msg:"Somthing Went Wrong"});
    });
};

module.exports.updateTask = (req, res) => {
    const {id} = req.parms
    const {task} = req.body
    TaskModel.findByIdAndUpdate(id, {task})
    .then(() => res.send("updated Successfully"))
    .catch((err) => {
        console.log(err);
        res.send({error:err,msg:"Somthing Went Wrong"});
    });
};

module.exports.deleteTask = (req, res) => {
    const {id} = req.parms
    
    TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
        console.log(err);
        res.send({error:err,msg:"Somthing Went Wrong"});
    });
};