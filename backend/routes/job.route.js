import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob, getAllRoles, getAllSalaries, updateJob } from "../controllers/job.controller.js";

const router=express.Router();

router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/getadminjobs").get(isAuthenticated,getAdminJobs);
router.route("/get/:id").get(isAuthenticated,getJobById);
router.get("/roles", getAllRoles);
router.get("/salaries", getAllSalaries);
router.put("/update/:id", isAuthenticated, updateJob);

export default router;