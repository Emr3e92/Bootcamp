<?php

function my_swap_vars(&$a, &$b)
{
    $w = $a;
    $a = $b;
    $b = $w;
}
