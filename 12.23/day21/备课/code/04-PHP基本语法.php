<?php

# 声明变量
// $num = 123;
// $str = "我是字符串";
// echo "输出内容到页面：". $str;

# 001-注释和语句
# 单行注释 ： [1] //  [2] #  写一个//或者是#都代表当前这一行是注释。
# 多行注释 ： /* */
# 语句：在JavaScript中语句末尾可以省略分号，但是在PHP中语句末尾必须要加上分号

# 002-数据类型和变量
# 如何声明变量  let | var str = "我是字符串";
# 语法  $变量名 = 值；
# var str1 = "春天";
$str1 = "春天";
$str2 = "秋天";
$num1 = 123;
$num2 = 19.2;
$bool = true;
#var arr1 = new Array("张三","李四");
$arr1 = array("abc", "李四",true);

# 变量命名的问题：
# (1) 变量区分大小写 $str 和 $STR 是两个不同的变量
# (2) 类、函数、内置的结构 以及关键字不区分大小写。

# 003-控制输出
# 在JavaScript中控制输出：console.log(变量)
# 在PHP中控制输出有多种方式：常用的有(echo print print_r  var_dump)
echo "str1=".  $str1 . "<br>";
echo "str2=" . $str2 . "<br>";
echo "num1=" . $num1 . "<br>";
echo "num2=" . $num2 . "<br>";
echo "bool=" . $bool . "<br>";
echo "arr1=" . $arr1 . "<br>";
 
#备注
# echo 是语言的特殊结构并不是函数，print是一个函数，因此需要调用，()被省略
print("str1=" . $str1 . "<br>");
print("str2=" . $str2 . "<br>");
print("num1=" . $num1 . "<br>");
print("num2=" . $num2 . "<br>");
print("bool=" . $bool . "<br>");
print("arr1=" . $arr1 . "<br>");

# print_r函数用来打印查看数组、对象的内部细节
print_r($arr1); 
# Array ( [0] => 张三 [1] => 李四 )

echo "<br>";
# var_dump函数用来打印数组和对象，更详细(类型)
var_dump($arr1);
# array(3) { [0]=> string(6) "张三" [1]=> string(6) "李四" [2]=> bool(true) }

# 数组
# PHP中的数组分成两种数组：索引数组 && 关联数组
# 索引数组：索引默认是从0开始依次递增      ===       JavaScript数组
# 关联数组：索引是字符串(字典)            ===       JavaScript对象
$arrA = array("张三","老王","旺财","杰克");
echo "<br>";
print_r($arrA); 
# Array ( [0] => 张三 [1] => 老王 [2] => 旺财 [3] => 杰克 )

#var o = {"name":"zs","age":18} 
$arrB = array("name"=>"张三","age"=>18,"color"=>"yellow");
echo "<br>";
print_r($arrB);
#Array ( [name] => 张三 [age] => 18 [color] => yellow )

# 访问数组中的数据
echo "<br>";
echo $arrA[1];
$arrA[1] = "旺旺";
echo "<br>";
print_r($arrA);

echo "<br>";
echo $arrB["color"];

# 数组的遍历
for($i = 0;$i<count($arrA);$i++)
{
  echo "<br>";
  echo $arrA[$i];
}

# 函数
$n = 1000;
echo "<br>";
# 函数声明
function sum($a,$b,$c){

  # 在函数内部不能直接访问函数外部的全局变量，如果需要访问那么可以先提前使用global进行说明或者通过超级全局变量GLOBAL
  // global $n;
  // echo "---". $n;
  // print_r($GLOBALS);

  echo $GLOBALS["n"];
  return $a + $b + $c;
}

# 函数调用
// $result = sum(1,10,20);
$result = SUM(111, 10, 20);
echo "函数调用的结果". $result;

# 函数的注意点：
# (1) 函数名不区分大小写 fn == Fn == FN
# (2) 函数内部无法直接访问全局变量 需要通过global说明或者是$GLOBALS来获取

# 流程控制语句：循环结构(for) + 选择结构(if/else + switch)
// $score = 34;
// if($score >= 85)
// {
//   echo "<br>"."优秀";
// }

// if ($score >= 85)
// {
//   echo "<br>"."优秀";
// } elseif($score >= 75)
// {
//   echo "<br>" . "良好";
// }elseif($score >= 60){
//   echo "<br>" . "及格";
// }else
// {
//   echo "<br>" . "不及格";
// }


# Class-对象
class Person{
  public $name = "张三";
  public $age = 18;
  
  function showName(){
    echo "姓名".$this->name;
  }
  function showAge()
  {
    echo "年龄" . $this->age;
  }
}

$p1 = new Person();
echo $p1->name;
echo $p1->age;
$p1->showAge();
$p1->showName();



?>