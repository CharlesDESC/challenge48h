<?php
$json = file_get_contents('data.json');
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
    <link rel="stylesheet" href="./css/index.css">
    <title>Challenge-48H</title>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
</head>

<body>
    <nav class="topBar">
        <h1><a href="./index.php">Challenge-48H</a></h1>
        <h3>Timer : <div id="timer">1</div>
        </h3>
        <h3>Point :</h3>
    </nav>

    <button id="modal-btn">Open Modal</button>
    <div class="overlay"></div>
    <div id="modal">
        <h1>Regle du jeu</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio cum porro reprehenderit sed at illum.
            Eos, debitis iusto? Laudantium esse unde veniam quaerat voluptatem! Saepe, facere. At, dolore repellendus?
        </p>
    </div>

    <main class="main">
        <div class="grilleTableau">
            <table id="plateau">
                <thead>
                    <tr>
                        <th colspan="10">
                            Bataille-Navale
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td class="caseBataille" id="A1"></td>
                        <td class="caseBataille" id="B1"></td>
                        <td class="caseBataille" id="C1"></td>
                        <td class="caseBataille" id="D1"></td>
                        <td class="caseBataille" id="E1"></td>
                        <td class="caseBataille" id="F1"></td>
                        <td class="caseBataille" id="G1"></td>
                        <td class="caseBataille" id="H1"></td>
                        <td class="caseBataille" id="I1"></td>
                        <td class="caseBataille" id="J1"></td>
                    </tr>
                    <tr>
                        <td class="caseBataille" id="A2"></td>
                        <td class="caseBataille" id="B2"></td>
                        <td class="caseBataille" id="C2"></td>
                        <td class="caseBataille" id="D2"></td>
                        <td class="caseBataille" id="E2"></td>
                        <td class="caseBataille" id="F2"></td>
                        <td class="caseBataille" id="G2"></td>
                        <td class="caseBataille" id="H2"></td>
                        <td class="caseBataille" id="I2"></td>
                        <td class="caseBataille" id="J2"></td>
                    </tr>
                    <tr>
                        <td class="caseBataille" id="A3"></td>
                        <td class="caseBataille" id="B3"></td>
                        <td class="caseBataille" id="C3"></td>
                        <td class="caseBataille" id="D3"></td>
                        <td class="caseBataille" id="E3"></td>
                        <td class="caseBataille" id="F3"></td>
                        <td class="caseBataille" id="G3"></td>
                        <td class="caseBataille" id="H3"></td>
                        <td class="caseBataille" id="I3"></td>
                        <td class="caseBataille" id="J3"></td>
                    </tr>
                    <tr>
                        <td class="caseBataille" id="A4"></td>
                        <td class="caseBataille" id="B4"></td>
                        <td class="caseBataille" id="C4"></td>
                        <td class="caseBataille" id="D4"></td>
                        <td class="caseBataille" id="E4"></td>
                        <td class="caseBataille" id="F4"></td>
                        <td class="caseBataille" id="G4"></td>
                        <td class="caseBataille" id="H4"></td>
                        <td class="caseBataille" id="I4"></td>
                        <td class="caseBataille" id="J4"></td>
                    </tr>
                    <tr>
                        <td class="caseBataille" id="A5"></td>
                        <td class="caseBataille" id="B5"></td>
                        <td class="caseBataille" id="C5"></td>
                        <td class="caseBataille" id="D5"></td>
                        <td class="caseBataille" id="E5"></td>
                        <td class="caseBataille" id="F5"></td>
                        <td class="caseBataille" id="G5"></td>
                        <td class="caseBataille" id="H5"></td>
                        <td class="caseBataille" id="I5"></td>
                        <td class="caseBataille" id="J5"></td>
                    </tr>
                    <tr>
                        <td class="caseBataille" id="A6"></td>
                        <td class="caseBataille" id="B6"></td>
                        <td class="caseBataille" id="C6"></td>
                        <td class="caseBataille" id="D6"></td>
                        <td class="caseBataille" id="E6"></td>
                        <td class="caseBataille" id="F6"></td>
                        <td class="caseBataille" id="G6"></td>
                        <td class="caseBataille" id="H6"></td>
                        <td class="caseBataille" id="I6"></td>
                        <td class="caseBataille" id="J6"></td>
                    </tr>
                    <tr>
                        <td class="caseBataille" id="A7"></td>
                        <td class="caseBataille" id="B7"></td>
                        <td class="caseBataille" id="C7"></td>
                        <td class="caseBataille" id="D7"></td>
                        <td class="caseBataille" id="E7"></td>
                        <td class="caseBataille" id="F7"></td>
                        <td class="caseBataille" id="G7"></td>
                        <td class="caseBataille" id="H7"></td>
                        <td class="caseBataille" id="I7"></td>
                        <td class="caseBataille" id="J7"></td>
                    </tr>
                    <tr>
                        <td class="caseBataille" id="A8"></td>
                        <td class="caseBataille" id="B8"></td>
                        <td class="caseBataille" id="C8"></td>
                        <td class="caseBataille" id="D8"></td>
                        <td class="caseBataille" id="E8"></td>
                        <td class="caseBataille" id="F8"></td>
                        <td class="caseBataille" id="G8"></td>
                        <td class="caseBataille" id="H8"></td>
                        <td class="caseBataille" id="I8"></td>
                        <td class="caseBataille" id="J8"></td>
                    </tr>
                    <tr>
                        <td class="caseBataille" id="A9"></td>
                        <td class="caseBataille" id="B9"></td>
                        <td class="caseBataille" id="C9"></td>
                        <td class="caseBataille" id="D9"></td>
                        <td class="caseBataille" id="E9"></td>
                        <td class="caseBataille" id="F9"></td>
                        <td class="caseBataille" id="G9"></td>
                        <td class="caseBataille" id="H9"></td>
                        <td class="caseBataille" id="I9"></td>
                        <td class="caseBataille" id="J9"></td>
                    </tr>
                    <tr>
                        <td class="caseBataille" id="A10"></td>
                        <td class="caseBataille" id="B10"></td>
                        <td class="caseBataille" id="C10"></td>
                        <td class="caseBataille" id="D10"></td>
                        <td class="caseBataille" id="E10"></td>
                        <td class="caseBataille" id="F10"></td>
                        <td class="caseBataille" id="G10"></td>
                        <td class="caseBataille" id="H10"></td>
                        <td class="caseBataille" id="I10"></td>
                        <td class="caseBataille" id="J10"></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="containerCarousel">
        <h1 class="titleMissile">
          <span class="span">
            <?php echo $data['missile']; ?>
          </span> Missiles</h1>
            <div class="carousel">
                <div class="slides">
                    <a href="./morpion/morpion.php"><img src="./img/title_morpion_orange.png" alt="Morpion"></a>
                    <a href="./justeprix/justeprix.php"><img src="./img/justePrix.png" alt="justePrix"></a>
                    <a href="#"><img src="./img/cultureG.png" alt="cultureG"></a>
                    <a href="./textWriter/textWriter.php"><img src="./img/rapiditeClavier.png" alt="rapiditeClavier"></a>
                </div>
                <div class="controls">
                    <div class="control prev-slide">&#9668;</div>
                    <div class="control next-slide">&#9658;</div>
                </div>
            </div>

            <input class="btnPlay" type="button" value="Commencer a jouer">
        </div>

    </main>

    <script src="./js/index.js"></script>
    <script src="./js/timer.js"></script>
</body>

</html>