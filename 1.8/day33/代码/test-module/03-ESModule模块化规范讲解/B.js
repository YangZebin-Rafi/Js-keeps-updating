var b = 888;
var showB = function() {
    console.log("showB", b);
}
class Person {
    constructor(name) {
        this.name = name;
    }
}

/* 导出多个数据 */
export { b, showB, Person };