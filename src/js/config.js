let darkMode = document.getElementById('darkMode');
let body = document.querySelector('body');

darkMode.addEventListener('click', ()=>{
    darkMode.classList.toggle ('darkAtv');
    body.classList.toggle('darkAtv');
})