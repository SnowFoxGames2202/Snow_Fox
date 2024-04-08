let darkMode = document.getElementById('darkMode');
let body = document.querySelector('body');

darkMode.addEventListener('click', ()=>{
    darkMode.classList.toggle ('darkAtv');
    body.classList.toggle('darkAtv');
    var sound = document.getElementById("sound");
    sound.play();
})