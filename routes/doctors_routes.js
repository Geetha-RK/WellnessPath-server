import express from "express";
import * as doctorsController from "../controllers/doctors_controllers.js";

const router = express.Router();

router.route("/")
        .get(doctorsController.index)

router.route("/:docId")
        .get(doctorsController.findOne)

router.route("/specialization/:specialization")
            .get(doctorsController.findBySpecialization)

export default router;
