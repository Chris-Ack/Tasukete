“This was developed during our time as students at Code Chrysalis”

<img src="public/asset/logo.png" width="150px">

# Tasukete - an app for helping new comers to Japan.

**Tasukete** is a fullstack group project application, using the [Stripe](https://stripe.com/en-jp) API and simple checkout system integration.
    This project gave us the opportunity to work with a real client and to undertake the challenge of building an MVP based on an API from
    a real company. You can find the deployed version at: <http://tasukete-app.herokuapp.com/>

    ## Technologies used

* [React](https://reactjs.org/) for the UI
* [react-router-DOM](https://www.npmjs.com/package/react-router-dom) 
* [Knex](http://knexjs.org) Query Builder
* [Stripe REST API](https://stripe.com/docs/api) API Queries
* [Postgres](https://www.postgresql.org) Database






## Overall repo structure
* Configuration files are in the `root` folder.
* In the `migrations` folder are located all the migrations for the PostgresSQL Database
* In the `server` folder are located all the files necessary to the back-end node server.
* In the `src` folder are located all the source files related with the `client`

## Installation

```
npm install
```

## Create a .env

```

DB_NAME= // your database name
DB_USER= // postgres username
DB_PW=// your postgres password
```


## run

```
npm run start
npm run hack:client
```


## Contributing

Should you want to contribute:
* please fork and clone the repo on your machine
* Create an "issue" to describe what you want to work on
* Submit a pull request.

Many thanks!

## Authors

* [Evan](https://github.com/Evomatic)
* [Julie](https://github.com/dawndarkness)
* [Chris](https://github.com/Chris-Ack)
* [Gaetan](https://github.com/GaetanKarst)



## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Helpful links

* Thank Stripe for letting us test your API! <https://stripe.com/en-jp>
