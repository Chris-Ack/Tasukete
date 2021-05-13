
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
    })
    .then(function () {
      return knex('helpers').del()
    })
    .then(function () {
      return knex('helpers').insert([
        {first_name: "Yoshio", last_name: "Hasegawa", location: "Tokyo", date_birth: "1900-01-01", 
        description: "Hi, my name is Yoshio, I am here to help! I have lived in Tokyo for 25 years and have a lot of experience with administration and banks.", 
        image: "/assets/yoshio.jpg", services: ["banking", "apartments", "immigration", "city office", "medical", "legal", "mobile"]},
        
        {first_name: "Evan", last_name: "Trujillo", location: "Tokyo", date_birth: "1989-10-30", 
        description: "Hi, my name is Evan, Moving to Tokyo for the first time can be tough! I am here to take the burden...", 
        image: "/assets/evan.jpg", services: ["banking", "apartments", "immigration", "city office", "medical", "legal", "mobile"]}, 
        
        {first_name: "Julie", last_name: "Stocks", location: "Osaka", date_birth: "1991-02-10", 
        description: "Hi, my name is Julie, I am here to take the burden, I have a lot of experience in apartment hunting!", 
        image: "/assets/julie.jpg", services: ["apartments", "immigration", "medical", "mobile"]},
        
        {first_name: "Gaetan", last_name: "Karst", location: "Osaka", date_birth: "1900-01-01", 
        description: "Hello, my name is Gaetan. I have been an Osaka local for 35 years and have a lot of experience with the city office, legal and medical.", 
        image: "/assets/gaetan.jpg", services: ["city office", "medical", "legal"]},
        
        {first_name: "Chirs", last_name: "Ackermann", location: "Tokyo", date_birth: "1900-01-01", 
        description: "Hi, my name is Chirs, and I'd like to offer my help. Having been in Japan for 8 years, I have a lot of experience with the immigration office and apartments.", 
        image: "/assets/chirs.jpg", services: ["apartments", "immigration"]}
      ])
    })
    .then(function () {
      return knex('users').del()
    })
    .then(function () {
      return knex('users').insert([
        {username: "JohnS", first_name: "John", last_name: "Syrup", password: "tasukete123", image: "/assets/john.jpg"},
        {username: "chrack", first_name: "Chris", last_name: "Ackermann", password: "tasukete123", image: "undefined"}
      ])
    })
};

// date format: yyyy-mm-dd

//location: 'Tokyo', date_birth: 1900-01-01, 


    // table.increment('helper_id').unsigned().primary();
    // table.string('first_name').notNullable();
    // table.string('last_name').notNullable();
    // table.string('location').notNullable();
    // table.date('date_birth').notNullable();
    // table.text('description').notNullable();
    // table.text('image').notNullable();
    // table.specificType("services", "text ARRAY").notNullable();