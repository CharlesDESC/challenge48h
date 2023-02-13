<!DOCTYPE html>
<html>

<head>
  <title>Récupérer en temps réel le contenu d'un input text</title>

</head>

<body>
  <p><input type="text" placeholder="Entrez une valeur ici" id="inText"></p>
  <div id="word" name="word"></div>



  <?php
    $textRdm = array('./textAsset/textWriter1.txt', './textAsset/textWriter2.txt' ,'./textAsset/textWriter3.txt');
    $rdm = rand('0', count($textRdm)-1);
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