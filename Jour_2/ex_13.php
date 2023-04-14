<?php

function is_major(int $age)
{
    echo $age >= 18 ? "Majeur" : "Mineur";
}

is_major(17);
