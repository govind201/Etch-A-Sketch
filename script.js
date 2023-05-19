const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset-btn");

const createGrid = (size) => {
    container.innerHTML = "";
    const gridTotalSize = 960;
    const cellSize = gridTotalSize / size;
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("square");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        container.appendChild(cell);
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
    });
}

const initialGridSize = 16;
createGrid(initialGridSize);

resetBtn.addEventListener("click", () => {
    let newSize = prompt("Enter new size (max 60):");
    if (newSize !== null && newSize <= 60) {
        createGrid(newSize);
    }
});
