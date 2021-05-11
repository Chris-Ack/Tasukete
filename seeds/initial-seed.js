
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('test').del()
    .then(function () {
      // Inserts seed entries
      return knex('test').insert([
        {name: 'rowValue1', email: 'email_1'},
        {name: 'rowValue2', email: 'email_2'},
        {name: 'rowValue3', email: 'email_3'},
        {name: 'rowValue4', email: 'email_4'}
      ]);
    });
};
