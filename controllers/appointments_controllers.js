import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const add = async (req, res) => {
// app.post('/api/appointments', async (req, res) => {
    const { patientId, doctorId, dateTime } = req.body;

    // Validate input
    if (!patientId || !doctorId || !dateTime) {
        return res.status(400).json({ error: 'Patient ID, Doctor ID, and DateTime are required.' });
    }

        const parsedDateTime = new Date(dateTime);
    if (isNaN(parsedDateTime)) {
        return res.status(400).json({ error: 'Invalid DateTime format.' });
    }

    try {
        // Insert into appointments table
        await knex('appointments').insert({
            patient_id: patientId,
            doctor_id: doctorId,
            appointment_date: new Date(dateTime),
            status: 'scheduled',
        });

        res.status(201).json({ message: 'Appointment created successfully.' });
    } catch (error) {
        console.error('Error creating appointment:', error);
        res.status(500).json({ error: 'Failed to create appointment.' });
    }
};

const getbooked =  async (req, res) => {
    const { doctorId, date } = req.params;
    console.log("doctorId, date",doctorId, date);
    try {
        const appointments = await knex('appointments')
            .where('doctor_id', doctorId)
            .andWhere('appointment_date', '>=', new Date(date))
            .andWhere('appointment_date', '<=', new Date(date + ' 23:59:59'))
            .select('appointment_date');

            const formattedAppointments = appointments.map(appt => {
                const date = new Date(appt.appointment_date);
                return date.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                });
            });
    
            res.status(200).json(formattedAppointments);
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ error: 'Failed to fetch appointments.' });
    }
};

export { add, getbooked };
