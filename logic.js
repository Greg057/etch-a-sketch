const grid = document.querySelector("#grid");
const sizeBtn = document.querySelector("#size-button")
let size = 16;
changeGrid (size);

sizeBtn.addEventListener("click", () => {
    do {
        size = +prompt("Size of grid: "); 
    } while (size > 100);
    changeGrid (size);
})

function changeGrid (n) {
    grid.replaceChildren();
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
        for (let j = 0; j < n; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", function (square) {
                square.target.style.background = "black";
            })
            row.appendChild(square);
        }
    }
}

