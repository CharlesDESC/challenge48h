<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="quiz_style.css">
  <script defer src="quiz.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap" rel="stylesheet">
  <title>Challenge 48H</title>
</head>

<body>
  <div class="container">
    <div id="rules"><h1>C'est l'heure du quiz !</h1>
    <p>Ce mini-jeu consiste en un simple quiz de culture générale. Sport, cinéma, politique, histoire et autres domaines seront à l'honneur dans une suite aléatoire de devinettes.</p>
    <p>I. Une série de trois questions vous sera présentée, dans l'ordre croissant de difficulté. <br>
    II. Cliquer sur une réponse la valide automatiquement, gardez vos doigts en laisse. <br>
    III. Afin de remporter un missile, vous devrez répondre correctement aux <strong>trois</strong> questions. <br>
    IV. Bien sûr, se servir d'Internet n'est pas autorisé, pas plus qu'inspecter les scripts !<br>
    V. Vous aurez droit à trois parties <strong>maximum</strong>, tâchez de les jouer intelligemment.<br><br>
    Attention : vous ne pourrez pas revenir en arrière. </p></div>

    <div id="q_container" class="hide">
      <div id="question">Question</div>
      <div id="answer-btns" class="btn-grid">
        <button class="btn"></button>
        <button class="btn"></button>
        <button class="btn"></button>
        <button class="btn"></button>
      </div>
    </div>

    <div class="controls">
      <button id="btn-start" class="btn-start btn">Start</button>
      <button id="btn-next" class="btn-next btn hide">Next</button>
      <button id="btn-quit" class="btn-quit btn hide" onclick="location='../index.php'">Quit</button>
    </div>

    <div id="score" class="hide"></div>
  </div>
</body>
</html>