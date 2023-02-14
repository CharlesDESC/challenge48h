//Fenetre modal
const modalBtn = document.getElementById("modal-btn");
const modal = document.getElementById("modal");
const overlay = document.querySelector(".overlay");

if (localStorage.getItem("popupClosedMorpion")) {
    modal.style.display = "none";
    overlay.style.display = "none";
}

const closePopup = () => {
    modal.style.opacity = "0";
    modal.style.transform = "translateX(1200px)";
    overlay.style.opacity = "0";
    localStorage.setItem("popupClosedMorpion", true);
};

modalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closePopup();
});

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
    statusEl.innerText = "Nombre de tentatives : " + max_tentative;
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
    location.reload();
}

// Fonction pour jouer
function play() {
    let fond = document.getElementById('board');
    fond.addEventListener('click', (e) => {
        let elementId = e.target.id;
        let element = document.getElementById(elementId);
        if (element != null && element.classList.contains('square')) {
            if (!element.classList.contains('clicked')) {
                if (board[elementId] == "") {
                    board[elementId] = player;
                    element.classList.add('clicked');
                    element.innerText = board[elementId];
                    if (isGameOver()) {
                        if (isWinner('O')) {
                            statusEl.innerText = "Vous avez gagné !";
                            $.ajax({
                                type: "POST",
                                url: '../morpion/win.php',
                                success: function (response) {
                                    console.log("OK => " + response);
                                },
                                error: function (response) {
                                    console.log("ERREUR => " + response);
                                }
                            });
                            window.alert("Vous avez gagné !");
                            location.reload();
                        }
                        if (isBoardFull()) {
                            statusEl.innerText = "Match nul !";
                            $.ajax({
                                type: "POST",
                                url: '../morpion/nulle.php',
                                success: function (response) {
                                    console.log("OK => " + response);
                                },
                                error: function (response) {
                                    console.log("ERREUR => " + response);
                                }
                            });
                            window.alert("Match nul ! ");
                            location.reload();
                        }
                    } else {
                        do {
                            tourOrdi = random(0, 8);
                            console.log(tourOrdi);
                        } while (board[tourOrdi] != "");
                        board[tourOrdi] = ordi;
                        document.getElementById(tourOrdi).classList.add('clicked');
                        document.getElementById(tourOrdi).innerText = board[tourOrdi];
                        if (isGameOver()) {
                            if (isBoardFull()) {
                                statusEl.innerText = "Match nul !";
                                $.ajax({
                                    type: "POST",
                                    url: '../morpion/nulle.php',
                                    success: function (response) {
                                        console.log("OK => " + response);
                                    },
                                    error: function (response) {
                                        console.log("ERREUR => " + response);
                                    }
                                });
                                window.alert("Match nul ! ");
                                location.reload();
                            } if (isWinner('X')) {
                                statusEl.innerText = "Vous avez perdu !";
                                $.ajax({
                                    type: "POST",
                                    url: '../morpion/lose.php',
                                    success: function (response) {
                                        console.log("OK => " + response);
                                    },
                                    error: function (response) {
                                        console.log("ERREUR => " + response);
                                    }
                                });
                                window.alert("Vous avez perdu !");
                                location.reload();
                            }
                        }
                    }


                }
            }
        }
    });
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
