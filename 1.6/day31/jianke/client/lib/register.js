/* 分析： */
/* (1) 表单验证 */
/* (2) 图形验证码 */
/* (3) 点击注册 */
$(() => {

    /* 初始默认值 */
    $("#usernameID").val("zs");
    $("#passwordA,#passwordB").val("123");
    $("#phoneID").val("18689429781");

    /* 用户名表单验证 */
    $("#usernameID").blur(function() {
        let val = $.trim($(this).val());
        if (/^[a-zA-Z]{2,6}$/.test(val)) {
            $(this).next().text("");
            $(this).parents(".form-item").removeClass("form-group-error")
        } else {
            $(this).next().text("用户名不规范！");
            $(this).parents(".form-item").addClass("form-group-error")
        }
    })

    /* 手机号码 */
    $("#phoneID").blur(function() {
        let val = $.trim($(this).val());
        if (/^1[3-9]\d{9}$/.test(val)) {
            $(this).next().text("");
            $(this).parents(".form-item").removeClass("form-group-error")
        } else {
            $(this).next().text("手机号码不规范！");
            $(this).parents(".form-item").addClass("form-group-error")
        }
    })

    /* 密码 */
    $("#passwordA").blur(function() {
        let val = $.trim($(this).val());
        if (/^[a-zA-Z0-9]{3,6}$/.test(val)) {
            $(this).next().text("");
            $(this).parents(".form-item").removeClass("form-group-error")
        } else {
            $(this).next().text("密码不规范！");
            $(this).parents(".form-item").addClass("form-group-error")
        }
    })

    /* 确认密码 */
    $("#passwordB").blur(function() {
        let val = $.trim($(this).val());
        if ($.trim($("#passwordA").val()) == val) {
            $(this).next().text("");
            $(this).parents(".form-item").removeClass("form-group-error")
        } else {
            $(this).next().text("两次输入的密码不一致！！！");
            $(this).parents(".form-item").addClass("form-group-error")
        }
    })

    /* 图形验证码 */
    /* [1] 先下载和引用插件 */
    /* [2] 在页面中指定的位置提供canvas标签 */
    /* [3] 在js代码中调用插件中提供的构造函数创建实例对象，并且调用draw方法 */
    let imgCodeTarget;
    let captcha = new Captcha({ lineNum: 10, dotNum: 3, fontSize: 40, length: 4, content: "012345432424542" });
    captcha.draw(document.querySelector('#captcha'), r => {
        imgCodeTarget = r;
        console.log(r, '验证码1');
        /* 当用户点击图形变化验证码的时候需要重新校验 */
        $("#imageCode").trigger("blur");
    });


    /* 图形验证码校验 */
    $("#imageCode").blur(function() {
        let val = $.trim($(this).val());
        if (imgCodeTarget == val) {
            $(this).next().text("");
            $(this).parents(".form-item").removeClass("form-group-error")
        } else {
            $(this).next().text("输入的验证码不正确！！！");
            $(this).parents(".form-item").addClass("form-group-error")
        }
    })


    /* 注册按钮的点击事件 */
    $("#registerBtn").click(function() {
        /* 001-检查用户是否输入了正确的信息并且通过验证，如果没有通过那么就返回 */
        $("#usernameID,#phoneID,#imageCode,#passwordB,#passwordA").trigger("blur");
        if ($(".form-group-error").length != 0) {
            return;
        }

        /* 002-检查用户是否勾选了用户协议*/
        if (!$("#protocol").is(":checked")) {
            alert("请阅读并同意用户协议！");
            return;
        }

        /* 003-发送网络请求把注册相关的信息提交给服务器 */
        let data = {
            username: $.trim($("#usernameID").val()),
            password: md5($.trim($("#passwordA").val())).substr(0, 10),
            phone: $.trim($("#phoneID").val())
        }

        $.ajax({
            data,
            type: "get",
            dataType: "json",
            url: "../../server/register.php",
            success(response) {
                // console.log(response);
                /* 如果注册成功，那么就先提示用户然后再跳转 */
                if (response.status == "success") {
                    alert(response.msg);
                    window.location.href = "http://www.baidu.com";
                } else {
                    alert(response.msg);
                }
            }
        })

    })
})