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
<main class="main" style="margin-top:100px">
    <div class="grilleTableau">
        <div id="fond">
            <div id="board">
                <div class="square" id="0" onclick="play()"></div>
                <div class="square" id="1" onclick="play()"></div>
                <div class="square" id="2" onclick="play()"></div>
                <div class="square" id="3" onclick="play()"></div>
                <div class="square" id="4" onclick="play()"></div>
                <div class="square" id="5" onclick="play()"></div>
                <div class="square" id="6" onclick="play()"></div>
                <div class="square" id="7" onclick="play()"></div>
                <div class="square" id="8" onclick="play()"></div>
            </div>
        </div>       
</div>
<div class="containerCarousel">
<img src="../img/title_morpion.png" alt="morpion" id="morpion" />
<h1 class="titleMissile"><span class="span">5</span> Missiles</h1>
<input id=reset class="btnPlay" type="button" value="Rejouer">
    <div id="status"></div>
</div>
</main>
<script src="../js/morpion.js"></script>
</body>
