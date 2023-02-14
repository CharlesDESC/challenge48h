let key = document.getElementById("Letter");
let word = document.getElementById("word");
let inputArea = document.getElementById("inText");
let tryy = document.getElementById("tryy");
let tryBool = false;










let i = 0;
let point = 0;

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
        word.textContent = "ggwp";
        inputArea.style.display = "none";
        $.ajax({
          type: "POST",
          url: './textWriter.php',
          success: function(response) {
              console.log("OK => " + response);
          },
          error: function(response) {
              console.log("ERREUR => " + response);
          }
      });
      }

    } else {
      inputArea.style.display = "none";
      word.textContent = "perdu";
    }
  }
});
