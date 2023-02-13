var num = Math.floor(Math.random() * 100) + 1;
var NbEssais = 0;
var Nbmax = 10;

document.addEventListener("click", (e) => {
    if (e.keyCode == 13) {
        Devine()
    }
})
function Devine() {
    var choisi = document.getElementById('nombre').value;
    console.log("nb = " + choisi)
    var text = document.getElementById("ind")
    var essais = document.getElementById("essai")
    if (choisi < 0 || choisi > 100) {
        text.innerText = "Chiffre compris entre 0 et 100 !";
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
        // document.form1.indice.value = "Plus grand.";
        if (choisi > num)
            text.innerText = "C'est moins !";
        // document.form1.indice.value = "Plus petit.";
        if (choisi == num) {
            window.alert("Bravo ! chiffre trouvé en " + NbEssais + " essais.");
            location.reload();

        }
        if (NbEssais == 11) {
            window.alert("Dommage, le nombre correct était : " + num);
            location.reload();
        }
    }
}
