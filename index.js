import "dotenv/config";
import express from "express";
import cors from 'cors';
import path from 'path';
import doctorsRoutes from './routes/doctors_routes.js';
import appointmentsRoutes from './routes/appointments_routes.js';
import patientRoutes from './routes/patients_routes.js';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5050;

// Use CORS to allow cross-origin requests
app.use(cors());
// Serve static files from the uploads directory

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use("/api/doctors", doctorsRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/patients", patientRoutes);



app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
  });