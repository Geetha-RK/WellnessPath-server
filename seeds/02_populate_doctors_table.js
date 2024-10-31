/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('doctors').del();
  await knex('doctors').insert([
    {
      first_name: 'Emily',
      last_name: 'Johnson',
      specialization: 'General-Physician',
      image: '/uploads/doc1.jpg',
      contact_number: '+1 (646) 123-1234',
      email: 'emily.johnson@example.com',
      experience_years: 10,
      about: 'Dedicated to providing comprehensive primary care for all ages.',
      fees: 150.00,
      qualification: 'MD, Family Medicine', // Added qualification
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Jane',
      last_name: 'Smith',
      specialization: 'Gynecologist',
      image: '/uploads/doc2.jpg',
      contact_number: '+1 (646) 876-1234',
      email: 'jane.smith@example.com',
      experience_years: 8,
      about: 'Specializes in women’s reproductive health and prenatal care.',
      fees: 200.00,
      qualification: 'MD, Obstetrics and Gynecology', // Added qualification
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Megan',
      last_name: 'Brown',
      specialization: 'Pediatrician',
      image: '/uploads/doc3.jpg',
      contact_number: '+1 (646) 903-1234',
      email: 'megan.brown@example.com',
      experience_years: 5,
      about: 'Focused on the physical, emotional, and social health of children.',
      fees: 100.00,
      qualification: 'MD, Pediatrics', // Added qualification
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Michael',
      last_name: 'Turner',
      specialization: 'Dermatologist',
      image: '/uploads/doc4.jpg',
      contact_number: '+1 (646) 123-1098',
      email: 'michael.turner@example.com',
      experience_years: 12,
      about: 'Expert in diagnosing and treating skin, hair, and nail disorders.',
      fees: 250.00,
      qualification: 'MD, Dermatology; Board Certified by the American Board of Dermatology', // Added qualification
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Sarah',
      last_name: 'Davis',
      specialization: 'Gastroenterologist',
      image: '/uploads/doc5.jpg',
      contact_number: '+1 (646) 893-1234',
      email: 'sarah.davis@example.com',
      experience_years: 7,
      about: 'Specializes in the diagnosis and treatment of digestive system disorders.',
      fees: 180.00,
      qualification: 'MD, Gastroenterology', // Added qualification
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'David',
      last_name: 'Wilson',
      specialization: 'Neurologist',
      image: '/uploads/doc-9.jpg',
      contact_number: '+1 (646) 186-1954',
      email: 'david.wilson@example.com',
      experience_years: 5,
      about: 'Focuses on diagnosing and treating conditions affecting the nervous system.',
      fees: 220.00,
      qualification: 'MD, Neurology; Board Certified by the American Board of Psychiatry and Neurology', // Added qualification
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Laura',
      last_name: 'Garcia',
      specialization: 'Pediatrician',
      image: '/uploads/doc7.jpg',
      contact_number: '+1 (689) 873-1143',
      email: 'laura.garcia@example.com',
      experience_years: 9,
      about: 'Committed to providing comprehensive health care to children.',
      fees: 130.00,
      qualification: 'MD, Pediatrics', // Added qualification
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Daniel',
      last_name: 'Martinez',
      specialization: 'General-Physician',
      image: '/uploads/doc-12.jpg',
      contact_number: '+1 (645) 178-1184',
      email: 'daniel.martinez@example.com',
      experience_years: 6,
      about: 'Provides primary care and preventive health services to patients.',
      fees: 160.00,
      qualification: 'MD, Family Medicine', // Added qualification
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Sophia',
      last_name: 'Hernandez',
      specialization: 'Dermatologist',
      image: '/uploads/doc8.jpg',
      contact_number: '+1 (633) 923-1654',
      email: 'sophia.hernandez@example.com',
      experience_years: 11,
      about: 'Specializes in diagnosing and treating skin and hair conditions.',
      fees: 210.00,
      qualification: 'MD, Dermatology', // Added qualification
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'James',
      last_name: 'Lopez',
      specialization: 'Neurologist',
      image: '/uploads/doc-13.jpg',
      contact_number: '+1 (646) 763-2644',
      email: 'james.lopez@example.com',
      experience_years: 13,
      about: 'Expert in managing conditions affecting the brain and nervous system.',
      fees: 190.00,
      qualification: 'MD, Neurology', // Added qualification
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'John',
      last_name: 'Gonzalez',
      specialization: 'Gastroenterologist',
      image: '/uploads/doc-11.jpg',
      contact_number: '+1 (646) 653-1282',
      email: 'john.gonzalez@example.com',
      experience_years: 4,
      about: 'Focuses on disorders of the gastrointestinal tract.',
      fees: 230.00,
      qualification: 'MD, Gastroenterology', // Added qualification
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'William',
      last_name: 'Wilson',
      specialization: 'General-Physician',
      image: '/uploads/doc-14.jpg',
      contact_number: '+1 (646) 763-3844',
      email: 'william.wilson@example.com',
      experience_years: 14,
      about: 'Specializing in comprehensive health care for patients.',
      fees: 300.00,
      qualification: 'MD, Family Medicine', // Added qualification
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Daniel',
      last_name: 'Anderson',
      specialization: 'Gastroenterologist',
      image: '/uploads/doc-15.jpg',
      contact_number: '+1 (646) 184-1144',
      email: 'mia.anderson@example.com',
      experience_years: 3,
      about: 'Specializes in the diagnosis and treatment of digestive system disorders.',
      fees: 140.00,
      qualification: 'MD, Gastroenterology', // Added qualification
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Lucas',
      last_name: 'Thomas',
      specialization: 'Pediatrician',
      image: '/uploads/doc-10.jpg',
      contact_number: '+1 (646) 142-8342',
      email: 'lucas.thomas@example.com',
      experience_years: 9,
      about: 'Focused on the health and wellness of infants, children, and adolescents.',
      fees: 170.00,
      qualification: 'MD, Pediatrics; Board Certified by the American Board of Pediatrics', // Added qualification
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
}
