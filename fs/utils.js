
const fs = require('fs')
function statFollowLinks() {
  return fs.statSync.apply(fs, arguments);
}
const statInfo = statFollowLinks('resources/file1')

console.log(statInfo)
exports.statFollowLinks = statFollowLinks;



