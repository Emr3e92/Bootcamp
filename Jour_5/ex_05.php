<?php

function my_add_to_session(string $key = "pseudo", string $value = "Max_")
{
    echo $_SESSION[$key] = $value . "titi";
}

my_add_to_session($key, $value);
