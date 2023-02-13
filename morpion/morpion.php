<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;400;700&family=Zen+Dots&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="../css/morpion.css">
    <link rel="stylesheet" href="../css/index.css">
    <title>Challenge-48H</title>
</head>

<body>
    <nav class="topBar">
        <h1><a href="../index.php">Challenge-48H</a></h1>
        <h3>Timer :</h3>
        <h3>Point :</h3>
    </nav>
<center><img src="../img/title_morpion.png" alt="morpion" id="morpion" /></center>
<div id="fond">
      <div id="board">
        <div class="square" id="1"></div>
        <div class="square" id="2"></div>
        <div class="square" id="3"></div>
        <div class="square" id="4"></div>
        <div class="square" id="5"></div>
        <div class="square" id="6"></div>
        <div class="square" id="7"></div>
        <div class="square" id="8"></div>
        <div class="square" id="9"></div>
      </div>
      <div id="status"></div>
      
    </div>
    <button id="reset">Rejouer</button>

<script src="../js/morpion.js"></script>

</body>
