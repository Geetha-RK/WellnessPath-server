/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable('appointments', function(table) {
        table.increments('id').primary(); // Auto-incrementing ID
        table.integer('patient_id').unsigned().notNullable(); // Patient ID
        table.integer('doctor_id').unsigned().notNullable(); // Doctor ID
        table.timestamp('appointment_date').notNullable(); // Appointment date
        table.string('status').defaultTo('scheduled'); // Appointment status
        table.timestamp('created_at').defaultTo(knex.fn.now()); // Created at timestamp
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')); // Updated at timestamp

        // Foreign key constraints
        table.foreign('patient_id').references('id').inTable('patients').onDelete('CASCADE');
        table.foreign('doctor_id').references('doctor_id').inTable('doctors').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    return knex.schema.dropTableIfExists('appointments');
};

