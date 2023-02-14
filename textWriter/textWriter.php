<?php
$json = file_get_contents('../data.json');
$data = json_decode($json, true);
?>



<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/index.css">
    <link rel="stylesheet" href="../css/justeprix.css">
    <link rel="stylesheet" href="../css/morpion.css">
    <link rel="stylesheet" href="../css/textWriter.css">
    <link rel="stylesheet" href="../css/timer.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" />
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

        <div class="overlay"></div>
        <div id="modal" class="modal">
            <span id="modal-btn" class="material-symbols-outlined">
                cancel
            </span>

            <div class="modalContenue">
                <h1>Regle du jeu</h1>
                <p>Le but : etre le plus rapide pour ecrire le texte mais sans faire d'erreur. Attention tu as le droit qu'à 5 erreur et elles sont pas affichées pour plus de difficulté !
                </p>
            </div>
        </div>

        <div class="grilleTableau">
            <div id="word" name="word"></div>
            <div id="timer"></div>
            <a id="start">start</a>
            <a id="restart">restart</a>
            <div>
                <p>
                    <input type="text" placeholder="Entrez une valeur ici" id="inText">
                </p>
            </div>





        </div>
        <div class="containerCarousel">
            <img src="../img/rapiditeClavier.png" alt="textWriter" id="textWriter" />
            <h1 class="titleMissile">
                <span class="span">
                    <?php echo $data['missile']; ?>
                </span> Missiles
            </h1>
        </div>
    </main>




    <?php $value = '<div id="tryy"></div>';
    echo $value;
    ?>

    <?php
    $textTest = './textAsset/textTest.txt';
    $textRdm = array('./textAsset/textWriter1.txt', './textAsset/textWriter2.txt', './textAsset/textWriter3.txt');
    $rdm = rand('0', count($textRdm) - 1);
    $text = fopen($textRdm[$rdm], "r");
    $text = fread($text, filesize($textRdm[$rdm]));
    $text = preg_replace('!\\r?\\n!', "", $text);
    ?>
    <script type="text/javascript">
        var text;
        text = <?php echo $text; ?>;
    </script>

    <script src="../js/textWriter.js"></script>

</body>

</html>