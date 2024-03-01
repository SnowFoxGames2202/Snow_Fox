let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Volte 😥";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})