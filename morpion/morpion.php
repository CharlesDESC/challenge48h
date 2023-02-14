<?php
$json = file_get_contents('../data.json');
$data = json_decode($json, true);
?>
<script>
var max_tentative = <?php echo $data["jeux"][0]['max_tentative'] ?>;
</script>

<!DOCTYPE html>
<html lang="fr">
<?php include ("header.php"); ?>

<body>
    <div class="overlay"></div>
    <div id="modal" class="modal">
        <span id="modal-btn" class="material-symbols-outlined">
            cancel
        </span>

        <div class="modalContenue">
            <center>
                <h1>Régle du jeu</h1>
            </center>
            </br>
            <p>Vous connaissez tous le morpion, on ne le présente plus !
                Récupère au maximum 3 missiles !
            </p>
        </div>
    </div>

    <main class="main" style="margin-top:100px">
        <div class="grilleTableau">
            <div id="fond">
                <div id="board">
                    <div class="square" id="0"></div>
                    <div class="square" id="1"></div>
                    <div class="square" id="2"></div>
                    <div class="square" id="3"></div>
                    <div class="square" id="4"></div>
                    <div class="square" id="5"></div>
                    <div class="square" id="6"></div>
                    <div class="square" id="7"></div>
                    <div class="square" id="8"></div>
                </div>
            </div>
        </div>
        <div class="containerCarousel">
            <img src="../img/title_morpion.png" alt="morpion" id="morpion" />
            <h1 class="titleMissile">
                <span class="span">
                    <?php echo $data['missile']; ?>
                </span> Missiles
            </h1>
            <h1 class="titleMissile">
                <span class="span">
                    <?php echo $data["jeux"][0]['max_tentative'] ?>
                </span> Tentative
            </h1>
            <input id=start class="btnPlay" type="button" value="Lancer le jeux !" onclick="start()">
            <input id=reset class="btnPlay" type="hidden" value="Rejouer" onclick="reset()">
            <div id="status"></div>
        </div>
    </main>
    <script src="../js/morpion.js"></script>
    <script src="../js/index.js"></script>
</body>