const container = document.querySelector("#container");
const body = document.querySelector("body");

function createGrid(n) {

    for (let i = 0; i < n*n; i++){
        const square = document.createElement("div");
        square.classList.add('grid-square');
        square.style.width = `${100/n}%`;
        square.style.height = `${100/n}%`;
        container.appendChild(square);

    }
}

const size = document.createElement("button");
size.textContent = "Choose Size";

let n = 0;
size.addEventListener("click", () => {
    n = prompt("Enter a number between 0 and 100.");
    createGrid(n);
})

body.insertBefore(size, container);
