var express = require('express');
var fs = require('fs');
var path = require('path');
var logger = require('morgan');
var rfs = require('rotating-file-stream')

var genRotatingFile = require('./utils/gen-rotating-file');

module.exports = function(mode) {
  var accessLogStream = null,
      errorLogStream = null,
      pathT = '';

  // if (mode === undefined || mode === 'error') {
    pathT = 'errors/error.log';

    errorLogStream = rfs(genRotatingFile(pathT), {
      interval: '1d',
      path: 'logs',
    });

    return logger('combined', {
      skip: function (req, res) { return res.statusCode < 400 }, 
      stream: errorLogStream, 
    });
  // } 
  // else if (mode === 'access') {
  //   pathT = 'access.log';

  //   accessLogStream = rfs(genRotatingFile(pathT), {
  //     interval: '1d',
  //     path: 'logs',
  //     initialRotation: true,
  //   });
    
  //   return logger('combined', {stream: accessLogStream});
  // }
}
