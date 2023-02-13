<html>

<head>
    <title>Juste prix</title>
    <link rel="stylesheet" href="../css/justeprix.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

    <div class="page">
        <h1 class="title"> Juste prix </h1>
        <hr>
        <p>
        <p color="blue">POPUP Vous devez trouver le nombre entre 1 et 100 en 10 essais.</p>
        </p>
        <form name="form1">
            <p>Entrez un nombre entre 0 et 100</p>
            <br /><br />
            <div style="display: flex; justify-content: space-around;">
                <b style="color: blue">Votre choix : </b>
                <input type="number" placeholder="Votre chiffre" id="nombre" name="devine1" maxlength="4">
                <input type="button" value="Valider" onClick="Devine();">
            </div>
        </form>
        <p class="ind" id="ind"></p>
        <p class="essai" id="essai"></p>

    </div>

</body>
<script type="text/javascript" src="../js/justeprix.js"></script>

</html>