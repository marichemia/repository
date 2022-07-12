import { cards } from './cards.js';

//variable declarations
//menu
const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
//toggle switch
const togglebtn = document.getElementById("toggle-button");
const play_train_txt = document.getElementById("play-train");
const grid_container = document.querySelector(".grid-container");
const startBtn = document.getElementsByClassName('start-button')[0];
//grids
const grids = document.getElementsByClassName('grid');
//category grid
const frontImages = document.querySelectorAll(".first-image");
const backImages = document.querySelectorAll(".second-image");
const frontText = document.querySelectorAll(".text");
const backText = document.querySelectorAll(".translation");
const gridItems = document.querySelectorAll(".flip-card");
const cardInner = document.querySelectorAll(".flip-card-inner");
const cardBack = document.querySelectorAll(".flip-card-back");
let i;

//hamburger menu
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})

//toggle switch
togglebtn.addEventListener('click', function () {
    if (togglebtn.checked == true) {
        launchPlayMode();
    } else {
        disablePlayMode();
    }
})

// change between home and category grids
window.addEventListener('hashchange', function () {
    location.reload();
})

if (location.hash == '#home') {
    grids[0].classList.remove('none');
    grids[1].setAttribute('class', 'none');

} else {
    grids[0].setAttribute('class', 'none');
}

if (!location.hash) {
    location.hash = "#home";
}

//set up category grid with images, audios and texts for all categories

if (location.hash == '#animals') {
    i = 0;
} else if (location.hash == '#clothes') {
    i = 1;
} else if (location.hash == '#feelings') {
    i = 2;
} else if (location.hash == '#colors') {
    i = 3;
} else if (location.hash == '#food') {
    i = 4;
} else if (location.hash == '#numbers') {
    i = 5;
} else if (location.hash == '#actions') {
    i = 6;
} else if (location.hash == '#body') {
    i = 7;
}

for (let j = 0; j < gridItems.length; j++) {
    frontImages[j].setAttribute(`src`, `${cards[i][j]['img']}`);
    backImages[j].setAttribute(`src`, `${cards[i][j]['img']}`);
    frontText[j].textContent = `${cards[i][j]['word']}`;
    backText[j].textContent = `${cards[i][j]['translation']}`;

    gridItems[j].addEventListener('click', function () {
        let audio = new Audio();
        audio.src = `${cards[i][j]['audio']}`;

        if (togglebtn.checked == true) {
            audio.muted = true;
        }

        audio.play();
    })
}


//flipping cards

cardInner.forEach(function (item) {
    item.addEventListener('click', function () {
        if (togglebtn.checked == true) {

        } else {
            item.classList.add('rotate');
        }
    })
})

cardInner.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        item.classList.remove('rotate');
    })
})

//disable play mode
function disablePlayMode() {
    play_train_txt.textContent = "TRAIN";
    grid_container.classList.remove("play-mode-color");
    startBtn.classList.add('hide');

    frontText.forEach(function (item) {
        item.classList.remove('none');
    })
}

//launch play mode
function launchPlayMode() {
    play_train_txt.textContent = "PLAY";
    grid_container.classList.add("play-mode-color");
    startBtn.classList.remove('hide');

    frontText.forEach(function (item) {
        item.classList.add('none');
    })
}

// start game 
let clicked = false;
startBtn.addEventListener('click', startGame);
function startGame() {
    cardInner.forEach(function (item) {
        item.addEventListener('click', function () {
            clicked = true;
        })
    })

    let arr = [0, 1, 2, 3, 4, 5, 6, 7];
    shuffle(arr);
    let last = arr.pop();
    word(last);
}



function word(num) {

    let audio = new Audio();
    audio.src = `${cards[i][num]['audio']}`;
    audio.play();
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}








