<?php
include('route.php');
?>

<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php $route?>css/index.css">
    <link rel="stylesheet" href="<?php $route?>css/justeprix.css">
    <link rel="stylesheet" href="<?php $route?>css/morpion.css">
    <link rel="stylesheet" href="<?php $route?>css/textWriter.css">
    <link rel="stylesheet" href="<?php $route?>css/timer.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" />
    <script src="http://code.jquery.com/jquery.js" type="text/javascript"></script>
    <title>Challenge-48H</title>
    <link rel="shortcut icon" href="<?php $route?>img/logo.png" type="image/x-icon">
</head>


<nav class="topBar">
    <h1><a href="<?php $route?>index.php">Challenge-48H</a></h1>
    <h3>Timer : <div id="timer">
    </h3>
</nav>