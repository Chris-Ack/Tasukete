
exports.up = function(knex, Promise) {
  return knex.schema.createTable('test', function(table) {
    table.increments('id').unsigned().primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('test');
};
