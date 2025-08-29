/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favorites').del()
  await knex('favorites').insert([
    { title: 'rowValue1', main_character: 'a character', year_released: '2001'},
    { title: 'rowValue2', main_character: 'a character', year_released: '2002'},
    { title: 'rowValue3', main_character: 'a character', year_released: '2003'}
  ]);
};
