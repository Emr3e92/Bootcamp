<?php

function get_angry_bird(int $nbr)
{
    $res = "";
    for ($i = 0; $i < $nbr; $i++) {
        $res .= "Piou ";
    }
    return $res;
}

echo get_angry_bird(8);
