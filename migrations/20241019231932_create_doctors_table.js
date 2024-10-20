/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable('doctors', function(table) {
        table.increments('doctor_id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('specialization').notNullable();
        table.string('contact_number');
        table.string('email').unique();
        table.integer('experience_years').unsigned().notNullable();
        table.text('about'); // Additional info about the doctor
        table.decimal('fees', 10, 2); // Fees for the doctor
        table.timestamp('created_at').defaultTo(knex.fn.now()); // Created at timestamp
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')); // Updated at timestamp
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    return knex.schema.dropTableIfExists('doctors');
};
