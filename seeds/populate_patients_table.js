/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex){
  // Deletes ALL existing entries
  await knex('patients').del();

  // Inserts seed entries
  await knex('patients').insert([
    { first_name: 'Renu', last_name: 'Goshal', email: 'renu.goshal@example.com', password: 'hashed_password_1', created_at: new Date(), updated_at: new Date() },
    { first_name: 'Jithu', last_name: 'Smith', email: 'jithu.smith@example.com', password: 'hashed_password_2', created_at: new Date(), updated_at: new Date() },
  ]);
};
