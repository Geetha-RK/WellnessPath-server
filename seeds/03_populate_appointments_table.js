/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex){
  // Deletes ALL existing entries
  await knex('appointments').del();

  // Inserts seed entries
  await knex('appointments').insert([
      {
          patient_id: 1,  // Assuming you have a patient with ID 1
          doctor_id: 1,   // Assuming you have a doctor with ID 1
          appointment_date: '2024-10-20 10:00:00',
          status: 'scheduled',
          created_at: new Date(),
          updated_at: new Date(),
      },
      {
          patient_id: 2,  // Assuming you have a patient with ID 2
          doctor_id: 1,   // Assuming you have a doctor with ID 1
          appointment_date: '2024-10-21 11:00:00',
          status: 'scheduled',
          created_at: new Date(),
          updated_at: new Date(),
      },
      {
          patient_id: 1,  // Assuming you have a patient with ID 1
          doctor_id: 2,   // Assuming you have a doctor with ID 2
          appointment_date: '2024-10-22 09:00:00',
          status: 'scheduled',
          created_at: new Date(),
          updated_at: new Date(),
      }
      // Add more entries as needed
  ]);
};
