const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset-btn");
const MAX_GRID_SIZE = 60;
const INITIAL_GRID_SIZE = 16;

const createGrid = (size) => {
  clearGrid();
  const cellSize = calculateCellSize(size);
  for (let i = 0; i < size * size; i++) {
    const cell = createCell(cellSize);
    container.appendChild(cell);
  }
  addHoverEffect();
};

const clearGrid = () => {
  container.innerHTML = "";
};

const calculateCellSize = (size) => {
  const gridTotalSize = 960;
  return gridTotalSize / size;
};

const createCell = (cellSize) => {
  const cell = document.createElement("div");
  cell.classList.add("square");
  cell.style.width = `${cellSize}px`;
  cell.style.height = `${cellSize}px`;
  return cell;
};

const addHoverEffect = () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
  });
};

const promptForNewSize = () => {
  return prompt("Enter new size (max 60):");
};

const isValidSize = (size) => {
  return size !== null && size <= MAX_GRID_SIZE;
};

const resetGrid = () => {
  let newSize = promptForNewSize();
  if (isValidSize(newSize)) {
    createGrid(newSize);
  }
};

createGrid(INITIAL_GRID_SIZE);
resetBtn.addEventListener("click", resetGrid);
