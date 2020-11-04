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
        init: function(selector) {

            /* 如果参数为假 */
            if (!selector) {
                return this;
            }
            /* 如果参数是函数 */
            if (typeof selector == "function") {
                document.addEventListener("DOMContentLoaded", selector)
            }
            /* 如果参数是字符串 */
            else if (typeof selector == "string") {
                /* 标签字符串 "<div>测试</div>" "<a>"*/
                if (selector.charAt(0) == "<" && selector.charAt(selector.length - 1) == ">" && selector.length >= 3) {
                    let ele = document.createElement("div");
                    ele.innerHTML = selector;
                    let nodes = ele.children;

                    for (let i = 0, len = nodes.length; i < len; i++) {
                        this[i] = nodes[i];
                    }
                    this.length = nodes.length;
                }
                /* 选择器字符串  "div"  ".box"*/
                else {
                    let nodes = document.querySelectorAll(selector);
                    for (let i = 0, len = nodes.length; i < len; i++) {
                        this[i] = nodes[i];
                    }
                    this.length = nodes.length;
                }
            }
            /* 如果参数是数组或者是伪数组 */
            else if (Array.isArray(selector) || typeof selector == "object" && selector != null && "length" in selector && selector.length - 1 in selector) {
                /* 把数组或者是伪数组中的数据保存到jQuery对象中返回 */
                for (let i = 0, len = selector.length; i < len; i++) {
                    this[i] = selector[i];
                }
                this.length = selector.length;
            } else {
                this[0] = selector;
                this.length = 1;
            }

        },
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