import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

//          /api/patients/:patientId
const findOne = async (req,res) => {
    const { patientId } = req.params;
    if (!patientId || isNaN(patientId)) {
        return res.status(400).json({ message: "Invalid patient ID" });
    }
    try{
        const patient = await knex("patients").where({ id: patientId }).first();
        if(!patient){
            return res.status(404).json({ message: "patient not found" });
        }
        res.status(200).json(patient);

    }catch(error){
        res.status(500).json({ message:"unable to retrive patient data by id" });
    }
}

const updatePatient = async (req, res) => {
    const { patientId } = req.params;
    const { first_name, last_name, phone_number, email } = req.body;

    if (!first_name || !last_name || !phone_number || !email) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const updatedPatient = await knex('patients')
            .where({ id: patientId })
            .update({
                first_name,
                last_name,
                phone_number,
                email,
            });

        if (updatedPatient) {
            res.status(200).json({ message: 'Patient updated successfully' });
        } else {
            res.status(404).json({ message: 'Patient not found' });
        }
    } catch (error) {
        console.error('Error updating patient:', error);
        res.status(500).json({ message: 'Unable to update patient' });
    }
};

export { findOne, updatePatient };