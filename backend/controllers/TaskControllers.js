const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req, res) => {
    // res.send("HIIIII")
    const task = await TaskModel.find()
    res.send(tasks)
};

module.exports.getTasks = (req, res) => {
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