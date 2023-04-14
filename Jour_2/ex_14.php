<?php

function goto_is_evil()
{
    $i = 0;
    start:
    echo "wac\n";
    $i++;
    if ($i != 42) {
        goto start;
    }
}

goto_is_evil();
