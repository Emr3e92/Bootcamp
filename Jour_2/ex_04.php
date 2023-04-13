<?php

function print_until($max)
{
    if ($max < 0) {
        echo "Boulet !\n";
        return false;
    }
    $nbr = 0;
    while ($nbr <= $max) {
        echo $nbr . "\n";
        $nbr++;
    }
    return true;
}
