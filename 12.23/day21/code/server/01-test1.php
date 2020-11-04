<?php
# 控制输出语句
$str = "我是字符串";
# (1) print()函数 输出字符串
print($str);
# (2) echo 语法结构  输出字符串
echo "<br>";
echo $str;
echo "<br>";
$name = "张三";
$address = "海上";
echo "我是".$name.",我来自于".$address;
echo "<br>";

# 如果是单引号，那么里面的$name就当做普通的字符打印
# 如果是双引号，那么里面的$name会当做变量来解析打印
echo "我是$name,我来自于$address";

# 数组
$arr1 = array("jack","rose",18,12.7);
echo "<br>";

# (3) print_r() 函数   打印复杂的数据(数组)
# Array
echo $arr1;
echo "<br>";
# Array ( [0] => jack [1] => rose )
print_r($arr1);

# (4) var_dump() 函数 打印复杂的数据(类型和长度)
echo "<br>";
var_dump($arr1);


# 函数

# 函数声明
function sum($a,$b){
  return $a  + $b;
}

# 函数调用(函数名不区分大小写)
// $result = sum(10,200);
$result = SUM(100, 200);
echo "<br>";
echo $result;

# 流程控制语句：
# 顺序 + 选择(if..else) + 循环结构(for循环)
$age = 15;
echo "<br>";
if($age >= 18)
{
  echo "成年人";
}elseif($age >=14){
  echo "青年人";
}else
{
  echo "小屁孩！";
}

?>