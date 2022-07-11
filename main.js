import { animals } from './animals.js';


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

    } else {
        play_train_txt.textContent = "TRAIN";
        grid_container.classList.remove("play-mode-color");

    }
})

document.getElementById("ragaca").addEventListener('click', function () {
    const audio = document.createElement("audio");
    audio.setAttribute('autoplay', '');
    const ragaca = document.getElementById("ragaca");
    ragaca.appendChild(audio);
    const source = document.createElement("source");
    source.setAttribute('type', 'audio/mpeg');
    source.setAttribute('src', 'dogaudio.mp3');
    audio.appendChild(source);
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



if (location.hash == "#animals") {
    document.getElementsByClassName("first-image")[0].setAttribute('src', `${animals[0]['img']}`);
    document.getElementsByClassName("first-image")[1].setAttribute('src', `${animals[0]['img']}`);

    document.getElementById("first-text").textContent = `${animals[0]['word']}`;
    document.getElementById("first-translation").textContent = `${animals[0]['translation']}`;

    document.getElementsByClassName("second-image")[0].setAttribute('src', `${animals[1]['img']}`);
    document.getElementsByClassName("second-image")[1].setAttribute('src', `${animals[1]['img']}`);

    document.getElementById("second-text").textContent = `${animals[1]['word']}`;
    document.getElementById("second-translation").textContent = `${animals[1]['translation']}`;

    document.getElementsByClassName("third-image")[0].setAttribute('src', `${animals[2]['img']}`);
    document.getElementsByClassName("third-image")[1].setAttribute('src', `${animals[2]['img']}`);

    document.getElementById("third-text").textContent = `${animals[2]['word']}`;
    document.getElementById("third-translation").textContent = `${animals[2]['translation']}`;

    document.getElementsByClassName("fourth-image")[0].setAttribute('src', `${animals[3]['img']}`);
    document.getElementsByClassName("fourth-image")[1].setAttribute('src', `${animals[3]['img']}`);

    document.getElementById("fourth-text").textContent = `${animals[3]['word']}`;
    document.getElementById("fourth-translation").textContent = `${animals[3]['translation']}`;

    document.getElementsByClassName("fifth-image")[0].setAttribute('src', `${animals[4]['img']}`);
    document.getElementsByClassName("fifth-image")[1].setAttribute('src', `${animals[4]['img']}`);

    document.getElementById("fifth-text").textContent = `${animals[4]['word']}`;
    document.getElementById("fifth-translation").textContent = `${animals[4]['translation']}`;

    document.getElementsByClassName("sixth-image")[0].setAttribute('src', `${animals[5]['img']}`);
    document.getElementsByClassName("sixth-image")[1].setAttribute('src', `${animals[5]['img']}`);

    document.getElementById("sixth-text").textContent = `${animals[5]['word']}`;
    document.getElementById("sixth-translation").textContent = `${animals[5]['translation']}`;

    document.getElementsByClassName("seventh-image")[0].setAttribute('src', `${animals[6]['img']}`);
    document.getElementsByClassName("seventh-image")[1].setAttribute('src', `${animals[6]['img']}`);

    document.getElementById("seventh-text").textContent = `${animals[6]['word']}`;
    document.getElementById("seventh-translation").textContent = `${animals[6]['translation']}`;

    document.getElementsByClassName("eighth-image")[0].setAttribute('src', `${animals[7]['img']}`);
    document.getElementsByClassName("eighth-image")[1].setAttribute('src', `${animals[7]['img']}`);

    document.getElementById("eighth-text").textContent = `${animals[7]['word']}`;
    document.getElementById("eighth-translation").textContent = `${animals[7]['translation']}`;
}






