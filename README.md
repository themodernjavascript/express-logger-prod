# express-logger-prod

The Logger for Express in production. It builds on the built-in Express logger. It will automatically rotate your logs and archive the old logs daily.

[![version](https://img.shields.io/npm/v/express-logger-prod.svg?style=flat-square)](https://www.npmjs.com/package/express-logger-prod) [![downloads](https://img.shields.io/npm/dm/express-logger-prod.svg?style=flat-square)](https://www.npmjs.com/package/express-logger-prod) [![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](http://opensource.org/licenses/MIT).

## Installation

```
npm install express-logger-prod --save
```

or 

```
npm i express-logger-prod --save
```

## Usage

```
var loggerProd = require('express-logger-prod');

app.use(loggerProd());
```

## Log Structure

```
express-app
├── ...
├── logs
│   └── erros
│       └── error-2018-08-27.log
│       └── error-2018-08-28.log
├── ...
```
