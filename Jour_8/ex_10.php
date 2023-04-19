<?php

function my_get_weird_info()
{
    if (isset($_GET['nbr_elem'])) {
        $nbr_elem = intval($_GET['nbr_elem']);
        if ($nbr_elem > 0) {
            $keys = array_keys($_GET);
            for ($i = 0; $i < $nbr_elem; $i++) {
                $key = $keys[$i];
                echo $key . " = " . $_GET[$key] . "<br>";
            }
            return 0;
        }
    }
    return NULL;
}
