var cases = document.getElementsByClassName("board");

document.addEventListener('click', (e) => {
    let elementId = e.target.id;
    let element = document.getElementById(elementId);

    
     if (element != "fond") {
        element.style.background = 'no-repeat url("../img/croix.png")';
     }

    if (!element.classList.contains('clicked')) {
        //console.log(elementId);
        element.classList.add('clicked');
    }
}
);

// Fonction pour mettre à jour l'affichage du jeu
function render() {
    for (var i = 0; i < board.length; i++) {
      document.getElementById(i).add('clicked')= board[i];
      console.log(board[i]);
    }
    statusEl.innerText = "Tour de " + player;
  }

// Fonction pour vérifier si un joueur a gagné
function isWinner(player) {
    // vérifier les lignes
    for (var i = 0; i < 9; i += 3) {
      if (board[i] == player && board[i+1] == player && board[i+2] == player) {
        return true;
      }
    }
    // vérifier les colonnes
    for (var i = 0; i < 3; i++) {
      if (board[i] == player && board[i+3] == player && board[i+6] == player) {
        return true;
      }
  }
  }
