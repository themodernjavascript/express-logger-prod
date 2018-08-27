var fs = require('fs');

module.exports = function copyFile(src, dst, cb) {
  fs.stat(dst, function(err) {
    if (!err) { cb(new Error(dst + " already exists.")); return; }
    fs.stat(src, function (err) {
      if (err) { cb(err); return }
      var rs = fs.createReadStream(src);
      var ws = fs.createWriteStream(dst);
      rs.pipe(ws);
    });
  });
}
