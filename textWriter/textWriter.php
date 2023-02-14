<?php
$json = file_get_contents('../data.json');
$data = json_decode($json, true);
?>



<!DOCTYPE html>
<html lang="fr">

<?php include("../header.php") ?>

<main class="main">

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

    <div class="grilleTableau">
        <div id="word" name="word"></div>
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



<?php
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