import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

//get doctors: /api/doctors/
const index = async (req, res) => {
    try {
        const doctorsList = await knex("doctors");

        if (doctorsList.length === 0) {
            return res.status(404).json({
                message: "Doctors list not found",
            });
        } else {
                res.status(200).json(doctorsList);
        }

    } catch (error){
        res.status(500).json({
            message: "Unable to retrieve doctors data",
          });
    }
};

//find doctor by speciality : /api/doctors/:speciality
const findBySpecialization = async (req,res) => {
    const { specialization } = req.params;
    try{
        const doctors = await knex("doctors").where({ specialization });
        if(doctors.length === 0){
            return res.status(400).json({ message:"no doctor in this specialization "});
        }
        res.status(200).json(doctors);
    }catch(error){
        res.status(500).json({ message:"unable to retrive doctor data" });
    }
}

//find doctor by id: /api/doctor/:id
const findOne = async (req,res) => {
    const { id } = req.params;
    try{
        const doctor = await knex("doctors").where({ doctor_id: id }).first();
        if(!doctor){
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.status(200).json(doctor);
    }catch(error){
        res.status(500).json({ message:"unable to retrive doctor data" });
    }
};


export { index, findOne, findBySpecialization };