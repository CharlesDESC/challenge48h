<!DOCTYPE html>
<html>

<head>
  <title>Récupérer en temps réel le contenu d'un input text</title>

</head>

<body>
  <a id="start">start</a>
  <a id="restart">restart</a>


  <p><input type="text" placeholder="Entrez une valeur ici" id="inText"></p>
  <div id="word" name="word"></div>

  <?php $value = '<div id="tryy"></div>';
  echo $value;
  ?>

  <?php
  $textTest = './textAsset/textTest.txt';
  $textRdm = array('./textAsset/textWriter1.txt', './textAsset/textWriter2.txt', './textAsset/textWriter3.txt');
  $rdm = rand('0', count($textRdm) - 1);
  $text = fopen($textTest, "r");
  $text = fread($text, filesize($textTest));
  $text = preg_replace('!\\r?\\n!', "", $text);
  ?>
  <script type="text/javascript">
    var text;
    text = <?php echo $text; ?>;
  </script>

  <script src="../js/textWriter.js"></script>

  <?php
    $json = file_get_contents('../data.json');
    $data = json_decode($json, true);
    $nbMissile = $data["missile"];
    $nbEssaisRestant = $data["jeux"][2]['max_tentative'];
    $data['jeux'][3]['max_tentative'] = $nbEssaisRestant - 1;
    $json_dataEssai = json_encode($data, JSON_PRETTY_PRINT);
    file_put_contents('../data.json', $json_dataEssai);
    $data['missile'] = $nbMissile + 1;
    $json_dataMissile = json_encode($data, JSON_PRETTY_PRINT);
    file_put_contents('../data.json', $json_dataMissile);
  ?>

</body>

</html>