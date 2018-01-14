window.onload = function () {
  console.log("app.js loaded!");
  var levelButton = document.getElementById('levelButtons');
  var gameButton = document.getElementById('gameButtons');
  var timeIndicator = document.getElementById('timeIndicator');
  var puzzleBoard = document.querySelector('.puzzleBoard');

  gameButton.addEventListener('click', function(event) {
    switch(event.target.id) {
      case "startButton":
        console.log("startButton clicked.");
        console.log(puzzleBoard.style);
        startPuzzle();
        break;
      case "resetButton":
        console.log("resetButton clicked.");
        console.log(puzzleBoard.style);
        resetPuzzle();
        break;
      case "hintButton":
        console.log("hintButton clicked.");
        break;
      default:
        break;
    }
  });

  levelButton.addEventListener('click', function(event) {
    switch(event.target.id) {
      case "easyButton":
        console.log("easyButton clicked.");
        timeIndicator.innerText = "7:00";
        break;
      case "mediumButton":
        console.log("mediumButton clicked.");
        timeIndicator.innerText = "5:00";
        break;
      case "hardButton":
        console.log("hardButton clicked.");
        timeIndicator.innerText = "3:00";
        break;
    }
  });

  function startPuzzle() {
    puzzleBoard.style.background = "url('img/puzzle/_Puzzle_bg_unsolved.png') no-repeat center";
  }

  function resetPuzzle() {
    puzzleBoard.style.background = "url('img/puzzle/_Puzzle_solved.png') no-repeat center";
  }
};
