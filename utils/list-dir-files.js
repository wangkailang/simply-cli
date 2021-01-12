const fs = require('fs');
const path = require('path');

/**
 * 列出目录下面的所有文件
 * @param {string} dir 文件夹目录
 * @returns {array} 文件路径数组
 */
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