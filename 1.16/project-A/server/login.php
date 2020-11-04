<?php

# 登录
# 接口：login.php?username=xxx&password=xxxx
# 核心逻辑：
# (1) 先去数据库中检查是否存在指定用户名对应的数据
#    [1] 如果不存在，返回错误的提示信息(该用户名不存在!)
#    [2] 如果存在，那么就继续检查密码
#        [1] 如果密码不正确，那么就返回错误的提示信息(对不起，您的密码不正确！)
#        [2] 如果密码正确，那么就返回登录成功。


$username = $_REQUEST["username"];
$password = $_REQUEST["password"];

$db = mysqli_connect("127.0.0.1","root","root","sndemo");
$sql =  "SELECT * FROM user WHERE username='$username'";
$result = mysqli_query($db,$sql);
if(mysqli_num_rows($result) == 0)
{
    // [1] 如果不存在，返回错误的提示信息(该用户名不存在!)
    echo '{"status":"error","msg":"该用户名不存在!"}';
}else{
  $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
  $_password = $data[0]["password"];
  $id = $data[0]["id"];
  if($_password != $password)
  {
    // 如果密码不正确，那么就返回错误的提示信息(对不起，您的密码不正确！)
      echo '{"status":"error","msg":"对不起，您的密码不正确！"}';
  }else{
    // 如果密码正确，那么就返回登录成功。
    echo "{\"status\":\"success\",\"msg\":\"登录成功！！！\",\"id\":$id}";
  }
}
?>
