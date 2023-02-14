//Fenetre modal
const modalBtn = document.getElementById("modal-btn");
const modal = document.getElementById("modal");
const overlay = document.querySelector(".overlay");

if (localStorage.getItem("popupClosedText")) {
  modal.style.display = "none";
  overlay.style.display = "none";
}

const closePopup = () => {
  modal.style.opacity = "0";
  modal.style.transform = "translateX(1200px)";
  overlay.style.opacity = "0";
  localStorage.setItem("popupClosedText", true);
};

modalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closePopup();
});

let key = document.getElementById("Letter");
let word = document.getElementById("word");
let inputArea = document.getElementById("inText");
let tryy = document.getElementById("tryy");
let button = document.getElementById("start");
let restart = document.getElementById("restart");

let tryBool = false;
let i = 0;
let point = 0;

word.style.display = "none";
inputArea.style.display = "none";
restart.style.display = "none";

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.jeux[3].max_tentative);
    
    if (data.jeux[3].max_tentative >= 1) {
      button.addEventListener("click", () => {
        word.style.display = "flex";
        inputArea.style.display = "flex";
        button.style.display = "none";
        restart.style.display = "flex";
      });
    
      restart.addEventListener("click", () => {
        location.reload();
      });
    } else if (data.jeux[3].max_tentative <= 1) {
      button.textContent = "plus de tentatives :/";
    }
  });



text = text.toLowerCase();
text = text.split(" ");

word.textContent = text[i] + " " + text[i + 1] + " " + text[i + 2];

document.addEventListener("keyup", (e) => {
  if (e.key === " ") {
    if (i - point < 4) {
      var input = document.getElementById("inText").value;
      input = input.toLowerCase();
      input = input.substring(0, input.length - 1);
      console.log(input);
      console.log(text[i]);

      if (input === text[i]) {
        point = point + 1;
        i = i + 1;
      } else if (input !== text[i]) {
        i = i + 1;
      }
      console.log(i);
      console.log(point);
      document.getElementById("inText").value = "";
      console.log("stop" + text.length);

      if (text.length - i > 3) {
        word.textContent = text[i] + " " + text[i + 1] + " " + text[i + 2];
      }
      if (i === text.length - 3) {
        word.textContent = text[i] + " " + text[i + 1] + " " + text[i + 2];
      }
      if (i === text.length - 2) {
        word.textContent = text[i] + " " + text[i + 1];
      }
      if (i === text.length - 1) {
        word.textContent = text[i];
      }
      if (i === text.length) {
        word.textContent = "bravo ! vous avez gagné un missile !";
        inputArea.style.display = "none";
        $.ajax({
          type: "POST",
          url: "./modifscore.php",
          success: function (response) {
            console.log("OK => " + response);
          },
          error: function (response) {
            console.log("ERREUR => " + response);
          },
        });
      }
    } else {
      inputArea.style.display = "none";
      word.textContent = "perdu";
    }
  }
});
