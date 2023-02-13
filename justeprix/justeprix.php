<html>

<head>
    <title>Juste prix</title>
    <link rel="stylesheet" href="../css/justeprix.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <!-- <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script> -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</head>

<body class="bod">

    <div class="page">
        <h1 class="title"> Le juste prix </h1>
        <hr>
        <p>Entrez un nombre entre 0 et 1000 inclu :</p><i class="fa-solid fa-triangle-exclamation"></i> <br />

        <div style="display: flex; justify-content: space-around;">
            <b style="color: blue">Votre choix : </b>
            <input type="number" placeholder="Votre chiffre" id="nombre" name="devine1" required value="0" maxlength="4">
            <input type="button" id="valide" value="Valider">
        </div><br />
        <p class="ind" id="ind"></p>
        <p class="essai" id="essai"></p>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- <h5 class="modal-title" id="exampleModalLabel">Règle du jeu</h5> -->
                    <div class="img_title">
                        <img src="../img/justeprix_title.png" width="400" height="200" />
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Le but est simple ! Pour gagner un point, le joueur doit trouver le bon nombre compris entre 0 et 1000 inclu en 10 essais ou moins. </p>
                    <p> <img src="../img/warning.png" width="30" height="30"> Vérifiez bien votre nombre de chance(s) avant de valider car vous pouvez valider 2 fois d'affilée la même réponse !</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>

</body>

<script type="text/javascript" src="../js/justeprix.js"></script>

</html>