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
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;400;700&family=Zen+Dots&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/morpion.css">
  <link rel="stylesheet" href="../css/index.css">
  <title>Challenge-48H</title>
</head>

<body>
  <nav class="topBar">
    <h1><a href="../index.php">Challenge-48H</a></h1>
    <h3>Timer :</h3>
    
  </nav>
  <main class="main" style="margin-top:100px">
    <div class="grilleTableau">
      <div id="word" name="word"></div>
      <div>
        <p>
          <input type="text" placeholder="Entrez une valeur ici" id="inText">
        </p>
      </div>

      
      
    </div>
      <div class="containerCarousel">
        <img src="../img/textWriter.png" alt="textWriter" id="textWriter" />
        <h1 class="titleMissile">
          <span class="span">
            <?php echo $data['missile']; ?>
          </span> Missiles</h1>
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