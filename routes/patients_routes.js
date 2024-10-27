import express from "express";
import * as patientController from '../controllers/patients_controllers.js';
import authUser from "../middlewares/authUser.js";
const router = express.Router();

router.route("/get-profile")
        .get(authUser, patientController.findOne);
router.route("/update-profile")
        .put(authUser, patientController.updatePatient);
    
router.route("/register")
        .post(patientController.registerUser);
router.route("/login")
        .post(patientController.loginUser);

export default router;
