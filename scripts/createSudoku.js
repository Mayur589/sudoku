import { isValid } from "./solver.js";

const board = [
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let randomBoard = [...board];

const suffle = (arr) => {
     for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
     }

     return arr;
}

const fillBoard = (board) => {
     for (let row = 0; row < 9; row++) {
          for (let col = 0; col < 9; col++) {
               if (board[row][col] === 0) {
                    const numbers = suffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
                    for (const num of numbers) {
                         if (isValid(board, num, [row, col])) {
                              board[row][col] = num;
                              if (fillBoard(board)) return true
                              board[row][col] = 0;
                         }
                    }
                    return false;
               }
          }
     }
     return true;
}

const removeCell = (board, clues = 35) => {
     let attemps = 81 - clues;

     while (attemps > 0) {
          const row = Math.floor(Math.random() * 9);
          const col = Math.floor(Math.random() * 9);

          if (board[row][col] !== 0) {
               board[row][col] = 0;
               attemps--;
          }
     }
     return board;
}

fillBoard(randomBoard);

let puzzleBoard = [...randomBoard];

puzzleBoard = removeCell(puzzleBoard);


export default {
     puzzleBoard,
     randomBoard
}




