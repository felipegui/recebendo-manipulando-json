<?php
$name = $_POST['name'];
$password = $_POST['password'];

$array = array('status' => '');
if ($name === 'Felipe Guimarães' && $password === '123') {
    $array['status'] = 'OK';
}

echo json_encode($array);