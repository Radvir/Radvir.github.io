let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"];
let L_list = [];
for (let i = 0; i < letters.length; i++) {
    L_list.push(letters[i]);
    L_list.push(letters[i]);
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function main() {
    main_.innerHTML = "";
    let clicked_IDs = [];
    let found_pairs = 0;
    let found_Ids = [];
    let clicks = 0;

    L_list = shuffleArray(L_list);

    let list_index = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            main_.innerHTML += `<div class="card" id="${i}.${j}">${L_list[list_index]}</div>`;
            list_index++;
        }
    }

    document.querySelectorAll(".card").forEach((h) => {
        h.addEventListener("click", (e) => {
            if (clicked_IDs.length == 2) {
                document.getElementById(clicked_IDs[0]).style.color = "white";
                document.getElementById(clicked_IDs[1]).style.color = "white";
                clicked_IDs = [];
            }
            if (!clicked_IDs.find((x) => x == e.target.id) && clicked_IDs.length < 2 && !found_Ids.find((x) => x == e.target.id)) {
                clicked_IDs.push(e.target.id);
                e.target.style.color = "black";
                clicks++;
            }
            if (clicked_IDs.length == 2) {
                if (document.getElementById(clicked_IDs[0]).innerHTML == document.getElementById(clicked_IDs[1]).innerHTML) {
                    found_pairs++;
                    found_Ids.push(clicked_IDs[0]);
                    found_Ids.push(clicked_IDs[1]);
                    clicked_IDs = [];
                }
            }
            if (found_Ids.length == 36) {
                setTimeout(() => {
                    alert("Nyertél\nKattintások: " + clicks);
                    main();
                }, 1000);
            }
            console.log(clicked_IDs);
        })
    })
}

main();