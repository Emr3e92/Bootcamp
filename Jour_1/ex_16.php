<?php

$greet = function ($name) {
    printf("Bonjour %s\r\n", ucfirst($name)); // %s = traité comme un string, "\n" est un passage à la ligne, "\r" est un retour aux début de la ligne actuel 
};

$greet('world');
$greet('pHP');
