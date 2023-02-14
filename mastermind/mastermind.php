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
    <main class="main">
        <div class="game">
            <div class="try">
                <div id="essai">

                </div>
                <div class="bouton">
                    <input type="button" value="rouge" id="rouge">
                    <input type="button" value="bleu" id="bleu">
                    <input type="button" value="vert" id="vert">
                    <input type="button" value="jaune" id="jaune">
                    <input type="button" value="rose" id="rose">
                    <input type="button" value="orange" id="orange">
                    <input type="button" value="blanc" id="blanc">
                </div>
            </div>
            <div id="place">
            </div>
        </div>
    </main>

    <script src="../js/mastermind.js"></script>

</body>