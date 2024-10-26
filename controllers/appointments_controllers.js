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

const getAppointmentsForPatient = async (req, res) => {
    const { patientId } = req.params;

    try {
        const appointments = await knex('appointments')
            .join('doctors', 'appointments.doctor_id', '=', 'doctors.doctor_id')
            .where('appointments.patient_id', patientId)
            .select(
                'doctors.image',
                'doctors.specialization',
                'appointments.appointment_date',
                'doctors.first_name',
                'doctors.last_name',
                'appointments.status',
                'appointments.id',
            );
            console.log("appointments",appointments)
       
        const formattedAppointments = appointments.map(appt => ({
            ...appt,
            appointment_date: new Date(appt.appointment_date).toLocaleString(),
            doctor_name: `${appt.first_name} ${appt.last_name}`, // Combine first and last name
        }));

        res.status(200).json(formattedAppointments);
        // res.status(200).json(appointments);

    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ error: 'Failed to fetch appointments.' });
    }
};

const cancelAppointment = async (req, res) => {
    const { appointmentId } = req.params;
  
    try {
      await knex('appointments')
        .where('id', appointmentId)
        .update({ status: 'canceled' });
  
      res.status(200).json({ message: 'Appointment canceled successfully.' });
    } catch (error) {
      console.error('Error canceling appointment:', error);
      res.status(500).json({ error: 'Failed to cancel appointment.' });
    }
  };

export { add, getbooked, getAppointmentsForPatient,cancelAppointment };
