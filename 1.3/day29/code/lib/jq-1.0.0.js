/* 001-外层是闭包(立即执行函数) */
(function() {
    /* 002-默认开启严格模式 */
    "use strict";

    /* 003-设置当前框架的版本号 */
    let version = "1.0.0";

    /* 004-声明jQuery工厂函数 */
    let jQuery = function(selector) {

        /* 构造函数：jQuery.fn.init */
        /* 返回：jQuery.fn.init构造函数创建出来的实例对象 */
        return new jQuery.fn.init(selector);
    }

    /* 005-设置jQuery的原型对象 */
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        init: function() {},
        eq() {},
        get() {},
        first() {},
        last() {},
        toArray() {}
    }

    /* 006-设置原型对象共享(为了让init的实例对象可以访问jQuery原型成员) */
    jQuery.fn.init.prototype = jQuery.fn;

    /* 007-把jQuery和$暴露出去 */
    window.jQuery = window.$ = jQuery;
})();