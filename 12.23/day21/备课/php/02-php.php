<?php
# [1] 注释
# (1) 单行注释   //  +  #
# (2) 多行注释   /* 内容 */

# [2] 数据类型
# JavaScript数据类型：number string boolean undefined null Object Symbol
# PHP数据类型       ：(浮点型 整型) 字符串 布尔类型 null 资源类型  class(类) Array（数组|字典） 函数

# [3] 变量
# JavaScript  var a = 123; let b = 321;
# PHP
$name = "Rose";
$age  = 19;
$isBoy = true;
$sex = "男";
$height = 1.79;
$arr    = array("小强","小黄","小花");

# [4] 控制输出
# JavaScript控制输出：console.log() | document.write() | alert()
# PHP  echo 输出字符串  | print() |  print_f()  print_r() 打印复杂的数据类型  | var_dump() 更详细
#  print_r()   {echo   var_dump()}
echo "姓名：". $name;
echo "<br>";
echo "年龄：" . $age;
echo "<br>";
echo "性别：" . $sex;
echo "<br>";
echo "是否是男孩：" . $isBoy;
echo "<br>";
echo $arr;
echo "<br>";
echo "__________________<br>";

print("姓名：" . $name);
print("<br>");
print("年龄：" . $age);
print("<br>");
print("性别：" . $sex);
print("<br>");
print("是否是男孩：" . $isBoy);
print("<br>");
print($arr);
print("<br>");
echo "__________________<br>";
print_r($arr);
print("<br>");
echo "__________________<br>";
var_dump($arr);

# 语句： PHP语法规定每行语句结束必须要使用分号来隔开，在JavaScript代码中分号可以被省略，但是PHP中不能省略。
# 大小写的问题
#  (1) 变量区分大小写
#  (2) 函数、class、关键字不区分大小写
$address = "北京市";
$Address = "南京市";
echo $address.$Address;

echo "__________________<br>";
function sum($a,$b){
  $res = $a + $b;
  echo $res;
}

sum(91,90);
echo "__________________<br>";
Sum(2, 3);
echo "__________________<br>";
sUm(12, 32);

# [5] 数组(字典)和函数
# 索引数组 - 关联数组
# JavaScript var arr = new Array(1,2,3);
# 数据的创建
$arr1 = array("哈哈","呵呵","嘿嘿");
$arr2 = array("name"=>"张三","age"=>18,"className"=>"1906");
echo "__________<br>";
print_r($arr1);
echo "<br>";
print_r($arr2);

# 元素的访问
echo "<br>";
echo $arr1[1];
echo "<br>";
echo $arr2["className"];
echo "<br>";

$tag = 100;
# 函数的声明/函数的调用 
# 注意点：(1) 函数名不区分大小写  |  (2) 函数属于局部作用域，在函数中无法直接访问全局变量 
# [1] global声明
# [2] 通过超级全局变量 
function mul($a,$b)
{
  echo "获取的实际参数:a = ".$a.", b = ".$b;
  echo "<br>";
  echo "a - b = ".($a-$b);
  echo "<br>";

  //$XX = "HHH";   
  //（1）
  // global $tag;
  //echo "++".$tag;
  // (2)
  // echo "--".$GLOBALS["tag"];
}
mul(20,4);
MUL(30, 19);

# [6] 流程控制结构
# JavaScript ： 顺序 - 分支(switch if..else) - 循环(while do..while for)
# PHP 一致。
$score = 55;
// if($score >= 90)
// {
//   echo "优秀";
// }else if($score >= 80){
//   echo "良好";
// } else if ($score >= 70) {
//   echo "中等";
// } else if ($score >= 60) {
//   echo "及格";
// } else{
//   echo "不及格";
// }

if ($score >= 90) :
  echo "优秀";
elseif ($score >= 80) :
  echo "良好";
elseif ($score >= 70) :
  echo "中等";
elseif ($score >= 60) :
  echo "及格";
else :
  echo "不及格";
endif;


echo "<br>";
$arrData = array(100,200,300,400,500);
for($i = 0;$i < count($arrData);$i++)
{
  echo $arrData[$i]."<br>";
}


# [7] class类的基本写法
class Person{
  public $name = "张三丰";
  public $age  = 120;
  function showName(){
    echo "姓名：". $this->name;
  }
  function showAge()
  {
    echo "年龄：" . $this->age;
  }
}

$p1 = new Person();
# 访问成员
echo $p1->name;
echo $p1->age;
# 调用方法
$p1->showName();
$p1->showAge();

?>