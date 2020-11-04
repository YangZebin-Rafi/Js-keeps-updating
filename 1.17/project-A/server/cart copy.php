<?php

$db = mysqli_connect("127.0.0.1", "root", "root", "sndemo");
$type = $_REQUEST["type"];
$user_id = $_REQUEST["user_id"];
/* 1.查询购物车中所有商品信息 */
/* ************** */
/* 接口：cart.php?type=get&user_id=xxx*/
/* 权限：要求用户是登录状态，如果当前用户没有登录那么在加入购物车的时候应该先登录。*/
if($type == "get"){
 
  $sql = "SELECT cart.*,goods.* FROM cart , goods WHERE cart.goods_id = goods.goods_id AND cart.user_id=$user_id";
  $result = mysqli_query($db,$sql);
  $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
  echo json_encode($data,true);
}

/* 2.加入购物车功能 */
/* ************** */
/* 接口：cart.php?type=add&goods_id=xxx&&user_id=xxx*/
/* 逻辑：如果该商品在购物车中已经存在，那么就更新数量+1，否则就添加一条该商品的记录。 */
/* 权限：要求用户是登录状态，如果当前用户没有登录那么在加入购物车的时候应该先登录。*/
/* 示例：http://127.0.0.1/t/project-A/server/cart.php?type=add&goods_id=361&user_id=1 */
elseif($type == "add"){

  $goods_id = $_REQUEST["goods_id"];

  /* 检查之前是否存在对应的数据，如果存在那么就修改num值，如果不存在那么就插入数据 */
  $sql = "SELECT * FROM cart WHERE goods_id = $goods_id AND user_id=$user_id";
  $result = mysqli_query($db, $sql);
  if (mysqli_num_rows($result) == 0) {
    /* 往数据库表中新增一条数据 */
    $sql = "INSERT INTO `cart` (`cart_id`,`user_id`, `goods_id`, `num`) VALUES (NULL, $user_id,$goods_id, 1)";
  } else {
    /* 更新数据 */
    $sql = "UPDATE `cart` SET `num`= `num`+ 1 WHERE `goods_id`=$goods_id AND user_id=$user_id";
  }
  $res = mysqli_query($db, $sql);
  echo json_encode(array("status" => "success"));
}

/* 3.清空购物车功能 */
/* ************** */
/* 接口：cart.php?type=clear */
/* 提示：在删除商品的时候提示并确认 */ 
elseif ($type == "clear") {

  /* 示例： 清空操作 $removeSql = "TRUNCATE table `cart` "; */
}

/* 4.删除购物车商品 */
/* ************** */
/* 接口：cart.php?type=delete?goods_id=xxx&&user_id=xxx */
/* 提示：在删除商品的时候提示并确认 */
/* 示例：http://127.0.0.1/t/project-A/server/cart.php?type=delete?goods_id=361&&user_id=1 */
elseif($type == "delete")
{
  $goods_id = $_REQUEST["goods_id"];
  $sql = "DELETE FROM `cart` WHERE goods_id = $goods_id AND user_id = $user_id";
  mysqli_query($db, $sql);
  echo json_encode(array("status" => "success"), true);
}

/* 4.更新购物车商品的数量 */
/* 接口：cart.php?type=update?goods_id=xxx&&user_id=xxx&count=xxx*/
elseif($type == "update"){

  // $plusSql = "UPDATE `cart` SET `num`= $count WHERE `good_id`=$good_id AND id=$id";
  // echo json_encode(array("status" => "success"), true);
}

/* 5.获取购物车中商品的数量 */
elseif($type = "getCount"){
  $sql = "SELECT cart.*,goods.* FROM cart , goods WHERE cart.goods_id = goods.goods_id AND cart.user_id=$user_id";
  $result = mysqli_query($db, $sql);
  // $num = mysqli_num_rows($result);
  $data = mysqli_fetch_all(mysqli_query($db, $sql), MYSQLI_ASSOC);
  $total = 0;
  for ($i = 0; $i < count($data); $i++) {
    $total += $data[$i]["num"];
  }
  echo json_encode(array("status" => "success","count"=> $total), true);
}

?>