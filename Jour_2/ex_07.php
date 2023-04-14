<?php

function aff_array(array $my_array)
{
    $i = 0;
    foreach ($my_array as $key => $res) {
        echo $res . "\n";
        $i++;
    }
    return count($my_array);
}

// echo aff_array([1, 2, 4]);
