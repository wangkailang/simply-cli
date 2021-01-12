const mdpdf = require('mdpdf');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const listDirFiles = require('../utils/list-dir-files');

function mdFile2Pdf(sourceFile, targetDir) {
  const file = path.basename(sourceFile);
  const [fileName, ] = file.split('.');
  if (fs.existsSync(sourceFile)) {
    console.log(chalk.greenBright(`文件 ${sourceFile} 转成 ${targetDir}/${fileName}.pdf.`));
    let options = {
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
    mdpdf.convert(options).then((pdfPath) => {
        console.log('PDF Path:', pdfPath);
    }).catch((err) => {
        console.error(err);
    });
  } else {
    console.error(`File ${sourceFile} not find!`);
  }
}

module.exports = function (options) {
  const { sourceDir, sourceFile, targetDir, suffix = 'md' } = options;
  if (sourceDir) {
    const sourceFiles = listDirFiles(sourceDir).filter(file => file.endsWith(suffix));
    for(let i = 0; i < sourceFiles.length; i++) {
      mdFile2Pdf(sourceFiles[i], targetDir);
    }
  } else {
    mdFile2Pdf(sourceFile, targetDir);
  }
}