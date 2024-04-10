const item = document.querySelectorAll(`.item-menu`)

const pag = document.querySelectorAll('#pag');

item.forEach((item, indice) =>{
    item.addEventListener(`click`, () => {
        const itemAtv = document.querySelector('.ativo.item-menu')
        const pagatv = document.querySelector('.ativo#pag')
        itemAtv.classList.remove('ativo')
        item.classList.add('ativo')
        pag[indice].classList.add('ativo')
        pagatv.classList.remove('ativo')
    })
})

const loginButton = document.getElementById("login");
const loginDiv = document.getElementById("loginDiv");

loginButton.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    loginDiv.style.position = "absolute";
    loginDiv.style.zIndex = "1000";
    document.body.appendChild(loginDiv);
    loginDiv.style.display = "block";
});
<<<<<<< HEAD
=======

const pass1 = document.getElementById(`pass1`).value;
const chk = document.getElementById(`chk`)
chk.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    if (chk.checked) {
        pass1.type = "text";
    } else {
        pass1.type = "password";
    }
});
>>>>>>> parent of 010ea3f (Add files via upload)
