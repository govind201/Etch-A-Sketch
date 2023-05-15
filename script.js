const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset-btn");

const createGrid = (size) => {
    container.innerHTML = "";
    const cellSize = 960 / size;
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

const initialGridSize = 16;
createGrid(initialGridSize);

resetBtn.addEventListener("click", () => {
    let newSize = prompt("Enter new size (max 60):");
    if (newSize !== null && newSize <= 60) {
        createGrid(newSize);
    }
});
