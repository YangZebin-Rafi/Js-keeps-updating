/* 001-导入gulp模块 */
let { pipe, src, dest, series, parallel } = require("gulp");

/* 002-设计任务(Task) */
let task1 = () => {
    console.log("task1---");
}

let task2 = () => {
    console.log("task2---");
}

let task3 = () => {
    console.log("task3---");
}

/* 003-导出任务 */
/* [1] 单个任务的情况，导出任务taskA,该任务中只有一个子任务那就是task1 */
exports.taskA = task1;

/* [2] 多个任务的情况，导出任务taskB,该任务中有多个子任务是task1、task、task3，这三个任意同步串行执行。 */
exports.taskB = parallel(task1, task2, task3);

/*[3] 多个任务的情况，导出任务taskC,该任务中有多个子任务是task1、task、task3，这三个任意异步并发执行。 */
exports.taskC = series(task1, task2, task3);

/*[4] 多个任务的情况，导出任务taskD,该任务中有多个子任务是taskB和taskC，以同步串行的方式执行这两个任务
  taskB中的三个任务同步执行，taskC中的三个任务异步执行。 */
exports.taskC = series(task1, task2, task3);