let points = 0;
let inter;

for (let i = 0; i < 4; i++) {
    table.innerHTML += `<div id="column${i}" class="column"></div>`
    for (let j = 0; j < 4; j++) {
        document.getElementById(`column${i}`).innerHTML += `<div class="hole" id="${j}.${i}"></div>`
    }
}

let hole = document.getElementById(`${Math.floor(Math.random() * 4)}.${Math.floor(Math.random() * 4)}`);

function gen_mole() {
    hole.style.backgroundColor = "#a6d8d4ff";
    hole = document.getElementById(`${Math.floor(Math.random() * 4)}.${Math.floor(Math.random() * 4)}`);
    hole.style.backgroundColor = "#8eaf9dff";
    console.log(hole.id);
    // points++;
    document.getElementById("points").innerHTML = points;
}

let time = 0;
function start() {
    points = 0;
    document.querySelectorAll(".hole").forEach((h) => {
        h.addEventListener("click", (e) => {
            if (e.target.id == hole.id) {
                points++;
                gen_mole();
            }
        })
    })
    console.log("start");

    gen_mole();

    let inter = setInterval(() => {
        time++;
        ido.innerHTML = `Time: ${time}s`;
    }, 1000);

    setTimeout(() => {
        ido.innerHTML = `Time: 20s`;
        clearInterval(inter);
        alert("game over\nYour points: " + points);
    }, 20000)
}