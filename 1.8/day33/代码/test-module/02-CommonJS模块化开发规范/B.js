var a = 666;
var b = 888;
var showB = function() {
    console.log("showB", b);
}

module.exports = {
    showB,
    b
}