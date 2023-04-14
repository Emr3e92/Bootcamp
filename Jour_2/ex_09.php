<?php

function multiples($nbr)
{
    for ($i = 0; $i <= 200000; $i += $nbr) {
        echo $i . "\n";
    }
}

// multiples(50000);
