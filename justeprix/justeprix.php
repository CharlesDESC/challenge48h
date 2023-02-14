<?php
$json = file_get_contents('../data.json');
$data = json_decode($json, true);
?>

<html>

<head>
    <title>Juste prix</title>
    <link rel="stylesheet" href="../css/justeprix.css">
    <link rel="stylesheet" href="../css/index.css">
    <!-- <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script> -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" />
    <link rel="shortcut icon" href="../img/logo.png" type="image/x-icon">
</head>

<body class="bod">

    <nav class="topBar">
        <h1><a href="../index.php">Challenge-48H</a></h1>
        <h3>Timer : <div id="timer">1</div>
        </h3>
    </nav>

    <main class="main">
        <div class="page">
            <h1 class="title"> Le juste prix </h1>
            <hr>
            <p style="margin: 50px 0px;">Entrez un nombre entre 0 et 1000 inclu :</p>

            <div>
                <b>Votre choix : </b>
                <input type="number" placeholder="Votre chiffre" id="nombre" name="devine1" required value="0"
                    maxlength="4">
                <br>
                <input type="button" id="valide" value="Valider">
            </div><br />
            <p class="ind" id="ind"></p>
            <p class="essai" id="essai"></p>
        </div>


        <div class="containerCarousel">
            <img src="../img/justeprix_title.png" alt="morpion" id="morpion" />
            <h1 class="titleMissile">
                <span class="span">
                    <?php echo $data['missile']; ?>
                </span> Missiles
            </h1>
            <input id=start class="btnPlay" type="button" value="Relancer !" onclick="start()">
            <input id=reset class="btnPlay" type="hidden" value="Rejouer" onclick="reset()">
            <div id="status"></div>
        </div>



        <!-- Modal -->
        <div class="overlay"></div>
        <div id="modal" class="modal">
            <span id="modal-btn" class="material-symbols-outlined">
                cancel
            </span>

            <div class="img_title">
                <img src="../img/justeprix_title.png" width="400" height="200" />
            </div>
            <h1>Regle du jeu</h1>
            <p>Le but est simple ! Pour gagner un point, le joueur doit trouver le bon nombre compris entre 0 et
                1000 inclu en 10 essais ou moins. </p>

            <p>Le but est simple ! Pour gagner un point, le joueur doit trouver le bon nombre compris entre 0 et
                1000 inclu en 10 essais ou moins. </p>
            <p> Vérifiez bien votre nombre de chance(s)
                avant de valider car vous pouvez valider 2 fois d'affilée la même réponse !</p>
        </div>
        </div>
    </main>

</body>

<script type="text/javascript" src="../js/justeprix.js"></script>

</html>