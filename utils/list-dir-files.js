const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

function listDirFiles(dir) {
  const fileList = [];
  const files = fs.readdirSync(dir);
  files.forEach(fileName=> {
    const fileDir = path.join(dir, fileName);
    const stats = fs.statSync(fileDir);
    const isFile = stats.isFile();
    if (isFile) {
      fileList.push(fileDir);
    } else {
      listDirFiles(fileDir);
    }
  });
  return fileList;
}

module.exports = listDirFiles;