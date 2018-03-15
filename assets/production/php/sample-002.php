<?php

$fp = fopen("sample.txt", "a");
// fwrite($fp, "ファイルへの追記サンプル");
fwrite($fp, "aaaaa");
fclose($fp);

?>
