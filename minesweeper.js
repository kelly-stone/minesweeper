document.addEventListener('DOMContentLoaded', startGame)

var board = {           //defined 'board' object
  boardSize: 6,
  cells: [],
};

for (var i = 0; i < Math.pow(board.boardSize,2); i++) {
  board.cells.push({
    row: Math.floor(i/board.boardSize),
    col: i/board.boardSize,
  });
}

function resetBoard() {
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].isMine = (Math.random() > 0.8);
    board.cells[i].isMarked = false;
    board.cells[i].hidden = true;
    board.cells[i].isProcessed = false;
  }

}
resetBoard();

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  document.addEventListener("click", checkForWin);
  document.addEventListener("rightClick", checkForWin);
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i=0; i < board.cells.length; i++)
    var thisCell=board.cells[i];
    if (thisCell.isMine && thisCell.isMarked){
       return true;
    }
    else if((!thisCell.isMine) && (thisCell.hidden)) {
      return false;
    }
    else (thisCell.isMine && (!thisCell.hidden)) 
      return false;
    }
  
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //lib.displayMessage('You win!')
lib.displayMessage('You win!')
doucument.addEventListener("click",restartGame)


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  return lib.getSurroundingCells(cell.row, cell.col) 
}
var surrounding=lib.getSurroundingCells(cell.row, cell.col);
getSurroundingCells=getSurroundingCells.filter(function(cell){
  return cell.isMine
})
for (var i=0; i<board.cell.length; i++){
  board.cells[i].countSurroundingMines=countSurroundingMines(board.cells[i]);
}

function restartGame() {
  document.getElementsByClassName('board')[0].innerHTML="";
  resetBoard();
  document.removeEventListener('click', restartGame);
  startGame();
}