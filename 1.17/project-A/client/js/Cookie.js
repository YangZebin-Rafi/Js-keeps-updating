let Cookie = (function() {
    function getItem(key) {
        /* "name=lw; class=H5; color=yellow" */
        /* ["name=lw","class=H5","color=yellow"] */
        let cookieArr = document.cookie.split("; ");
        // cookieArr.forEach((item) => {
        //     let arr = item.split("=");
        //     /* ["name","lw"] */
        //     /* ["class","H5"] */
        //     /* ["color","yellow"] */

        // })
        for (let index = 0; index < cookieArr.length; index++) {
            const element = cookieArr[index].split("=");
            console.log(element);
            if (key == element[0]) {
                return element[1];
            }
        }
    }

    function setItem(key, val, day) {
        if (day == undefined) {
            document.cookie = `${key}=${val}`;
        } else {
            let date = new Date();
            date.setDate(date.getDate() + day);
            document.cookie = `${key}=${val};expires=` + date;
        }
    }

    function keys() {
        let cookieArr = document.cookie.split("; ");
        let keyArr = [];
        for (let index = 0; index < cookieArr.length; index++) {
            const element = cookieArr[index].split("=");
            keyArr.push(element[0]);
        }
        return keyArr;
    }

    function removeItem(key) {
        setItem(key, "", -1); /* 设置当前数据的有效期为前一天 */
    }

    function hasItem(key) {
        let keyArr = keys(); /* ["color", "name", "id"] */
        return keyArr.includes(key);
    }

    function clear() {
        let keyArr = keys(); /* ["color", "name", "id"] */
        keyArr.forEach(ele => removeItem(ele));
    }

    return { getItem, setItem, removeItem, hasItem, clear, keys };
})()