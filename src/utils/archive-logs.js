var fs = require('fs');
var path = require('path');

var datetime = require('datetime');
var copyFile = require('./copy-file');

const defaultDateFormat = '%Y-%m-%d';

module.exports = function archiveLogs(logStream, logPath, dateFormat) {
  var logDate = datetime.format(new Date(), dateFormat || defaultDateFormat);
  var ext = path.extname(logPath);
  var name = path.basename(logPath, ext);
  var dir = path.dirname(logPath);
  var newPath = path.join(dir, name + '-' + logDate + ext);

  copyFile(logPath, newPath, function(err) {
    if (!err) {
      fs.truncateSync(logStream.fd, 0);
    } else {
      // console.error("Unable to archive logs: " + err);
    }
  });
}