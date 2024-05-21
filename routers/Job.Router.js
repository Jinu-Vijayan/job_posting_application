const express = require("express");
const { createJobPost, listJobs, updateJob, deleteJob } = require("../controllers");

const JobRouter = express.Router();

JobRouter.post("/create_job",createJobPost);

JobRouter.get("/jobs",listJobs);

JobRouter.put("/:jobId",updateJob);

JobRouter.delete("/:jobId",deleteJob)

module.exports = {
    JobRouter
}