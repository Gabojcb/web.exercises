const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "G"];
const btn = document.querySelector(".btn-hero");
const buttonReset = document.querySelector(".reset");
const spanColor = document.querySelector(".color");

btn.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    spanColor.textContent = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
}


buttonReset.addEventListener("click", () => {
    document.body.style.backgroundColor = "#fff";
})