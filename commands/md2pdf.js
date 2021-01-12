const mdpdf = require('mdpdf');
const path = require('path');
const fs = require('fs');
const listDirFiles = require('../utils/list-dir-files');
const { error, success } = require('../utils/output');

async function asyncConvert(options) {
  await new Promise((resolve, reject) => {
    mdpdf.convert(options).then((pdfPath) => {
      resolve(pdfPath);
    }).catch((err) => {
      reject(err);
    });
  })
}

async function mdFile2Pdf(sourceFile, targetDir) {
  const file = path.basename(sourceFile);
  const [fileName, ] = file.split('.');
  if (fs.existsSync(sourceFile)) {
    success(`文件 ${sourceFile} 转成 ${targetDir}/${fileName}.pdf.`);
    const options = {
      source: sourceFile,
      destination: `${targetDir}/${fileName}.pdf`,
      ghStyle: true,
      defaultStyle: true,
      pdf: {
        format: 'A4',
        orientation: 'portrait',
        quality: '100',
        border: {
          top: '10mm',
          left: '10mm',
          bottom: '10mm',
          right: '10mm'
        }
      }
    };
    await asyncConvert(options);
  } else {
    error(`文件 ${sourceFile} 不存在`);
  }
}

module.exports = async function (options) {
  const { sourceDir, sourceFile, targetDir, suffix = 'md' } = options;
  if (sourceDir) {
    const sourceDirStat = fs.statSync(sourceDir);
    if (!sourceDirStat.isDirectory()) {
      error(`${sourceDir} 不是文件目录`);
    } else {
      const sourceFiles = listDirFiles(sourceDir).filter(file => file.endsWith(suffix));
      success(`检测到 ${sourceFiles.length} 个以 ${suffix} 为后缀的文件，将它们转为 pdf 格式...`);
      for(let i = 0; i < sourceFiles.length; i++) {
        await mdFile2Pdf(sourceFiles[i], targetDir);
      }
    }
  } else {
    const sourceFileStat = fs.statSync(sourceFile);
    if (!sourceFileStat.isFile()) {
      error(`${sourceFile} 不是文件`);
    } else {
      await mdFile2Pdf(sourceFile, targetDir);
    }
  }
}