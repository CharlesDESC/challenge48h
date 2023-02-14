let varCopie = [];
let varEssai = [];
let nbEssai = 0;
let codeplace = 0;

let essai = document.getElementById('essai');

let rougebut = document.getElementById('rouge');
rougebut.addEventListener('click', main('rouge'));

let bleubut = document.getElementById('bleu');
bleubut.addEventListener('click', main('bleu'));

let vertbut = document.getElementById('vert');
vertbut.addEventListener('click', main('vert'));

let jaunebut = document.getElementById('jaune');
jaunebut.addEventListener('click', main('jaune'));

let rosebut = document.getElementById('rose');
rosebut.addEventListener('click', main('rose'));

let orangebut = document.getElementById('orange');
orangebut.addEventListener('click', main('orange'));

let blancbut = document.getElementById('blanc');
blancbut.addEventListener('click', main('blanc'));

let varCoul = ['rouge', 'bleu', 'vert', 'jaune', 'rose', 'orange', 'blanc'];

let varOriginal = [];
for (let step = 0; step < 4; step++) {
    varOriginal = varOriginal.concat(random_item(varCoul));
}

function addColor(color, place) {
    varEssai[place] = color;
    varCopie[place] = color;
    essai.innerHTML += color + "    ";
}

function main(color) {
    console.log(color)
    if (codeplace > 3) {
        let BP = calculBP(varCopie, varEssai);
        let MP = calculMP(varCopie, varEssai);
        if (BP < 4 && nbEssai < 20) {
            essai.innerHTML += "<br>Essai " + nbEssai + " :";
        } else {
            if (BP >= 4) {
                alert("you win");
            } else {
                alert("you loose");
            }
        }
        codeplace = 0;
    }
    addColor(color, codeplace);
    codeplace++;
}

function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function calculBP(vec1, vec2) {
    let bp = 0;
    for (let i = 0; i < 4; i++) {
        if (vec1[i] == vec2[i]) {
            bp++;
            vec1[i] = 'X';
            vec2[i] = 'Y';
        }
    }
    return bp;
}

function calculMP(vec1, vec2) {
    let mp = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (vec1[i] == vec2[j]) {
                bp++;
                vec1[i] = 'X';
                vec2[j] = 'Y';
            }
        }
    }
    return mp;
}


















