# job_posting_application

## Project Overview

This is a backend application for managing job postings. It provides endpoints for creating new job posts, listing all job posts, updating specific job posts, and deleting job posts.

## Setup Instructions

1) Clone the Repository

    Clone the repository to your local machine using Git.

2) Install Dependencies

    Run `npm install` to install all dependencies listed in the package.json file.

3) Start the Server

    Run `npm start` to start the server.

4) Use the Endpoints

    Use a tool like Postman or cURL to send requests to the endpoints.

## Routes

1) Create Job Post

    Route: `POST /create_job`

    Controller Function: createJobPost

2) List All Jobs

    Route: `GET /jobs`

    Controller Function: listJobs

3) Update Job

    Route: `PUT /:jobId`

    Controller Function: updateJob

4) Delete Job

    Route: `DELETE /:jobId`

    Controller Function: deleteJob

## Controllers
1) createJobPost

    Handles the creation of a new job post.

2) listJobs

    Retrieves and displays all job posts from the database.

3) updateJob

    Updates a specific job post based on the jobId provided.

4) deleteJob

    Deletes a specific job post based on the jobId provided.

## Dependencies

- Express
- Mongoose
- dotenv