const grid = document.querySelector("#grid");
const colorButtons = document.querySelectorAll(".colorBtn");
const resetBtn = document.querySelector("#reset");
const sizeBtn = document.querySelector("#size-button")
const squares = []

let size = 16;
let colorBackground = "black";

changeGrid (size);

resetBtn.addEventListener("click", () => {
    squares.forEach((square) => {
        square.style.background = "white";
    })
})

colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        colorBackground = button.getAttribute("id");
    })
})

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
            squares.push(square);
            square.classList.add("square");
            square.addEventListener("mouseover", () => {
                if (colorBackground == "black") {
                    square.style.background = "black";
                }
                else {
                    square.style.background = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;;
                }
                
            })
            row.appendChild(square);
        }
    }
}
