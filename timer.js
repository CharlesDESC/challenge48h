// Définition de la durée du minuteur en secondes
var timerDuration = 900;

// Fonction pour démarrer le minuteur
function startTimer() {
  var now = new Date().getTime();
  var expiration = now + (timerDuration * 1000);
  document.cookie = "timerExpiration=" + expiration;
}

// Fonction pour afficher le minuteur sur la page
function displayTimer() {
  var now = new Date().getTime();
  var expiration = parseInt(getCookie("timerExpiration"));
  var remainingSeconds = Math.max(0, Math.round((expiration - now) / 1000));
  var remainingMinutes = Math.floor(remainingSeconds / 60);
  var remainingSeconds = remainingSeconds % 60;
  var timerText = "Temps restant : " + remainingMinutes + " min " + remainingSeconds + " sec";
  document.getElementById("timer").innerHTML = timerText;
}

// Fonction pour vérifier si le minuteur est expiré
function isTimerExpired() {
  var now = new Date().getTime();
  var expiration = parseInt(getCookie("timerExpiration"));
  if (isNaN(expiration)) {
    return true;
  }
  return now > expiration;
}

// Fonction pour récupérer la valeur d'un cookie
function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}
