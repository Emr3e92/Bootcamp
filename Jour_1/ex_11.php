<?php
function my_sub()
{
    $GLOBALS["nb_a"];
    $GLOBALS["nb_b"];
    $GLOBALS["nb_a"] = $GLOBALS["nb_a"] - $GLOBALS["nb_b"];
    return $GLOBALS["nb_a"];
}
