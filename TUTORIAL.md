## simply cli 构建流程

### 安装依赖

```bash
yarn add commander inquirer chalk -D
```

- `commander` 提供了用户命令行输入和参数解析的强大功能，简化命令行开发。
  - 参数解析
  - 强制多态
  - 可变参数
  - Git 风格子命令
  - 自动化帮助信息
  - 自定义帮助等

- `inquirer` 用户界面和查询会话流程
  - 数值输入
  - 信息验证
  - 列表选择
  - 提示说明
  - 复选框

- `chalk` 美化命令行模块

### 配置全局运行方式

1. `package.json` 中的 `bin` 字段用来存放可执行文件，添加配置：

 ```json
  "bin": {
   "simply": "./index.js"
  }
 ```

2. 在执行文件入口添加可执行说明

 ```js
 #! /usr/bin/env node
 ```

3. 执行 `npm link` 将 `simply` 字段复制到 npm 全局模块文件夹 node_modules 内，并创软链接（将 simply 的路径加入到环境变量 PATH）

 ```bash
 npm link

 # /Users/mac/.nvm/versions/node/v10.20.0/bin/simply -> /Users/mac/.nvm/versions/node/v10.20.0/lib/node_modules/simply/index.js
 # /Users/mac/.nvm/versions/node/v10.20.0/lib/node_modules/simply -> /Users/mac/develop/simply 
 ```

 然后执行 `simply -h` 就会看到命令使用帮助。