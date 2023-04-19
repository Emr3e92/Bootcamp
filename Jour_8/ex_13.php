<?php

function my_sort_files(array &$tab)
{
    $tab = [""];
    sort($tab);
    echo $tab . "\n";
}
