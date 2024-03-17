const canvas = document.querySelector("#canvas");
const settingsPanel = document.querySelector(".settings-panel");

const rowsCountInput = document.querySelector("#rows-count");
const columnsCountInput = document.querySelector("#columns-count");
const pixelSizeInput = document.querySelector("#pixel-size");

settingsPanel.addEventListener("input", (e) => {
  if (e.target.id === "color-input" || e.target.id === "random-color") {
    return;
  }

  rowsCountInput.max = Math.floor(canvas.clientHeight / pixelSizeInput.value);
  columnsCountInput.max = Math.floor(canvas.clientWidth / pixelSizeInput.value);

  renderGridCanvas(
    rowsCountInput.value,
    columnsCountInput.value,
    pixelSizeInput.value
  );
});

function renderGridCanvas(rowsCount, columnsCount, pixelSize) {
  canvas.innerHTML = "";
  console.log(canvas);

  const grid = document.createElement("div");
  grid.classList.add("grid");

  for (let i = 0; i < rowsCount; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < columnsCount; j++) {
      const column = document.createElement("div");
      column.classList.add("grid-column");

      column.style.width = `${pixelSize}px`;
      column.style.height = `${pixelSize}px`;

      row.appendChild(column);
    }

    grid.appendChild(row);
  }

  grid.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-column")) {
      const gridSquare = event.target;

      const colorInput = document.querySelector("#color-input");
      const randomColor = document.querySelector("#random-color");

      if (randomColor.checked) {
        gridSquare.style.background = getRandomRGBColor();
      } else {
        gridSquare.style.background = colorInput.value;
      }
    }
  });

  canvas.appendChild(grid);
}

function getRandomRGBColor() {
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * maxNumber) + minNumber;
}

renderGridCanvas(
  rowsCountInput.value,
  columnsCountInput.value,
  pixelSizeInput.value
);
