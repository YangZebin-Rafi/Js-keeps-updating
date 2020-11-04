<?php
# $_GET 可以获取GET请求的参数
# $_POST 可以获取POST请求的参数
# $_REQUEST 可以获取网络请求的参数

$usm = $_REQUEST['username'];
$pwd = $_REQUEST["password"];
echo "ajax 123!!! $usm,$pwd";
?>