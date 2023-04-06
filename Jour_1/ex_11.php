<?php
function my_sub()
{
    echo '$nb_a in global scope: ' . $GLOBALS["nb_a"] . "\n";
    global $nb_b;
    $nb_a = $nb_a - $nb_b;
    return $nb_a;
}
