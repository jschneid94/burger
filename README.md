# Eat Da Burger

## Description

**__Eat Da Burger__** is a full-stack application designed to store user's input and store the information and any changes made into a database. Users can submit a request for a burger which will cause it to appear on the menu. Users can order off the menu, which will move the entry to the list of eaten burgers. Finally, users can remove eaten burgers off of their list if they did not like it.

## Demo

**__Eat Da Burger__** is deployed on Heroku. Check it out [here](https://jrs-burger.herokuapp.com/).

## Installation

To install the application, run the following commands:

```
git clone https://github.com/jschneid94/burger.git
cd burger
npm i
```

## Running Locally

By default, this application runs locally on port 8080 to access via the browser. If you would like to run using a different port, you can do so by running the command below in the terminal:

```
export PORT=8080
```

Now the app is ready to run. Use this command to start:

```
node server.js
```

The app can now be accessed in the browser using the following URL: "localhost:8080". Remember to replace the 8080 if you changed the port earlier.

## Built With

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)
* [Handlebars](https://handlebarsjs.com/)
* [Materialize](https://materializecss.com/)