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
      // case "hintButton":
        // console.log("hintButton clicked.");
        // break;
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
    var flexgridContainer = document.createElement('div');
    var firstSideDiv = document.createElement('div');
    var puzzlePiecesContainerDiv = document.createElement('div');
    var lastSideDiv = document.createElement('div');

    toggleLevelButtons(true);

    puzzleBoard.style.background = "url('img/puzzle/_Puzzle_bg_unsolved.png') no-repeat center";
    flexgridContainer.classList.add('flex-grid');
    flexgridContainer.id = "puzzlePiecesGrid";
    firstSideDiv.classList.add('flex-grid__col');
    flexgridContainer.appendChild(firstSideDiv);

    puzzlePiecesContainerDiv.classList.add('flex-grid__col');
    puzzlePiecesContainerDiv.classList.add('puzzlePieces');
    // Puzzle Pieces Go Here
    for (i = 5; i < 46; i++) {
      var newPuzzlePiece = document.createElement('img');
      var imageSource = "img/puzzle/Group " + i + ".png";
      newPuzzlePiece.src = imageSource;
      puzzlePiecesContainerDiv.appendChild(newPuzzlePiece);
    }

    flexgridContainer.appendChild(puzzlePiecesContainerDiv);
    lastSideDiv.classList.add('flex-grid__col');
    flexgridContainer.appendChild(lastSideDiv);
    document.body.appendChild(flexgridContainer);
  }

  function resetPuzzle() {
    var puzzlePiecesContainerDiv = document.getElementById('puzzlePiecesGrid');
    puzzleBoard.style.background = "url('img/puzzle/_Puzzle_solved.png') no-repeat center";

    toggleLevelButtons(false);

    if (puzzlePiecesContainerDiv) {
      puzzlePiecesContainerDiv.parentNode.removeChild(puzzlePiecesContainerDiv);
    }

  }

  function toggleLevelButtons(disabledFlag) {
    var levelButtonChildNodes = levelButton.childNodes;

    for (i = 0; i < levelButtonChildNodes.length; i++) {
      if (levelButtonChildNodes[i].tagName === "BUTTON") {
        levelButtonChildNodes[i].disabled = disabledFlag;
      }
    }
  }
};
