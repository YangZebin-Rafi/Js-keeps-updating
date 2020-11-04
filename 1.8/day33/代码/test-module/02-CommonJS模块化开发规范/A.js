var a = 123;
var showA = function() {
    console.log("showA", a);
}

/* 导出该文件模块的数据 */
module.exports = {
    showA,
    a
}