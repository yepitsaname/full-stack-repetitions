/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favorites').del()
  await knex('favorites').insert([
    { title: 'Movie A', main_character: 'Main A', year_released: '2025'},
    { title: 'Movie B', main_character: 'Main B', year_released: '1990'},
    { title: 'Movie C', main_character: 'Main C', year_released: '1967'}
  ]);
};
