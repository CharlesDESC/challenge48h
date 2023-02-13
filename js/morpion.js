var cases = document.getElementsByClassName("board");

var board = ["", "", "", "", "", "", "", "", ""]; // tableau pour stocker l'état du jeu
var player = "O"; // joueur 
var ordi = "X"; // ordi
var statusEl = document.getElementById("status");
//statusEl.innerText = "C'est à vous de jouer!"; // élément pour afficher le statut du jeu
var resetBtn = document.getElementById("reset"); // bouton pour rejouer


function play() {
    let fond = document.getElementById('board');
    fond.addEventListener('click', (e) => {
        let elementId = e.target.id;
        let element = document.getElementById(elementId);
        if (element != null && element.classList.contains('square')) {
            board[elementId] = player;
            render();
            if (isGameOver()) {
                if (isWinner(player)) {
                    statusEl.innerText = "Vous avez gagné !";
                }
                return;
            }
            if (isBoardFull()) {
                statusEl.innerText = "Match nul !";
                return;
            }
        }
        tourOrdi = random(0, 8);
        console.log(tourOrdi);
        if (board[tourOrdi] == ""){
            joueur = "Player"
            board[tourOrdi] = ordi;
            render();
            if (isGameOver()) {
                if (isWinner(ordi)) {
                    statusEl.innerText = "Vous avez perdu !";
                }else{
                    statusEl.innerText = "Match nul !";
                }
                return;
            }
        }
       

    });
    

}


// Fonction pour mettre à jour l'affichage du jeu
function render() {
    for (var i = 0; i < board.length; i++) {
        document.getElementById(i).innerText = board[i];
    }
    statusEl.innerText = "Tour de " + player;
}

// Fonction pour vérifier si le jeu est terminé
function isGameOver() {
    return (
        isBoardFull() || // le plateau est rempli
        isWinner("X") || // X a gagné
        isWinner("O") // O a gagné
    );
}

// Fonction pour vérifier si le plateau est rempli
function isBoardFull() {
    for (var i = 0; i < board.length; i++) {
        if (board[i] == "") {
            return false;
        }
    }
    return true;
}

// Fonction pour vérifier si un joueur a gagné
function isWinner(player) {
    // vérifier les lignes
    for (var i = 0; i < 9; i += 3) {
        if (board[i] == player && board[i + 1] == player && board[i + 2] == player) {
            return true;
        }
    }
    // vérifier les colonnes
    for (var i = 0; i < 3; i++) {
        if (board[i] == player && board[i + 3] == player && board[i + 6] == player) {
            return true;
        }
    }
}

function random(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
