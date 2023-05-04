const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset-btn");

function createGrid(size) {
    container.innerHTML = "";
    const cellSize = 960 / size;

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = `${cellSize}px`;
        div.style.height = `${cellSize}px`;
        container.appendChild(div);
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
    });
}

createGrid(16);

resetBtn.addEventListener("click", () => {
    let newSize = prompt("Enter new size (max 100):");
    if (newSize !== null && newSize <= 100) {
        createGrid(newSize);
    }
});
