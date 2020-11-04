<?php

// sleep(3);

# 如果是文件上传请求，那么需要通过$_FILES获取文件信息
print_r($_FILES);
/*  [fileName] => Array ( 
      [name] => Snip20190715_28.png                        文件的名称
      [type] => image/png                                  文件的类型 MIMETYPE
      [tmp_name] => /Applications/MAMP/tmp/php/php7LkzRK   文件的临时存储路径(随时会被删除)
      [error] => 0                                         错误信息(如果是0表示没有出错)
      [size] => 168295                                     文件的大小
    )
*/

# var o = {"fileName":{name:"",type:"",tmp_mname:"",error:"",size:""}};

# 把接收到的上传的文件转移到安全的位置
# 参数1：要移动的文件在哪里
# 参数2：要把文件移动到哪里去
$fromPath =  $_FILES["fileName"]["tmp_name"];
$toPath = "123.png";
move_uploaded_file($fromPath, $toPath);

?>