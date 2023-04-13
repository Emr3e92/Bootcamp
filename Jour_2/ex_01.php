<?php

function print_positive(int $var)
{
    if ($var > 0) {
        echo "positive";
    } else {
        echo "";
    }
}
print_positive(10);
