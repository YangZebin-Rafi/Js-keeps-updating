/* 01-先导入gulp这个模块 */
let { parallel, series, src, dest, pipe, watch } = require("gulp");
let htmlmin = require("gulp-htmlmin");

/* 001-压缩Html文件的插件 */
/* (1) 先通过命令行下载插件 */
/* $ npm install gulp-htmlmin --save-dev */
/* (2) 把插件导入进来 */
/* (3) 利用该插件来写Task */
let htmlminTask = () => {
    var options = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: false, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    };
    return src("./src/html/index.html").pipe(htmlmin(options)).pipe(dest("./dist/html/"));
};
/* (4) 把任务导出并且通过命令行执行 */
exports.htmlminTask = htmlminTask;

/* 002-压缩CSS文件 cssmin */
/* $ npm install gulp-cssmin --save-dev */
let cssmin = require("gulp-cssmin");

/* 需求：对1.css文件压缩，压缩之后拷贝到目标目录 */
let cssminTask = () => {
    return src("./src/css/1.css").pipe(cssmin()).pipe(dest("./dist/css/"));
}
exports.cssminTask = cssminTask;

/* 需求：先把1.css文件拷贝目标目录，再对该文件压缩，压缩之后保存为1.min.css */
/* 003-安装重命名的插件 rename */
/* $ npm install gulp-rename --save-dev */
let rename = require("gulp-rename");
let cssMinWithRename = () => {
    return src("./src/css/1.css")
        .pipe(dest("./dist/css/"))
        .pipe(cssmin())
        .pipe(rename("1.min.css"))
        .pipe(dest("./dist/css/"))
}
exports.cssMinWithRenameTask = cssMinWithRename;


/* 004-安装合并文件的插件 concat */
/* $ npm install gulp-concat --save-dev */
/* 需求：把a.js和B.js文件合并为index.js文件拷贝到dist目录 */
let concat = require("gulp-concat");
let concatTask = () => {
    return src("./src/js/*.js").pipe(concat("index.js")).pipe(dest("./dist/js/"));
}
exports.concatTask = concatTask;

/* 005-js文件的压缩和混淆(丑化) */
/* uglify */
/* $ npm install gulp-uglify --save-dev */
let uglify = require("gulp-uglify");
let uglifyTask = () => {
    return src("./src/js/jq-1.0.7.js").pipe(uglify()).pipe(dest("./dist/js/"));
}
exports.uglifyTask = uglifyTask;


/* 006-ES6代码转换ES5代码 */
const babel = require("gulp-babel");
let babelTask = () => {
    return src("./src/js/demo.js").pipe(babel({ presets: ["es2015"] })).pipe(dest("./dist/js/"));
}
exports.babelTask = babelTask;


// exports.test = parallel(this.htmlminTask, this.concatTask, this.uglifyTask, this.babelTask);
/* less */