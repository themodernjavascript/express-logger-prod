var fs = require('fs');
var path = require('path');

var datetime = require('datetime');

const defaultDateFormat = '%Y-%m-%d';

module.exports = function genRotatingFile(logPath, dateFormat) {
  var dir = path.dirname(logPath);
  var logDate = datetime.format(new Date(), dateFormat || defaultDateFormat);
  var ext = path.extname(logPath);
  var name = path.basename(logPath, ext);
  var newPath = path.join(dir, name + '-' + logDate + ext);
  
  return newPath;
};
