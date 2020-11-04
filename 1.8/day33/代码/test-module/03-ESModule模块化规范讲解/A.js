/* 导入：index.js文件模块 */
import { index } from "./index.js";
console.log("A--", index)

/* 导出 */
/* 001-导出单个数据 */
// export var a = 123;
// export var showA = function() {
//     console.log("showA", a);
// }

var a = 123;
var showA = function() {
    console.log("showA", a);
}
export { a, showA };