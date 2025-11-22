// This file is intentionally left blank.


let yPosition = 0;
let xPosition = 0;

document.addEventListener("keydown", (event) => {
  const div = document.getElementById("game")
  if (event.key === "ArrowUp") {
    if (yPosition > 0) {
      yPosition--;
      div.style.top = `${yPosition}px`
    }
  }

  if (event.key === "ArrowDown") {
    if (yPosition < 280) {
      yPosition++;
      div.style.top = `${yPosition}px`
    }
  }

  if (event.key === "ArrowRight") {
    if (xPosition < 780) {
      xPosition++;
      div.style.left = `${xPosition}px`
    }

  }

  if (event.key === "ArrowLeft") {
    if (xPosition > 0) {
      xPosition--;
      div.style.left = `${xPosition}px`
    }
  }


})
