01-Node的安装和初体验
  Node既不是jQuery那样的框架，也不是typeScript那样的语言。
  Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时，它提供了一个可以供JavaScript运行的环境。
    在 Node之前，JavaScript只能在网页中存在。
    在 Node之后，JavaScript就能够出现在任何方法。服务器编程(Node) + 嵌入式开发 + 图形界面工具 + 操作系统(Windows Linux Unix Node) + 人工智能
    <!-- 大前端 全栈开发 HTML + CSS + Javascript + JavaScript -->
    重点节点：
      (1) Ajax
      (2) ES6  Class ...  
      (3) Node

  JavaScript是一门脚本语言(只能嵌入到HTML网页)，JavaScript可以做服务器端开发(全栈开发)。
  安装：在官网点击下载链接直接安装即可。
  检查：$ node --version  能够看到版本信息就说明已经安装成功了。
  NPM: node package manager 包管理工具
  安装了Node之后，可以直接通过Node指令来执行JS代码，$ node test.js

02-Npm包管理工具的基本使用
  安装和管理包(jquery sass less ....)
  搜索包：$ npm search xx
  安装包：
    在项目目录中需要先提供package.json文件(配置)  
    (1) npm init 自己创建(通过交互来设置信息)
    (2) npm init -y (自动生成)
    $ npm install xx1 xx2

  卸载包：$ npm uninstall xx1 xx2 xx3
  更新包：$ npm update

03-模块化开发的演变和发展
    * commonJS(规则) -> Node(实现)
    * AMD           -> RequireJS(了解)
    * CMD           
    * ES6 

04-commonJS模块化规范
    * 导出：module.exports = {}
    * 导入：let module = require("./A.js") | let { a, showA } = require("./A.js");

05-es6模块化基本使用
    * 导入 import ... from ...
    * 导出 export ... 