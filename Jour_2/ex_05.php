<?php

function print_range(int $min)
{
    $res = false;
    do {
        echo $min . "\n";
        if ($min == 42) {
            $res = true;
        }
        $min++;
    } while ($min <= 42);
    return $res;
}
print_range(3);
