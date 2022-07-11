import { cards } from './cards.js';
//hamburger menu

const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})

//toggle switch

const togglebtn = document.getElementById("toggle-button");
const play_train_txt = document.getElementById("play-train");
const grid_container = document.querySelector(".grid-container");
togglebtn.addEventListener('click', function () {
    if (togglebtn.checked == true) {
        play_train_txt.textContent = "PLAY";
        grid_container.classList.add("play-mode-color");
        launchPlayMode();
    } else {
        play_train_txt.textContent = "TRAIN";
        grid_container.classList.remove("play-mode-color");

        for (let i = 0; i < 8; i++) {
            frontText[i].classList.remove('none');
        }

    }
})



window.addEventListener('hashchange', function () {
    location.reload();
})

if (location.hash == '#home') {
    document.getElementsByClassName('grid')[0].classList.remove('none');
    document.getElementsByClassName('grid')[1].setAttribute('class', 'none');

} else {
    document.getElementsByClassName('grid')[0].setAttribute('class', 'none');
}

if (!location.hash) {
    location.hash = "#home";
}

/////

const frontImages = document.querySelectorAll(".first-image");
const backImages = document.querySelectorAll(".second-image");
const frontText = document.querySelectorAll(".text");
const backText = document.querySelectorAll(".translation");
const gridItems = document.querySelectorAll(".flip-card");
const cardInner = document.querySelectorAll(".flip-card-inner");
const cardBack = document.querySelectorAll(".flip-card-back");
let i;
console.log(cardInner);

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

for (let j = 0; j < 8; j++) {
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
        item.classList.add('rotate');
    })
})

cardInner.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        item.classList.remove('rotate');
    })
})

//play mode function
const imageContainer = document.getElementsByClassName('card-image-container');
const card = document.getElementsByClassName('card');

function launchPlayMode() {
    for (let i = 0; i < 8; i++) {
        frontText[i].classList.add('none');
    }

    cardInner.forEach(function (item) {
        item.classList.add('preventClick');
    })

    let arr = [0, 1, 2, 3, 4, 5, 6, 7];
    shuffle(arr);
    console.log(arr);
    let last = arr.pop();
    console.log(last);
    word(last);
    console.log(word(last));


}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function word(num) {
    let isClicked = false;

    let audio = new Audio();
    audio.src = `${cards[i][num]['audio']}`;
    audio.play();
}
