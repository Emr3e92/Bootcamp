<?php

function say_my_name(&$str)
{
    $str = "My name is ";
    echo $str .= "Toto !";
}

say_my_name($str);
