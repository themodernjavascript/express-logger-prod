# express-logger-prod

The Logger for Express in production. It builds on the built-in Express logger. It will automatically rotate your logs and archive the old logs daily.

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
