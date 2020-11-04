/* 在index.js文件中需要使用A.js|B.js文件中的内容 */
/* 导入：index.js需要使用A和B中的数据，那么就需要导入 */
/* 导出：A.js 和B.js需要把指定的数据(要暴露的数据)导出 */

console.log("我是index.js文件");

/* 导入A.js模块 */
let moduleA = require("./A.js");
console.log(moduleA);
console.log(moduleA.a);
moduleA.showA();

/* 导入B.js模块 */
// let moduleB = require("./B.js")
// let showB = moduleB.showB;
// console.log(moduleB);

let { showB, b } = require("./B.js");
showB();
console.log(b);