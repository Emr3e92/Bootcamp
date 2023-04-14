<?php

function make_it_rain(array $my_array)
{
    foreach ($my_array as $key => $value) {
        $my_array[$key] = "rain";
    }
}

make_it_rain([5, 8, 9, 20]);
