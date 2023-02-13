const delay = 3000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
    if (next) {
        current += current > maxLeft ? -100 : current * -1;
    } else {
        current = current < 0 ? current + 100 : maxLeft;
    }

    slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function () {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function () {
    changeSlide();
    restart();
});

document.querySelector(".prev-slide").addEventListener("click", function () {
    changeSlide(false);
    restart();
});


// bataille navale grille
const tableau = ["A1", "A2", "A3"];
let win = false;
document.addEventListener('click', (e) => {

    if (win == false) {
        for (let step = 0; step < 2; step++) {
            if (document.getElementById(tableau[step]).classList.contains('clicked')) {
                win = true;
            } else {
                win = false;
            }
        }

        let elementId = e.target.id;
        let element = document.getElementById(elementId);
        if (element != null && element.id != 'plateau') {
            if (!element.classList.contains('clicked')) {
                console.log(elementId);
                element.classList.add('clicked');
                if (tableau.includes(elementId)) {
                    element.style.backgroundColor = 'green';
                } else {
                    element.style.backgroundColor = 'red';
                }
            }
        }

        if (win == true) {
            alert("you win");
        }
    }



}
);