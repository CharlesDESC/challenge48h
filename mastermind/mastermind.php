<?php
$json = file_get_contents('../data.json');
$data = json_decode($json, true);
?>

<!DOCTYPE html>
<html lang="fr">

<head>

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/index.css">
        <link rel="stylesheet" href="../css/justeprix.css">
        <link rel="stylesheet" href="../css/morpion.css">
        <link rel="stylesheet" href="../css/textWriter.css">
        <link rel="stylesheet" href="../css/timer.css">
        <link rel="stylesheet" href="../css/mastermind.css">
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" />
        <script src="http://code.jquery.com/jquery.js" type="text/javascript"></script>
        <title>Challenge-48H</title>
        <link rel="shortcut icon" href="../img/logo.png" type="image/x-icon">
    </head>

<body>

    <nav class="topBar">
        <h1><a href="../index.php">Challenge-48H</a></h1>
        <h3>Timer : <div id="timer">
        </h3>
    </nav>

    <div class="overlay"></div>
    <div id="modal" class="modal">
        <span id="modal-btn" class="material-symbols-outlined">
            cancel
        </span>

        <div class="modalContenue">
            <h1>Regle du jeu</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio cum porro reprehenderit sed at illum.
                Eos, debitis iusto? Laudantium esse unde veniam quaerat voluptatem! Saepe, facere. At, dolore
                repellendus?
            </p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio cum porro reprehenderit sed at illum.
                Eos, debitis iusto? Laudantium esse unde veniam quaerat voluptatem! Saepe, facere. At, dolore
                repellendus?
            </p>
        </div>
    </div>
    <main class="main">
        <div class="game">
            <div class="try">
                <div id="essai">

                </div>
                <div class="contentBtn">
                    <input class="button" type="button" value="R" id="rouge">
                    <input class="button" type="button" value="B" id="bleu">
                    <input class="button" type="button" value="V" id="vert">
                    <input class="button" type="button" value="J" id="jaune">
                    <input class="button" type="button" value="C" id="cyan">
                    <input class="button" type="button" value="O" id="orange">
                    <input class="button" type="button" value="M" id="marron">
                </div>
            </div>
            <div id="place">
            </div>
        </div>

        <div class="container">
            <h1 class="titleMissile">
                <span class="span">
                    <?php echo $data['missile']; ?>
                </span> Missiles
            </h1>
            <h1 class="titleMissile">
                <span class="span">
                    <?php echo $data["jeux"][4]['max_tentative'] ?>
                </span> Tentative
            </h1>
        </div>
    </main>

    <script src="../js/mastermind.js"></script>

</body>