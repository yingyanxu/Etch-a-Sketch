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
        square.dataset.hoverCount = 0;

        square.addEventListener("mouseenter", () => {
            let hoverCount = parseInt(square.dataset.hoverCount);

            if (hoverCount === 0){
                // first hover: randomize color
                const r = Math.floor(Math.random()*256);
                const g = Math.floor(Math.random()*256);
                const b = Math.floor(Math.random()*256);

                square.dataset.rgb = `${r},${g},${b}`;

            }
            if (hoverCount < 10){
                hoverCount ++;
                square.dataset.hoverCount = hoverCount;
                
                const opacity = hoverCount /10;
                const [r, g, b] = square.dataset.rgb.split(",").map(Number);
                square.style.backgroundColor = `rgba(${r},${g},${b},${opacity})`;
            }
        });

        container.appendChild(square);

    }
}


window.onload = () => {
    createGrid(16);
    size.addEventListener("click", () => {
        let n = 0;
        while (true){
            n = prompt("Enter a number between 0 and 100, exclusive.");
            if (n <= 0 || n >= 100){
                alert("Your number is out of the range. Please choose type again.")
            } else break;
        }

        createGrid(n);
    })

}
