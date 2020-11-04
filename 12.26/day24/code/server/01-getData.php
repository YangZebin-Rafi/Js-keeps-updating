<?php
# 01-加载JSON文件的数据
$json = file_get_contents("./sndata.json");
# 02-返回JSON
echo $json;
?>