
exports.up = function(knex, Promise) {
 return knex.schema.createTable('helpers', function(table){
      table.increments('helper_id').unsigned().primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('location').notNullable();
      table.date('date_birth').notNullable();
      table.text('description').notNullable();
      table.text('image').notNullable();
      table.specificType("services", "text ARRAY").notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('helpers');
};


 //TODO fetch information from database: image, name, location, id, dob, description, {services: price}
