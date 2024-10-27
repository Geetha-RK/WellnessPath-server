import express from "express";
import * as appointmentsController from "../controllers/appointments_controllers.js";

const router = express.Router();

router.route("/")
        .post(appointmentsController.add);

router.route('/my-appointment/:patientId')
                .get(appointmentsController.getAppointmentsForPatient);

router.route('/:doctorId/:date')
        .get(appointmentsController.getbooked);

router.route('/cancel/:appointmentId')
      .patch(appointmentsController.cancelAppointment);
      
export default router;