<?php

# 提供一个JSON数据
$json = '{"name":"zs","age":19,"color":"red"}';

# JSON       ->  PHP关联数组
$dict = json_decode($json,true);
print_r($dict);

# PHP关联数组 ->  JSON
$jsonStr = json_encode($dict);
print_r($jsonStr);  

?>