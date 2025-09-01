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

let yPosition2 = 0;
let xPosition2 = 0;

document.addEventListener("keydown", (event) => {
  // Déplacement du carré dans la deuxième section avec Z, S, Q, D
  const div2 = document.getElementById("game2");
  if (!div2) return;

  if (event.key.toLowerCase() === "z") {
    if (yPosition2 > 0) {
      yPosition2--;
      div2.style.top = `${yPosition2}px`;
    }
  }
  if (event.key.toLowerCase() === "s") {
    if (yPosition2 < 280) {
      yPosition2++;
      div2.style.top = `${yPosition2}px`;
    }
  }
  if (event.key.toLowerCase() === "q") {
    if (xPosition2 > 0) {
      xPosition2--;
      div2.style.left = `${xPosition2}px`;
    }
  }
  if (event.key.toLowerCase() === "d") {
    if (xPosition2 < 780) {
      xPosition2++;
      div2.style.left = `${xPosition2}px`;
    }
  }
});


})
