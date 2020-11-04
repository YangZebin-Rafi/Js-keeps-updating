function get(options) {
    options.type = "get";
    ajax(options);
}

function post(options) {
    options.type = "post";
    ajax(options);
}

function ajax(options) {
    let { type, url, data, success, error, time } = options; //对象的解构语法
    time = time || 1000;
    let xhr = new XMLHttpRequest;
    if (type == "get") {
        url = url + obj2QueryStringFormat(data);
        url = encodeURI(url); //中文转码的处理
        xhr.open("get", url, true);
        xhr.send();
    } else if (type == "post") {
        xhr.open("post", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(obj2QueryString(data));
    }
    let timer = setTimeout(() => {
        xhr.abort();
        alert("请求超时");
    }, time);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            clearTimeout(timer);
            if (xhr.status == 200) {
                success(xhr);
            } else {
                error(xhr);
            }
        }
    }
}

function obj2QueryStringFormat(o) {
    if (o == null) return "?t=" + Math.random();
    return "?" + obj2QueryString(o);
}

function obj2QueryString(o) {
    let arr = [];
    for (const key in o) {
        if (o.hasOwnProperty(key)) {
            const val = o[key];
            arr.push(`${key}=${val}`);
        }
    }
    return arr.join("&");
}