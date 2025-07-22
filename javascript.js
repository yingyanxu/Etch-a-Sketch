const body = document.querySelector("body");
const container = document.querySelector("#container");
const size = document.querySelector("button");

function createGrid(n) {
    
    container.textContent = "";
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    for (let i = 0; i < n*n; i++){
        const square = document.createElement("div");
        square.classList.add('grid-square');
        container.appendChild(square);

    }
}


window.onload = () => {
    createGrid(16);
    size.addEventListener("click", () => {
        let n = prompt("Enter a number between 0 and 100.");
        createGrid(n);
    })

}
