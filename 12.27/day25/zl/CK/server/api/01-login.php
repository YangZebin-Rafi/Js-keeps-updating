<?php
    header("Content-Type:text/json;charset=utf-8");

    # 获取用户提交的用户名和密码
    $username = $_REQUEST["username"];
    $password = $_REQUEST["password"];
    # 模拟数据库保存的用户名和密码数据(假设密码均为123456)
    $usernames = array("wdd","xsl","wwj");
    $pwd       = "123456";

    # 统一接口数据：{code:100，msg:"",status:"error"}

    # 检查用户名是否存在
    if(in_array($username,$usernames))
    {
        # 检查密码是否正确
        if($password == $pwd)
        {
            echo '{"code":100,"msg":"登录成功","status":"success"}';
        }else
        {
            echo '{"code":101,"msg":"密码不正确！","status":"error"}';
        }
    }else
    {

        echo '{"code":102,"msg":"用户名不存在！","status":"error"}';
    }


?>