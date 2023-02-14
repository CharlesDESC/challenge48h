let varCopie = [];
let varEssai = [];
let nbEssai = 0;
let codeplace = 0;
let BP = 0;
let MP = 0;

let essai = document.getElementById('essai');

let place = document.getElementById('place');

let rougebut = document.getElementById('rouge');
rougebut.onclick = function () { Main('rouge') };

let bleubut = document.getElementById('bleu');
bleubut.onclick = function () { Main('bleu') };

let vertbut = document.getElementById('vert');
vertbut.onclick = function () { Main('vert') };

let jaunebut = document.getElementById('jaune');
jaunebut.onclick = function () { Main('jaune') };

let rosebut = document.getElementById('rose');
rosebut.onclick = function () { Main('rose') };

let orangebut = document.getElementById('orange');
orangebut.onclick = function () { Main('orange') };

let blancbut = document.getElementById('blanc');
blancbut.onclick = function () { Main('blanc') };

let varCoul = ['rouge', 'bleu', 'vert', 'jaune', 'rose', 'orange', 'blanc'];

let varOriginal = [];
for (let step = 0; step < 4; step++) {
    varOriginal = varOriginal.concat(Random_item(varCoul));
}


essai.innerHTML += "Essais \xa0 : <br>"
essai.innerHTML += "Essai " + (nbEssai + 1) + " \xa0 : \xa0 ";
place.innerHTML += "Bien placé : \xa0\xa0\xa0 Mal placé :"

function AddColor(color, place) {
    varEssai[place] = color;
    varCopie[place] = varOriginal[place];
    essai.innerHTML += color + "    ";
}

function Main(color) {
    if (nbEssai < 20 && BP < 4) {
        console.log(color)
        AddColor(color, codeplace);
        codeplace++;
        if (codeplace > 3) {
            BP = CalculBP(varCopie, varEssai);
            MP = CalculMP(varCopie, varEssai);
            place.innerHTML += "<br>" + BP + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + MP;
            if (BP < 4 && nbEssai < 20) {
                nbEssai++;
                if (nbEssai < 20) {
                    essai.innerHTML += "<br>Essai " + (nbEssai + 1) + " \xa0 : \xa0 ";
                } else {
                    alert("you loose");
                }
            } else {
                if (BP >= 4) {
                    alert("you win");
                }
            }
            codeplace = 0;
        }
    }
}

function Random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function CalculBP(vec1, vec2) {
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

function CalculMP(vec1, vec2) {
    let mp = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (vec1[i] == vec2[j]) {
                mp++;
                vec1[i] = 'X';
                vec2[j] = 'Y';
            }
        }
    }
    return mp;
}






