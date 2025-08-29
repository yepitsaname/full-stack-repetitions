/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("favorites", table => {
    table.increments("fav_id");
    table.string("title", 256);
    table.string("main_character", 256);
    table.smallint("year_released");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("favorites");
};
