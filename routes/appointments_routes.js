import express from "express";
import * as appointmentsController from "../controllers/appointments_controllers.js";

const router = express.Router();

router.route("/")
        // .get(appointmentsController.index)
        .post(appointmentsController.add);

router.route('/:doctorId/:date')
        .get(appointmentsController.getbooked);

export default router;