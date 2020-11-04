<?php
// echo "Hi!";
# 获取客户端提交的参数 
# GET请求，$_GET 超级全局变量（对象）
# POST请求，$_POST 超级全局变量
echo "获取的用户名:".$_GET["usn"]. "<br>";
echo "获取的密码: ".$_GET ["pwd"] . "<br>";
// var_dump($_GET);
?>