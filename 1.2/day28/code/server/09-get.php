<?php
# 001-获取客户端提交的参数信息
$type = $_REQUEST["type"];
$json = file_get_contents("./data.json");

# 002-先把JSON数据转换为对象
$data = json_decode($json,true);
$data = $data[$type];

# 003-把过滤之后的对象转换为JSON再返回
echo json_encode($data);
?>