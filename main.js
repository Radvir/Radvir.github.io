document.getElementById("translator").addEventListener('click', (event) => {
    event.stopPropagation();
    window.location.assign("link-to-translator");
})
document.getElementById("body").addEventListener("click", () => {
    window.location.assign("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});