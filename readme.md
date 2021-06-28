<p align="center">
“This was developed during our time as students at Code Chrysalis”
</p>    
<p align="center">
<img src="public/asset/logo.png" width="150px">
</p>    

# Tasukete - an app for helping new comers to Japan.

**Tasukete** is a fullstack group project application, using the [Stripe](https://stripe.com/en-jp) API and simple checkout system integration.
    This project gave us the opportunity to work with a real client and to undertake the challenge of building an MVP based on an API from
    a real company. The application was previously deployed on Heroku.
    
<p align="center">
<img src="https://user-images.githubusercontent.com/27636896/123044039-1f183480-d434-11eb-8de8-516a6e390bc5.png" width=25% height=25%>   <img src="https://user-images.githubusercontent.com/27636896/123045530-fdb84800-d435-11eb-852e-0a7c07ffcb31.png" width=25% height=25%>
</p> 
    

    ## Technologies used

* [React](https://reactjs.org/) for the UI
* [react-router-DOM](https://www.npmjs.com/package/react-router-dom) 
* [Knex](http://knexjs.org) Query Builder
* [Stripe REST API](https://stripe.com/docs/api) API Queries
* [Postgres](https://www.postgresql.org) Database



## Overall repo structure <img src="https://user-images.githubusercontent.com/27636896/123047418-3bb66b80-d438-11eb-9de2-9f74e3685dd4.png" width=4% height=4%>
* Configuration files are in the `root` folder.
* In the `migrations` folder are located all the migrations for the PostgresSQL Database
* In the `server` folder are located all the files necessary to the back-end node server.
* In the `src` folder are located all the source files related with the `client`

## Installation <img src="https://user-images.githubusercontent.com/27636896/123047679-8a640580-d438-11eb-8518-164681ebc73b.png" width=3% height=3%>

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


## Contributing <img src="https://user-images.githubusercontent.com/27636896/123049411-7ae5bc00-d43a-11eb-838e-8656bd1fcc00.png" width=5% height=5%>

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
