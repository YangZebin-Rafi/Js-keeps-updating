/* Gulp常用的方法 */
/* 001-导入常用的方法 */
const { src, dest, pipe, watch, parallel } = require("gulp");

/* 002-常用方法的演示 */
/* [1] 拷贝单个文件 */
let cloneFileTask = () => {

    /* 把src中指定的文件拷贝一份保存到dest指定的目录中 */
    return src("./src/html/index.html").pipe(dest("./dist/html"))
}
exports.cloneFileTask = cloneFileTask;

/* [2] 拷贝两个文件 */
// let cloneFilesTask = () => {
//     return src(["./src/html/index.html", "./src/html/login.html"]).pipe(dest("./dist/html"))
// }

/* [3] 根据类型拷贝文件 */
let cloneFilesTask = () => {
    return src("./src/html/*.html").pipe(dest("./dist/html"))
}

// let cloneFilesTask = () => {
//     return src(["./src/html/*.html", "./src/js/*.js"]).pipe(dest("./dist"))
// }
// exports.cloneFilesTask = cloneFilesTask;


/* [4] 拷贝多种类型的文件到目标目录 */
/* 方案(1) */
// let cloneFileHTMLTask = () => {
//     return src("./src/html/*.html").pipe(dest("./dist/html"))
// }

// let cloneFileJSTask = () => {
//     return src("./src/js/*.js").pipe(dest("./dist/js"));
// }
// exports.cloneFileHTMLAndJsTask = parallel(cloneFileHTMLTask, cloneFileJSTask);

/* 方案(2) */
let copyFilesTask = () => {
    /* ** 表示匹配当前目录所有的文件和文件夹 */
    /* *  表示匹配当前目录所有的文件 */
    return src("./src/**/*").pipe(dest("./dist/"));
}
exports.copyFilesTask = copyFilesTask;


/* 需求：监听src/html/index.html文件，如果该文件发生了变化，那么就马上拷贝一份最新的版本到dist/html目录 */
// let watchTask = () => {
//     return watch("./src/html/index.html", cloneFileTask);
// }



let watchTask = () => {
    return watch("./src/html/*.html", cloneFilesTask);
}
exports.watchTask = watchTask;