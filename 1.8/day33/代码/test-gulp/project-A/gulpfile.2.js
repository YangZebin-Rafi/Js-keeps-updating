/* 01-先导入gulp这个模块 */
let { parallel, series, src, dest, pipe, watch } = require("gulp");

/* 任务(拷贝文件) 单个文件*/
let copyFile = () => {
    return src("./src/html/index.html").pipe(dest("./dist/html/"));
}

/* 任务(拷贝文件) 多个文件*/
let copyFiles = () => {
    return src(["./src/html/index.html", "./src/html/home.html", "./src/html/login.html"]).pipe(dest("./dist/html/"));
}

/* 任务(拷贝文件) 多个文件(同类型的)*/
let copyFilesWithType = () => {
    return src("./src/html/*.html").pipe(dest("./dist/html/"));
}

/* 任务(拷贝文件) 多个文件(同类型的)*/
let copyFilesWithType2 = () => {
    // return src(["./src/html/*.html", "./src/html/*.xml"]).pipe(dest("./dist/html/"));
    return src("./src/html/*").pipe(dest("./dist/html/"));
}

// let watchFile = () => {
//     /* 监听index.html文件，如果该文件发生了变化那么就执行copyFile任务 */
//     return watch("./src/html/index.html", copyFile);
// }

let watchFile = () => {
    /* 监听index.html文件，如果该文件发生了变化那么就执行copyFile任务 */
    return watch("./src/html/*", copyFilesWithType2);
}

exports.copyFileTask = copyFile;
exports.copyFilesTask = copyFiles;
exports.copyFilesWithTypeTask = copyFilesWithType;
exports.copyFilesWithTypeTask2 = copyFilesWithType2;
exports.watchFileTask = watchFile;