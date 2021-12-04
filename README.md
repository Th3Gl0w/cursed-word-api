# Cursed Word API

## Table of Contents

- [About the Project](#about-the-project)
  - [Built with](#built-with)
  - [Repository structure](#repository-structure)
- [Preparation](#preparation--prerequisites---installation---getting-started-)
- [Installation & Testing](#installation---testing-guide)
  - [Run server](#run-server)
  - [GET `/"tag"`](#get----tag--)
  - [POST `/`](#post----)
  - [PUT `/{id}`](#put----id--)
  - [DELETE `/{id}`](#delete----id--)
- [License & Acknowledgements](#license---acknowledgements)

## About the Project

This project is for cursed word api which provides the feature of **1) cool feature, 2) another cool feature, 3) undoubtly awesome feature** (cuz its built by S K Y aka GOD).

### Built with

- Ubuntu 20.04
- Oracle JDK 11
- Apache Maven 3.6.3

### Repository structure

This project uses CORS in Node.js with Express. (repo tree)

```
Project_NAME_HERE/
├── data/                             # Source data
├── scripts/                          # Documentation files
└── README.md
```

## Preparation (Prerequisites / Installation / Getting Started)

This project needs `node`, `NodeJS`, `CORS`, `http`, `express` to be installed beforehand (and also your computer :P). Wht else ? IDK. Figure it out by yourself !

1. Set up the node / NodeJS

   - Make sure you have `Node.js runtime` installed.

     ```javascript
     //Installing node
     macos users : `brew install node`
     linux users : `sudo apt install node`
     ```

   - Check installation by running this `node -v` on your terminal / cmd and you will see :

     ```javascript
     //Checking installation
     node -v
     v16.13.0
     ```

2. Set up **CORS**

   To use **CORS** within a Node.js application, you need the `cor package` provided by the Node.js NPM registry. Go ahead and install CORS alongside the following other packages using the below command.

   ```
   npm i cors express nodemon
   ```

3. Install `http`, `express`, `cors` module

   ```
   npm install http express cors
   ```

4. Run `npm init -y` to start your simple express server project.
   ```
   npm init -y
   ```
   This will generate `package.json` file in your folder.

## Installation & Testing Guide

> Running a local server and API testing

### Run server

Run the server with `npm start` and head to http://localhost:4242/
If you can see "HELLOW BITCHEEEEEEEEEEES", the server is successfully running.

### Run server development

Run the server with `npm run dev` and head to http://localhost:4242/
If you can see "HELLOW BITCHEEEEEEEEEEES", the server is successfully running.

<br />

Once you're done and blabla, test api (GET/POST/PUT/DELETE) AYAYA!

<br />

### GET `/"tag"`

You can get the list of words which contains specified tags. Supported 'tags????????' are as below.

```java
/               //lists all words
/hard           //lists all words
/soft           //lists all words
/spanish        //lists all words
/spanish/hard   //lists all words
/spanish/soft   //lists all words
/korean         //lists all words
/korean/hard    //lists all words
/korean/soft    //lists all words
/{id}           //lists all words
```

- Example
  ```java
  //input command get blablabla
  type this_and_that_and_those_and_boom
  //output result is as below
  "PIKABOO!!!!!!!!!!!!!!!!!!!"
  ```

### POST `/`

Put some brief description. Just cuz it looks more cool. Those devs rly need to develop their documentation skills tho. _NO CAP._

```javascript
// EXAMPLE OF JSON DATA
{
  "id": "1",
  "word": "Callate",
  "language": "spanish",
  "tag": "soft",
  "meaning": "Shut up",
  "example": "Todos, callate!"
}
```

##### Description of Json data fields

| Field    | Values                  | Notes                                                                                                                   |
| -------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| id       | int                     | **_IS THIS FIELD MANDATORY DESUGA?_** allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER, |
| word     | _your_word_here_        | type: Sequelize.STRING                                                                                                  |
| language | korean, spanish         | type: Sequelize.STRING                                                                                                  |
| tag      | soft, hard              | type: Sequelize.STRING                                                                                                  |
| meaning  | _your_description_here_ | type: Sequelize.CITEXT                                                                                                  |
| example  | _your_description_here_ | type: Sequelize.CITEXT                                                                                                  |

- Example
  ```java
  //input command get blablabla
  type this_and_that_and_those_and_boom
  //output result is as below
  "PIKABOO!!!!!!!!!!!!!!!!!!!"
  ```

### PUT `/{id}`

Update existing(registered) word with put command ! yahoo !
Put some brief description. Just cuz it looks more cool.

- Example
  ```java
  //input command get blablabla
  type this_and_that_and_those_and_boom
  //output result is as below
  "PIKABOO!!!!!!!!!!!!!!!!!!!"
  ```

### DELETE `/{id}`

Delete existing(registered) word with DELETE command ! yahoo !
Put some brief description. Just cuz it looks more cool.

- Example
  ```java
  //input command get blablabla
  type this_and_that_and_those_and_boom
  //output result is as below
  "PIKABOO!!!!!!!!!!!!!!!!!!!"
  ```

## License & Acknowledgements

- SKY THE APPLE
- F. Maxwell Harper and Joseph A. Konstan. 2015. The MovieLens Datasets: History and Context. ACM Transactions on Interactive Intelligent Systems (TiiS) 5, 4, Article 19 (December 2015), 19 pages. DOI=http://dx.doi.org/10.1145/282787*
