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
let answer;

//hamburger menu
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})

//toggle switch
togglebtn.addEventListener('click', function () {
    if (togglebtn.checked == true && location.hash == '#home') {
        alert('please choose a category to play')
    } else if (togglebtn.checked == true) {
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
        if (togglebtn.checked !== true) {
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
    location.reload();
    play_train_txt.textContent = "TRAIN";
    grid_container.classList.remove("play-mode-color");
    startBtn.classList.add('hide');

    frontText.forEach(function (item) {
        item.classList.remove('none');
    })
    document.getElementById('start-button-image').removeAttribute('src', 'replay.png');
    document.getElementById('start-button-image').setAttribute('src', 'start.png');
}

//launch play mode
function launchPlayMode() {
    play_train_txt.textContent = "PLAY";
    grid_container.classList.add("play-mode-color");
    startBtn.classList.remove('hide');

    frontText.forEach(function (item) {
        item.classList.add('none');
    })

    startBtn.addEventListener('click', startGame);
}

// start game 
let arr = [0, 1, 2, 3, 4, 5, 6, 7];
shuffle(arr);
let a = 0;
function startGame() {
    document.getElementById('start-button-image').removeAttribute('src', 'start.png');
    document.getElementById('start-button-image').setAttribute('src', 'replay.png');
    document.getElementsByClassName('score-container')[0].classList.remove('hide');
    startBtn.removeEventListener('click', startGame);

    let start = arr[a];
    play(start);
}


let mistakes = 0;
let correctAnswer = 0;
function play() {
    let audio = new Audio();
    audio.src = `${cards[i][arr[a]]['audio']}`;
    audio.play();
    startBtn.addEventListener('click', function () {
        audio.play();
    })

    cardInner.forEach(function (item) {
        item.addEventListener('click', function () {
            if (this.id == arr[a]) {
                correctAnswer++;

                let correctAudio = new Audio();
                correctAudio.src = 'correctAudio.wav';
                correctAudio.play();

                document.getElementById(`${this.id}`).remove();
                gridItems[this.id].classList.add('lime-border');

                let star = document.createElement('img');
                star.setAttribute('src', 'starCorrect.png');
                star.setAttribute('id', 'star-icon');
                document.getElementById('icon-container').appendChild(star);

                arr.shift();


                if (correctAnswer > 7 && mistakes == 0) {
                    setTimeout(function () {
                        document.getElementById('game-over').setAttribute('class', 'game-over');
                        document.getElementById('game-over-img').setAttribute('src', 'winner.png');

                        let winSound = new Audio();
                        winSound.src = 'won.wav';
                        winSound.play();
                    }, 1000)

                } else if (correctAnswer > 7) {
                    setTimeout(function () {
                        document.getElementById('game-over').setAttribute('class', 'game-over');
                        document.getElementById('game-over-img').setAttribute('src', 'loser.png');

                        let lostSound = new Audio();
                        lostSound.src = 'lost.wav';
                        lostSound.play();
                    }, 1000)

                }

                audio.src = `${cards[i][arr[a]]['audio']}`;
                setTimeout(function () {
                    audio.play();
                }, 1200)

            } else {
                let wrongAudio = new Audio();
                wrongAudio.src = 'wrongAudio.wav';
                wrongAudio.play();

                gridItems[this.id].classList.add('red-border');
                let id = this.id;
                setTimeout(function () {
                    gridItems[id].classList.remove('red-border');
                }, 1000)

                let grayStar = document.createElement('img');
                grayStar.setAttribute('src', 'starWrong.png');
                grayStar.setAttribute('id', 'star-icon');
                document.getElementById('icon-container').appendChild(grayStar);

                mistakes++;
                return;
            }
        })
    })


}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}








