import initKnex from "knex";
import configuration from "../knexfile.js";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
const knex = initKnex(configuration);

//API to register patient
const registerUser = async(req,res) => {
try{
    const { first_name, last_name, phone_number, email, password } = req.body;
    if( !first_name || !last_name || !phone_number || !password || !email ){
        return res.json({success:false,message:"Missing Details"})
    }
    if(!validator.isEmail(email)){
        return res.json({success:false,message:"Email Invalid"})
    }
    if(password.length < 8){
        return res.json({success:false,message:"Enter a strong password"})
    }
    //Hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const userData = {
        first_name,
        last_name,
        phone_number,
        email,
        password: hashedPassword
    }
    // Insert new patient without .returning()
    await knex('patients').insert(userData);

    // Fetch the newly created user
    const newUser = await knex('patients').where({ email }).first();

    // Create a token with the id of the newly created user
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ success: true, message: "User registered successfully", token })

}catch(error){
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, message: error.message });
}

}

//api for patient login

const loginUser = async(req,res) => {
    try{
        const {email,password} = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Missing email or password" });
        }

        const user = await knex('patients').where({ email }).first();
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }

        // Create a token for the user
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ success: true, message: "Login successful", token });

    }catch(error){
        console.error('Error registering user:', error);
        res.status(500).json({ success: false, message: error.message  });
    }
}

//          /api/patients/:patientId
const findOne = async (req,res) => {
    const patientId = req.body.patientId;
    if (!patientId || isNaN(patientId)) {
        return res.status(400).json({ message: "Invalid patient ID" });
    }
    try{
        const patient = await knex("patients")
        .select('id', 'first_name', 'last_name', 'phone_number', 'email') // exclude password while selecting
        .where({ id: patientId })
        .first();

        if(!patient){
            return res.status(404).json({ message: "patient not found" });
        }
        res.status(200).json(patient);

    }catch(error){
        res.status(500).json({ message:"unable to retrive patient data by id" });
    }
}

const updatePatient = async (req, res) => {
    const patientId = req.body.patientId;
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

export { findOne, updatePatient, registerUser, loginUser };