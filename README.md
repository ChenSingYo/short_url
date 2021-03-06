## URL Shortner

Sample URL Shortner

[Heroku Demo](https://singyo-URLShortner.herokuapp.com/)

## **Features**

- Shorten URL
- Link data preview
- Copy shortened URL
- Give Alert if the URL is invalid

<img width="1071" alt="截圖 2021-03-06 上午11 31 00" src="https://user-images.githubusercontent.com/69234380/110193560-961ec280-7e6f-11eb-9953-38daf19ffa07.png">
<img width="1257" alt="截圖 2021-03-06 上午11 30 44" src="https://user-images.githubusercontent.com/69234380/110193556-8e5f1e00-7e6f-11eb-9853-86f746103edc.png">


## Prerequisites

Node.js

Express

Express-Handlebars

Mongodb + Robo 3T(optional)

Mongoose

GO

Metascraper

Nanoid


## **Getting Started**

Clone repository to your local computer

```bash
$ git clone https://github.com/ChenSingYo/short_url.git
```

Turn on mongodb

```bash
[~] $ cd ~/mongodb/bin/
[~/mongodb/bin] $ ./mongod --dbpath ~/mongodb-data
```

Install [npm](https://www.npmjs.com/)

```bash
$ npm install 
```

Install dependencies (see package.json)

```bash
$ npm install nodemon express etc..
```

Execute

```bash
$ npm run start     ..automatically run 'node app.js'
```

or

```bash
$ npm run dev       ..automatically run 'nodemon app.js'
```

when everything works fine:

```bash
ready to serve: http://localhost:3000
mongodb connected!
```

let 's check it with your Browser

```
http://localhost:3000
```

## **Built With**

Npm v7.0.15

Node.js 14.15.1

Nodemon 2.0.7

Express 4.17.1

Express Handlebars 5.2.1

Mongoose: 5.11.15

Method-Override: 3.0.0

Got: 9.6.0

Nanoid: 3.1.20

Metascraper: 5.18.12


## Contributor

[SingYo](https://github.com/ChenSingYo)
