$(() => {
    /* 001-先处理切换功能 */
    $(".tab-login-item").click(function() {
        /* 设置当前标签选中状态并且排他处理 */
        $(this).addClass("active").siblings().removeClass("active");
        /* 设置让内容区域切换 */
        $(".loginView").eq($(this).index()).addClass("loginViewCurrent").siblings().removeClass("loginViewCurrent");
    })

    /* 002-点击登录按钮 */
    $("#loginBtn").click(function() {
        let username = $.trim($("#username-ID").val());
        let password = $.trim($("#password-ID").val());
        if (username.length == 0) {
            alert("请输入用户名");
            return;
        }

        if (password.length == 0) {
            alert("请输入密码");
            return;
        }

        if (!$("#protocol").is(":checked")) {
            alert("请阅读并同意用户协议");
            return;
        }

        let data = {
            username,
            password: md5(password).substr(0, 10)
        };

        /* .... */
        $.ajax({
            type: "post",
            url: "../../server/login.php",
            data,
            dataType: "json",
            success: function(response) {
                if (response.status == "success") {
                    window.location.href = "http://www.baidu.com";
                } else {
                    alert(response.msg);
                }
            }
        });

    })
})