<?php
// $data = array(
//   "nz" => array("title" => "大牌女装","des"  => "换季清仓大甩卖","src"=> "./img/1.png"),
//   "bb" => array("title" => "品牌包包", "des" => "最贵的包包 只卖9.9", "src" => "./img/2.png"),
//   "xz" => array("title" => "金牌男鞋", "des" => "厂长是我表哥100元一双", "src" => "./img/3.jpg")
// );
# 读取JSON文件中的数据 得到的结果是JSON
$json = file_get_contents("data.json");
$data = json_decode($json,true);

# 获取参数(类型)
$typeVal = $_GET["type"];
$responseData = $data[$typeVal];
echo json_encode($responseData,true);
?>