/* 001-导入常用的方法 */
const { src, dest, pipe, watch, parallel } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cssmin = require("gulp-cssmin");
const less = require("gulp-less");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const babel = require("gulp-babel");

/* 002-压缩HTML文件 */
/* [1] 先安装插件   $npm install gulp-htmlmin  --save-dev */
/* [2] 导入插件 */
/* [3] 编写任务 */
/* [4] 导出任务 */
let HTMLMinTask = () => {
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
    return src("./src/html/index.html").pipe(htmlmin(options)).pipe(dest("./dist/html"));
}
exports.HTMLMinTask = HTMLMinTask;

/* 002-压缩CSS文件 */
/* $npm install gulp-cssmin  --save-dev */
let CSSMinTask = () => {
    return src("./src/css/style.css").pipe(cssmin()).pipe(dest("./dist/css"));
}
exports.CSSMinTask = CSSMinTask;

/* 003-Less插件 */
/* $ npm install gulp-less --save-dev */
let LessTask = () => {
    return src("./src/less/*.less").pipe(less()).pipe(dest("./output/css"));
}
exports.LessTask = LessTask;

/* 004-压缩和丑化(混淆)JS文件 */
/* $ npm install gulp-uglify --save-dev */
let uglifyTask = () => {
    return src("./src/js/index.js").pipe(uglify()).pipe(dest("./dist/js"));
}
exports.uglifyTask = uglifyTask;

/* 005-重命名 */
/* $ npm install gulp-rename --save-dev */
let uglifyTaskB = () => {
    return src("./src/js/index.js")
        .pipe(dest("./dist/js"))
        .pipe(uglify())
        .pipe(rename("index.min.js"))
        .pipe(dest("./dist/js"));
}
exports.uglifyTaskB = uglifyTaskB;

/* 006-合并文件CSS|JS文件 */
/* $ npm install gulp-concat --save-dev */
let concatTask = () => {
    return src("./src/js/*.js")
        .pipe(concat("target.js"))
        .pipe(dest("./dist/js"))
        .pipe(uglify())
        .pipe(rename("target.min.js"))
        .pipe(dest("./dist/js"));
}

exports.concatTask = concatTask;

/* 007-Babel  ES6->ES5   */
/* 001-编写package.json文件 */
/* 002-执行命令行 npm install    根据package.json配置文件安装需要的所有包(模块) */
/* 
        "dependencies": {
                "babel": "^6.23.0"
        },
        "babel-core": "^6.26.3",
        "babel-preset-es2015": "^6.24.1",
        "gulp-babel": "^7.0.1"
*/
let es6ToEs5Task = () => {
    return src("./src/js/es.js").pipe(babel({
        presets: ["es2015"]
    })).pipe(dest("./dist/js"))
}
exports.es6ToEs5Task = es6ToEs5Task;