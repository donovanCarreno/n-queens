/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var newBoard = new Board({'n': n});
  var solution;

  var helperSolution = function(board, rowIndex) {

    if (solution) {
      return;
    }

    for (var i = 0; i < n; i++) {
      if (solution === undefined) {
        board.togglePiece(rowIndex, i);
      }

      if (!board.hasAnyRooksConflicts()) {
        if (rowIndex < (n - 1)) {
          helperSolution(board, rowIndex + 1);
        } else {
          solution = board.rows();
          return solution;
        }
      }
      if (solution === undefined) {
        board.togglePiece(rowIndex, i);
      }
    }

  };

  helperSolution(newBoard, 0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

  var findSolutions = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyRooksConflicts()) {
        findSolutions(row + 1);
      }
      
      board.togglePiece(row, i);
      
    }

  };

  findSolutions(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // these boards have no solution
  if (n === 2 || n === 3) {
    return new Board({n: n}).rows();
  }
  var newBoard = new Board({'n': n});
  var solution;

  var helperSolution = function(board, rowIndex) {

    if (solution) {
      return;
    }

    for (var i = 0; i < n; i++) {
      if (solution === undefined) {
        board.togglePiece(rowIndex, i);
      }

      if (!board.hasAnyQueensConflicts()) {
        if (rowIndex < (n - 1)) {
          helperSolution(board, rowIndex + 1);
        } else {
          solution = board.rows();
          return solution;
        }
      }

      if (solution === undefined) {
        board.togglePiece(rowIndex, i);
      }
    }

  };

  helperSolution(newBoard, 0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution || [];
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

  var findSolutions = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyQueensConflicts()) {
        findSolutions(row + 1);
      }
      
      board.togglePiece(row, i);
      
    }

  };

  findSolutions(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
