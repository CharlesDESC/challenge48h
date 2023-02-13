var num = Math.floor(Math.random() * 1000) + 1;
var NbEssais = 0;
var Nbmax = 10;

// document.addEventListener("keydown", function (event) {
//     if (event.key == "Enter") {

//         Devine();
//     }
// });

window.addEventListener("load", function () {
    $('#exampleModal').modal('show');
})

document.getElementById('valide').addEventListener("click", function () {
    Devine()
})

function Devine() {
    var choisi = document.getElementById('nombre').value;
    console.log("nb = " + choisi)
    var text = document.getElementById("ind")
    var essais = document.getElementById("essai")
    if (choisi.length > 0) {
        if (choisi < 0 || choisi > 1000) {
            text.innerText = "Chiffre compris entre 0 et 1000 !";
        }
        else {
            NbEssais++;
            if (Nbmax - NbEssais > 1) {
                essais.innerText = "Nombre d'essais restants : " + (Nbmax - NbEssais)
            }
            else {
                essais.innerText = "Nombre d'essai restant : " + (Nbmax - NbEssais)
            }
            if (choisi < num)
                text.innerText = "C'est plus !";
            if (choisi > num)
                text.innerText = "C'est moins !";
            if (choisi == num) {
                window.alert("Bravo ! chiffre trouvé en " + NbEssais + " essais.");
                location.reload();

            }
            if (NbEssais == 10) {
                window.alert("Dommage, le nombre correct était : " + num);
                location.reload();
            }
        }
    }
    else {
        text.innerText = "Entrez un nombre !";
    }
}
