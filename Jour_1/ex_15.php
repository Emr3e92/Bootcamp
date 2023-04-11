<?php

function teacher()
{
    echo "I am a teacher \n";
}

function student($name = "Foo")
{
    echo "I am a student and my name is " . $name;
}

$func_teacher = 'teacher';
$func_teacher();
$func_student = 'student';
$func_student();
