var n = require('os').networkInterfaces()

module.exports = function () {
  var ip = []
  for (var k in n) {
    var inter = n[k]
    for (var j in inter)
      if (inter[j].family === 'IPv4' && !inter[j].internal)
        return inter[j].address
  }
}
