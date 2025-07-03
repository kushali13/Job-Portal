import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, UpdateCompany, getAllLocations } from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/multer.js";

const router=express.Router();

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated,singleUpload,UpdateCompany);
router.get("/locations", getAllLocations);

export default router;