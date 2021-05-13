
exports.up = function(knex, Promise) {
 return knex.schema.createTable('users', function(table){
    table.increments('user_id').unsigned().primary();
    table.string('username').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('password').notNullable();
    //table.string('location').notNullable();
    //table.date('date_birth').notNullable();
    //table.text('description').notNullable();
    table.text('image').notNullable();
  
})
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};

// table.specificType(“amenities”, “text ARRAY”);
//     table.specificType(“payments”, “text ARRAY”);
//     table.specificType(“restaurants”, “text ARRAY”);