<?php

function print_range(int $min)
{
    $res = false;
    do {
        echo $min . "\n";
        $min++;
    } while ($min <= 42);
    return $res;
}
print_range(42);
