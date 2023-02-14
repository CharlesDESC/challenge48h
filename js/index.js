//Fenetre modal
const modalBtn = document.getElementById("modal-btn")
const modal = document.getElementById("modal")
const overlay = document.querySelector(".overlay")

modalBtn.addEventListener('click', (e) => {
    e.preventDefault()
    modal.style.opacity = '0'
    modal.style.transform = 'translateX(1200px)'
    overlay.style.opacity = '0'
})


//Carousel
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
})


// bataille navale grille
const winner = document.querySelector('.win')
const tableau = ["A5", "A4", "A3"];
let win = false;
let Case = [];
for (let step = 0; step < tableau.length; step++) {
    Case = Case.concat(false);
}

document.addEventListener('click', (e) => {

    if (win == false) {
        let elementId = e.target.id;
        let element = document.getElementById(elementId);
        if (element != null && element.classList.contains('caseBataille')) {
            if (!element.classList.contains('clicked')) {
                console.log(elementId);
                element.classList.add('clicked');
                if (tableau.includes(elementId)) {
                    element.style.backgroundColor = 'green';
                    element.style.cursor = 'not-allowed';
                } else {
                    element.style.backgroundColor = 'red';
                    element.style.cursor = 'not-allowed';
                }
            }
        }

        for (let step = 0; step < tableau.length; step++) {
            if (document.getElementById(tableau[step]).classList.contains('clicked')) {
                Case[step] = true;
            }
        }
        if (!Case.includes(false)) {
            win = true;
            winner.innerHTML = `
                <h2>Bien jouer vous avez gagner !!</h2>
            `
        }
    }
});