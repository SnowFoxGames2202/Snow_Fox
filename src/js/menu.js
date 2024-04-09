const item = document.querySelectorAll(`.item-menu`)

const pag = document.querySelectorAll('.pag');

item.forEach((item, indice) =>{
    item.addEventListener(`click`, () => {
        const itemAtv = document.querySelector('.ativo.item-menu')
        const pagatv = document.querySelector('.ativo.pag')
        itemAtv.classList.remove('ativo')
        item.classList.add('ativo')
        pag[indice].classList.add('ativo')
        pagatv.classList.remove('ativo')
        var sound = document.getElementById("sound");
        sound.play();
    })
})

const loginButton = document.getElementById("login");
const loginDiv = document.getElementById("loginDiv");

loginButton.addEventListener("click", function(e) {
    event.preventDefault();
    event.stopPropagation();
    loginDiv.style.position = "absolute";
    loginDiv.style.zIndex = "1000";
    document.body.appendChild(loginDiv);
    loginDiv.style.display = "block";
    var sound = document.getElementById("sound");
    sound.play();
});

/*var restri = "250702"

function validar() {
    if (document.getElementById("senha").value == restri) {
        const cadastroButton = document.getElementById("cadastro");
        const cadastroDiv = document.getElementById("cadastroDiv");

        cadastroButton.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            loginDiv.style.position = "absolute";
            loginDiv.style.zIndex = "1000";
            document.body.appendChild(cadastroDiv);
            loginDiv.style.display = "block";
            var sound = document.getElementById("sound");
            sound.play();
        });
    }else {
        alert("Senha incorreta!")
    }
}*/

const cadastroButton = document.getElementById("cadastro");
const cadastroDiv = document.getElementById("cadastroDiv");

cadastroButton.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    cadastroDiv.style.position = "absolute";
    cadastroDiv.style.zIndex = "1000";
    document.body.appendChild(cadastroDiv);
    cadastroDiv.style.display = "block";
    var sound = document.getElementById("sound");
    sound.play();
});
