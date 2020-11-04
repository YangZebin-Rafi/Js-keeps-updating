var moduleA = (function() {
    var a = 123;
    var showA = function() {
        console.log("showA", a);
    }

    return { a, showA };
})();