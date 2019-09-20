
const fs = require('fs')

function statFollowLinks() {
  return fs.statSync.apply(fs, arguments);
}
// test 
//sanity check, if this succeeds, it must be some sort of file
// let statInfo
// try {
//   statInfo = statFollowLinks('resources/file1')
// } catch (e) {
//   throw new Error('no such file or directory: resources/file1')
// }
// console.log(statInfo)
// console.log(statInfo.isFile())
// console.log(statInfo.isDirectory())
// console.log(statInfo.mode)
// console.log(statInfo.mtime.toString())
exports.statFollowLinks = statFollowLinks;


// Normalizes _unlinkSync() across platforms to match Unix behavior, i.e.
// file can be unlinked even if it's read-only, see https://github.com/joyent/node/issues/3006
function unlinkSync(file) {
  try {
    fs.unlinkSync(file);
  } catch (e) {
    // Try to override file permission
    /* istanbul ignore next */
    if (e.code === 'EPERM') {
      fs.chmodSync(file, '0666');
      fs.unlinkSync(file);
    } else {
      throw e;
    }
  }
}

// test
const paramsFile = 'resources/file1'
if (fs.existsSync(paramsFile)) unlinkSync(paramsFile);

console.log(paramsFile)

exports.unlinkSync = unlinkSync;



