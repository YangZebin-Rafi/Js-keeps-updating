/* 01-先导入gulp这个模块 */
let { parallel, series, src, dest, pipe, watch } = require("gulp");

/* 002-定制一个任务 */
let task1 = (callBack) => {
    console.log("task--1");
    callBack();
}

let task2 = (callBack) => {
    console.log("task--2");
    callBack();
}

/* 003-导出任务  */
/* 单个任务 */
exports.taskA = task1;
exports.taskB = task2;

/* 多个任务 */
/* 异步的执行task1和task3这两个任务 */
exports.taskC = parallel(task1, task2);
/* 同步的执行task1和task3这两个任务 */
exports.taskD = series(task1, task2);

/* 复杂情况 */
exports.taskE = series(this.taskC, this.taskD);

/* 004-执行任务  gulp taskA */