const canvas = document.querySelector("#canvas");

function renderGridCanvas(rowsCount, columnsCount, pixelSize) {
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

      gridSquare.style.background = "dodgerblue";
      // gridSquare.style.background = getRandomRGBColor();
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

renderGridCanvas(16, 16, 50);
