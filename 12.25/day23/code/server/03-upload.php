<?php
print_r($_FILES);
/* 
Array
(
    [xx] => Array
        (
            [name] => Snip20191225_23.png
            [type] => image/png
            [tmp_name] => /Applications/MAMP/tmp/php/phpJuENfa
            [error] => 0
            [size] => 16025
        )
)
*/
move_uploaded_file($_FILES["xx"]["tmp_name"],"./file/123.png");
?>