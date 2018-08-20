const path = require('path')
let whileReturn
module.exports = function (dirPath, subPath) {
  whileReturn = false
  let dir = path.resolve(dirPath)
  let sub = path.resolve(subPath)
  comparePath(dir, sub)
  return whileReturn
}


function getBasePath(dirPath, subPath) {
  let dirName = path.dirname(subPath)
  comparePath(dirPath, dirName)
}


function comparePath(dirPath, subPath) {
  if (dirPath !== subPath) {
    if (path.basename(subPath)) {
      getBasePath(dirPath, subPath)
    }
    
  } else {
    whileReturn = true
  }
}