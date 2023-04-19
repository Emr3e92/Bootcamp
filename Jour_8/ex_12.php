<?php


function get_execution_time()
{
    $start_time = microtime(true);

    $end_time = microtime(true);

    $execution_time = $end_time - $start_time;

    return number_format($execution_time, 7);
}

echo get_execution_time();
