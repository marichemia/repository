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
        console.log('heeeeeeeeey');
        play_train_txt.textContent = "PLAY";
        grid_container.classList.add("play-mode-color");

    } else {
        play_train_txt.textContent = "TRAIN";
        grid_container.classList.remove("play-mode-color");
        console.log("hiiiiiiiiiii");
    }
})

//animals??

const animalsMenu = document.getElementById("animals");
const firstGrid = document.getElementById("grid-item-1");
const animalsImg = document.getElementById("card-image-1");
const gridTextOne = document.getElementById("grid-text-1");
const firstAudio = document.createElement("audio");
const firstAudioSource = document.createElement("source");

animalsMenu.addEventListener('click', function () {
    animalsImg.removeAttribute("src");
    animalsImg.setAttribute("src", "dog.png");
    navbar.classList.remove("change");
    gridTextOne.textContent = "Dog"


})


if (gridTextOne.textContent == "Animals") {
    firstGrid.addEventListener('click', function () {
        animalsImg.removeAttribute("src");
        animalsImg.setAttribute("src", "dog.png");
        gridTextOne.textContent = "Dog"
    })
}

