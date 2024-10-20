import express from "express";
import * as doctorsController from "../controllers/doctors_controllers.js";

const router = express.Router();

router.route("/")
        .get(doctorsController.index)
        // .post(...validateWarehouse, doctorsController.add);

router.route("/:id")
        .get(doctorsController.findOne)
        // .put(...validateWarehouse, doctorsController.update)
        // .delete(doctorsController.remove);

router.route("/specialization/:specialization")
            .get(doctorsController.findBySpecialization)

// router.route("/:id/inventories")
        // .get(warehouseController.findInventories);

export default router;
