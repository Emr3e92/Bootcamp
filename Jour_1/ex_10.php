<?php
function print_calls()
{
    static $a = 1;
    echo $a;
    $a++;
}
print_calls();
print_calls();
print_calls();
