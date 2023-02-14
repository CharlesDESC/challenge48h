// Fonction pour mettre à jour l'affichage du jeu
function render() {
    for (var i = 0; i < board.length; i++) {
        document.getElementById(i).innerText = board[i];
    }
    statusEl.innerText = "C'est à vous de jouer !";
}

// Fonction pour initialiser le jeu
function init() {
    board = ["", "", "", "", "", "", "", "", ""];
    player = "O";
    ordi = "X";
    statusEl = document.getElementById("status");
    statusEl.innerText = "C'est à vous de jouer !";
    render();
}

// Fonction pour démarrer une partie
function start() {
    init();
    for (i = 0; i < 9; i++) {
        addEventBtn = document.getElementById(i)
        addEventBtn.onclick = play;
    }
    changeBtn = document.getElementById("start");
    changeBtn.type = 'hidden';
    changeBtn = document.getElementById("reset");
    changeBtn.type = 'button';
    statusEl.innerText = "C'est à vous de jouer !";

}

// Fonction pour relancer une partie
function reset() {
    console.log("reset");
    init();
}

// Fonction pour jouer
function play() {
    let fond = document.getElementById('board');
    fond.addEventListener('click', (e) => {
        let elementId = e.target.id;
        let element = document.getElementById(elementId);
        if (element != null && element.classList.contains('square')) {
            if (!element.classList.contains('clicked')) {
                check(elementId, player);
                do {
                    tourOrdi = random(0, 8);
                    console.log(tourOrdi);
                } while (board[tourOrdi] != "");
                check(tourOrdi, ordi);
            }
        }
    });
}

// Fonction de vérification
function check(indice, result) {
    if (board[indice] == "") {
        board[indice] = result;
        document.getElementById(indice).classList.add('clicked')
        document.getElementById(indice).innerText = board[indice];
        if (isGameOver()) {
            if (isWinner(result)) {
                statusEl.innerText = "Vous avez gagné !";
            }
            return;
        }
        if (isBoardFull()) {
            statusEl.innerText = "Match nul !";            
        }
        return;
    } else {
        console.log("case déjà prise");
    }
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
    // vérifier les diagonales
    if (board[0] == player && board[4] == player && board[8] == player) {
        return true;
    }
    if (board[2] == player && board[4] == player && board[6] == player) {
        return true;
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
