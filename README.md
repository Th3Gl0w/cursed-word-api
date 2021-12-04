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
├── config/
├── migrations/
├── models/
├── routes/
├── seeders/
├── utils
├── api.js
├── package-lock.json
├── package.json
└── README.md
```

## Preparation (Prerequisites / Installation / Getting Started)

### Starting from scratch

This project needs `node`, `NodeJS`, `CORS`, `express` to be installed beforehand (and also your computer :P). Wht else ? IDK. Figure it out by yourself !

1. Run `npm init -y` to start your simple express server project.

   ```
   npm init -y
   ```

   This will generate `package.json` file in your folder.

2. Set up the node / NodeJS

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

3. Set up **CORS**

   To use **CORS** within a Node.js application, you need the `cor package` provided by the Node.js NPM registry. Go ahead and install CORS alongside the following other packages using the below command.

   ```
   npm i cors express nodemon
   ```

4. Install `express`, `cors` module

   ```
   npm install http express cors
   ```

### Starting from existing project :

Run `npm install`

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

You can get the list of words which contains specified slug. Supported 'slug' are as below.
base_url : `/cursed-words`

```java
  /{tag}
  /{language}
  /{language}/{tag}
  /{id}
```

- Example of GET request

  ```java
  /               //lists all words
  /hard           //lists all hard words
  /spanish        //lists all spanish curse words
  /spanish/hard   //lists all hard spanish curse words
  /korean         //lists all korean curse words
  /korean/soft    //lists all soft korean curse words
  /2

  ```

  ```json
  //GET a single cursed word
  {
    "id": 1,
    "word": "씨발",
    "language": "korean",
    "tag": "soft",
    "meaning": "fuck, fucking",
    "example": "씨발년 [ssi-bal-nyeon] – Fucking bitch.",
    "createdAt": "2021-11-27T22:10:26.634Z",
    "updatedAt": "2021-11-27T22:10:26.634Z"
  }
  ```

### POST `/`

Put some brief description. Just cuz it looks more cool. Those devs rly need to develop their documentation skills tho. _NO CAP._

```json
// EXAMPLE OF JSON DATA
{
  "message": "a new cursed word successfully created",
  "newCurseWord": {
    "id": 23,
    "word": "씨발새끼 12",
    "language": "korean",
    "tag": "soft",
    "meaning": "Fucking son of a bitch",
    "example": "꺼져 씨발새끼 [kkeo-jyeo ssibal-saekki] - get off you son of bitch",
    "updatedAt": "2021-12-04T15:07:37.432Z",
    "createdAt": "2021-12-04T15:07:37.432Z"
  }
}
```

### PUT `/{id}`

Update existing(registered) word with put command ! yahoo !
Put some brief description. Just cuz it looks more cool.

- Example
  ```json
  //input command get blablabla
  {
  "word": "Callate",
  "language": "spanish",
  "tag": "soft",
  "meaning": "Updated meaning", //updated value
  "example": "Todos, callate!"
  }
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

#### Description of Json data fields

| Field    | Values                  | Notes                                                                                                                   |
| -------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| id       | int                     | **_IS THIS FIELD MANDATORY DESUGA?_** allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER, |
| word     | _your_word_here_        | type: Sequelize.STRING                                                                                                  |
| language | korean, spanish         | type: Sequelize.STRING                                                                                                  |
| tag      | soft, hard              | type: Sequelize.STRING                                                                                                  |
| meaning  | _your_description_here_ | type: Sequelize.CITEXT                                                                                                  |
| example  | _your_description_here_ | type: Sequelize.CITEXT                                                                                                  |

- Example
  //GET
  ```bash
    curl http://localhost:4242/cursed-words/ -H "Accept: application/json"
  ```
  //GET output

```json
{
  "id": "1",
  "word": "Callate",
  "language": "spanish",
  "tag": "soft",
  "meaning": "Shut up",
  "example": "Todos, callate!"
}
```

//POST

```bash
curl -X POST http://localhost:4242/cursed-words/
   -H 'Content-Type: application/json'
   -d '{"word":"your word","language":"your language", "tag":"your tag", "meaning":"your meaning", "example":"your example" }'
```

//POST output

```json
{
  "message": "a new cursed word successfully created",
  "newCurseWord": {
    "id": 23,
    "word": "씨발새끼 12",
    "language": "korean",
    "tag": "soft",
    "meaning": "Fucking son of a bitch",
    "example": "꺼져 씨발새끼 [kkeo-jyeo ssibal-saekki] - get off you son of bitch",
    "updatedAt": "2021-12-04T15:07:37.432Z",
    "createdAt": "2021-12-04T15:07:37.432Z"
  }
}
```

## License & Acknowledgements

- SKY THE APPLE
- YUYU THE PSYCHO
