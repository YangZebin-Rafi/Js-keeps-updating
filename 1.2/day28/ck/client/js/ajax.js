let $ = (function() {
    function get(options) {
        options.type = "get";
        ajax(options);
    }

    function post(options) {
        options.type = "post";
        ajax(options);
    }

    function ajax(options) {
        let { type, url, data: param, success, error, timeout } = options;
        timeout = timeout || 10;
        console.log(options, timeout);

        let xhr = new XMLHttpRequest;
        if (type == "get") {
            url += param ? "?" + obj2QuerySting(param) : "?tn=" + Date.now();
            url = encodeURI(url);
            xhr.open("get", url, true);
            xhr.send();
        } else if (type == "post") {
            xhr.open("post", url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(obj2QuerySting(param));
        }
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                clearTimeout(timer);
                xhr.status == 200 ? success(xhr) : error(xhr);
            }
        };
        let timer = setTimeout(() => {
            xhr.abort(); /* 取消当前的网络请求 */
            alert("请检查网络！！！");
            clearTimeout(timer);
        }, timeout);
    }

    function obj2QuerySting(o) {
        /* {name:"zs",age:19}  => name=zs&age=19*/
        let arr = [];
        for (let key in o) {
            arr.push(`${key}=${o[key]}`);
        }
        return arr.join("&");
    }

    return {get, post, ajax };
})()