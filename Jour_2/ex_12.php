<?php

function is_similar($a, $b)
{
    if ($a == $b && $a === $b) {
        echo "Same type and value.\n";
    } elseif (gettype($a) == gettype($b)) {
        echo "Same type\n";
    } elseif ($a == $b) {
        echo "Same value.\n";
    }
}

// is_similar("3", 7);
