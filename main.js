//hamburger menu

const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})

//toggle switch

const togglebtn = document.getElementById("toggle-button");
const play_train_txt = document.getElementById("play-train");
togglebtn.addEventListener('click', function () {
    if (togglebtn.checked == true) {
        console.log('heeeeeeeeey');
        play_train_txt.textContent = "PLAY";
    } else {
        play_train_txt.textContent = "TRAIN";
        console.log("hiiiiiiiiiii");
    }
})
