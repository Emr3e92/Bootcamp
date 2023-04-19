<?php
function my_add_to_cookie(string $key = "pseudo", string $value = "Max_")
{
    echo $_COOKIE[$key] = $value . "toto\n";
}

my_add_to_cookie();
