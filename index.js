#! /usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const md2pdf = require('./commands/md2pdf');

program
  .version('0.0.1')
  .command('pdf')
  .description('markdown 文件转成 pdf')
  .option('-sd, --source-dir <string>', 'markdown 文件目录')
  .option('-sf, --source-file <string>', 'markdown 文件路径')
  .requiredOption('-td, --target-dir <string>', '生成 pdf 文件存放目录')
  .option('-s, --suffix <string>', '匹配文件后缀，默认是 md')
  .action(md2pdf);

program.parse(process.argv);