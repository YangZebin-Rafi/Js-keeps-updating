<?php
# echo "OK!";
# 拿到客户端提交的数据，并且打印出来
# 可以通过超级全局变量 $_GET
# print_r($_GET);  Array ( [usm] => ZS [psw] => 1234 )

$username = $_GET["usm"];
$password = $_GET["psw"];

echo "接收到客户端传入的用户名：".$username." 密码:".$password;
?>