/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("favorites").del()
  await knex("favorites").insert([
    { title: "Movie A", main_character: "Main Guy A", year_released: "2021"},
    { title: "Movie B", main_character: "Main Guy B", year_released: "2022"},
    { title: "Movie C", main_character: "Main Guy C", year_released: "2023"}
  ]);
};
