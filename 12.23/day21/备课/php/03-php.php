<?php
# JSON
# JavaScript JSON.parse(JSON->Obj|Arr)  JSON.stringify(Obj->JSON)
# PHP        
# (1) 序列化操作  Obj->JSON
$o = array("name"=>"wc","age"=>18,"className"=>"1906");
var_dump($o);
echo "<br>";
echo json_encode($o);   //{"name":"wc","age":18,"className":"1906"}


# (2) 反序列化操作  JSON->Obj
$json = '{"name":"wc","age":18,"className":"1906"}';
$resObj = json_decode($json,true);
echo "<br>";
var_dump($resObj);
?>