const capaButton = document.getElementById("capa_gxd_button");
const capaDiv = document.getElementById("projeto_gxd_fundo");

capaButton.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    capaDiv.style.display = "block";
    var sound = document.getElementById("sound");
    sound.play();
});