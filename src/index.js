var express = require('express');
var fs = require('fs');
var path = require('path');
var logger = require('morgan');

var archiveLogs = require('./utils/archive-logs');

const defaultInterval = 60;

module.exports = function(options) {
  if (!fs.existsSync(path.dirname(options.path))) fs.mkdirSync(path.dirname(options.path));

  var logStream = fs.createWriteStream(options.path, {flags: 'a'});
  var loggerMorgan= logger(logStream, options.format);

  // var archiveInterval = setInterval(function() {
    archiveLogs(logStream, options.path, options.dateFormat);
  // }, options.interval || defaultInterval);
  
  return loggerMorgan;
}
