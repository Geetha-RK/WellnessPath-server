import express from "express";
import * as patientController from '../controllers/patients_controllers.js';

const router = express.Router();

router.route("/:patientId")
        .get(patientController.findOne)
        .put(patientController.updatePatient);
    

export default router;
