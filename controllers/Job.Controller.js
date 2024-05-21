const {JobModel} = require("../models");

const createJobPost = async (req,res) => {
    try{

        const {title,description,salary,location,company} = req.body;
        const newJobPost = new JobModel({
            title,
            description,
            salary,
            company,
            location
        });
        
        await newJobPost.save();

        res.status(201).json({
            message : "Job post creation success"
        });

    }catch(error){

        console.log(error);

        res.status(500).json({
            error : "SOMETHING WENT WRONG"
        });
    }
}

const listJobs = async (req,res) => {
    try{
        const jobs = await JobModel.find();
        res.status(200).json({
            jobs
        })
    }catch(error){
        console.log(error);

        res.status(500).json({
            error : "SOMETHING WENT WRONG"
        });
    }
}

const updateJob = async (req,res) => {
    try{
        const {jobId} = req.params 
        await JobModel.findByIdAndUpdate(jobId,req.body)
        const updatedJob = await JobModel.findById(jobId);
        res.status(200).json({
            message: "update successfull",
            updatedJob
        })
    }catch(error){
        console.log(error);

        res.status(500).json({
            error : "SOMETHING WENT WRONG"
        });
    }
}

const deleteJob = async (req,res) => {
    try{
        const {jobId} = req.params 
        await JobModel.findByIdAndDelete(jobId,req.body)
        res.status(200).json({
            message: "Delete successfull"
        })
    }catch(error){
        console.log(error);

        res.status(500).json({
            error : "SOMETHING WENT WRONG"
        });
    }
}

module.exports = {
    createJobPost,
    listJobs,
    updateJob,
    deleteJob
}