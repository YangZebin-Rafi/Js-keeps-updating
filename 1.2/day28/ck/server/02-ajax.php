<?php
# 设置响应头信息：告诉前端页面返回的是XML文档
header("Content-Type: text/xml; charset=UTF-8");

# 001-先读取XML文件的内容
$xml =file_get_contents("data.xml");

# 002-直接返回整个XML文件的内容
echo $xml;
?>