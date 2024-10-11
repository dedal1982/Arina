<?php
session_start();
require_once("class_m.php");


$postData = file_get_contents('php://input');
// $postData = '{"text":"ccc","name":"RuBaNok","email":"kkv86@rambler.ru","cap":"OK"}';
$data = json_decode($postData, true);


extract($data, EXTR_OVERWRITE);


$ses="";
$emailo="baj-hu@mail.ru";
//$emailo="kkv86@rambler.ru";

$email=strtolower($email);
$message_plain_text="";
$message_html="";


// echo "<br>ses_id=".$ses_id." ses=".$ses;

// Тема письма
$form_subject = "Сообщение от ".$name;

// От кого
$project_name = "vasyapupkin@yandex.ru";
$from_name = "От somebody";

if (isset($tel)) $tel = "<br>tel:".$tel; else $tel="";

$messo="Текст сообщения:".$text."<br>Имя:".$name."<br>email:".$email.$tel;

$paramos=compact('ses', 'messo', 'form_subject', 'project_name', 'emailo', 'from_name');

// echo "<br>paramos";
// var_dump($paramos);

$senos = send_emailo($paramos);
echo $senos;

?>