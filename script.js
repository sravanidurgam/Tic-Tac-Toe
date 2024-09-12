let boxes = document.querySelectorAll(".box");
let turn = "X";
let isGameOver = false;

boxes.forEach(box => {
  box.addEventListener("click", () => {
    if (box.innerHTML === "" && !isGameOver) {
      box.innerHTML = turn;
      changeTurn();
      checkWin();
    }
  });
});

function changeTurn() {
  turn = turn === "X" ? "O" : "X";
  document.querySelectorAll(".turn-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  document.getElementById(`turn-${turn.toLowerCase()}`).classList.add("active");
}

function checkWin() {
  let winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  winningCombinations.forEach(combo => {
    let [a, b, c] = combo;
    if (boxes[a].innerHTML && 
        boxes[a].innerHTML === boxes[b].innerHTML && 
        boxes[a].innerHTML === boxes[c].innerHTML) {
      document.querySelector("#results").innerHTML = `Player ${boxes[a].innerHTML} Wins!`;
      isGameOver = true;
    }
  });

  if (!isGameOver && Array.from(boxes).every(box => box.innerHTML !== "")) {
    document.querySelector("#results").innerHTML = "It's a Draw!";
    isGameOver = true;
  }
}

document.querySelector("#play-again").addEventListener("click", () => {
  isGameOver = false;
  turn = "X";
  document.querySelector("#results").innerHTML = "";
  boxes.forEach(box => {
    box.innerHTML = "";
  });
  document.getElementById('turn-x').classList.add("active");
  document.getElementById('turn-o').classList.remove("active");
});
