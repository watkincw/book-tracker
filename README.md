# Book Tracker [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Contributions](#contributions)
* [Github](#github)


<a name='description'></a>
## Description
This is a live app that allows a user to login and keep track of books they've read and would like to read.

From the login  page, a user can sign up and then later can login and the app will save the user's book data.

![loginpage](https://user-images.githubusercontent.com/83994997/133014759-816a49f1-3c12-4bcf-83d9-27283ae8dcaf.png)

A user's dashboard has a book form that can be filled out.  Once the book is entered, it is added to the full list of books and is also sorted by user specification.
![fulldashboard](https://user-images.githubusercontent.com/83994997/133014065-f66817f3-8a81-4e9d-95e3-1594a08d4b2e.png)


<a name='installation'></a>
## Installation
This app can be found live at https://dry-wildwood-65158.herokuapp.com/. It can also be found and cloned to your local machine from the github repository https://github.com/ThManHimself/book-tracker.git.

<a name='usage'></a>
## Usage
This app was created with Node.js and uses Express.js. Handlebars.js is used for templating. MySQL, JAWS.db, and Sequelize were used to create and manipulate the database. CSS was customized through the use of Materialize. This app can be run on a local server PORT 3001 or through the internet at https://dry-wildwood-65158.herokuapp.com/.

NPM packages used:
  - express
  - express-session
  - express-handlebars
  - handlebars
  - mysql2
  - sequelize
  - connect-session-sequelize
  - jest
  - dotenv
  - bcrypt
  - nodemon


<a name='tests'></a>
## Tests
Seed files are included and allowed for easier testing during production using the Insomnia Core app. We found Nodemon to be a helpful tool during development as it allowed for faster and easier testing through the browser as it refreshes node.js when any change are made in the files.

<a name='license'></a>
## License
This application is covered by MIT.

<a name='contributions'></a>
## Contributions
This project was created by a team of fresh developers: Thomas, Bri, Jeff, and Colton.

<a name='github'></a>
## Github
https://github.com/https://github.com/ThManHimself/book-tracker.git