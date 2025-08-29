/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favorites').del()
  await knex('favorites').insert([
    { title: 'Title A', main_character: 'Main Guy A', year: '2025'},
    { title: 'Title B', main_character: 'Main Guy B', year: '2024'},
    { title: 'Title C', main_character: 'Main Guy C', year: '2023'}
  ]);
};
