# simply-cli

## 基本命令

```bash
simply -h

Usage: simply [options] [command]

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  pdf [options]   markdown 文件转成 pdf
  help [command]  display help for command
```

### `simply pdf`

```bash
simply pdf -h

Usage: simply pdf [options]

markdown 文件转成 pdf

Options:
  -sd, --source-dir <string>   markdown 文件目录
  -sf, --source-file <string>  markdown 文件路径
  -td, --target-dir <string>   生成 pdf 文件存放目录
  -s, --suffix <string>        匹配文件后缀，默认是 md
  -h, --help                   display help for command
```