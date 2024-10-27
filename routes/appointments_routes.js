import express from "express";
import * as appointmentsController from "../controllers/appointments_controllers.js";
import authUser from "../middlewares/authUser.js";

const router = express.Router();

router.route("/")
        .post(authUser,appointmentsController.add);

router.route('/my-appointment/')
                .get(authUser,appointmentsController.getAppointmentsForPatient);

router.route('/:doctorId/:date')
        .get(appointmentsController.getbooked);

router.route('/cancel/:appointmentId')
      .patch(appointmentsController.cancelAppointment);
      
export default router;