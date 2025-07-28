// Print the Sudoku board in grid format
export const printBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            console.log("------- ------- -------");
        }

        let row = "";
        for (let j = 0; j < board[i].length; j++) {
            if (j % 3 === 0 && j !== 0) {
                row += " | ";
            }

            row += board[i][j] + " ";
        }
        console.log(row.trim());
    }
}

// Find the first empty cell (0) in the board
export const getZero = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                return [i, j];  // Return [row, column]
            }
        }
    }
    return null;
}

// Check if a number can be placed at a given coordinate
export const isValid = (board, num, pos) => {
    const [y, x] = pos;

    // Check row
    for (let i = 0; i < 9; i++) {
        if (board[y][i] === num && i !== x) {
            return false;
        }
    }

    // Check column
    for (let i = 0; i < 9; i++) {
        if (board[i][x] === num && i !== y) {
            return false;
        }
    }

    // Check 3x3 box
    const boxStartRow = y - (y % 3);
    const boxStartCol = x - (x % 3);

    for (let i = boxStartRow; i < boxStartRow + 3; i++) {
        for (let j = boxStartCol; j < boxStartCol + 3; j++) {
            if (board[i][j] === num && (i !== y || j !== x)) {
                return false;
            }
        }
    }

    return true;
}

// Solve the board using backtracking
export const solve = (board) => {
    const find = getZero(board);

    if (!find) {
        return true; // Board is complete
    }

    const [row, col] = find;

    for (let i = 1; i <= 9; i++) {
        if (isValid(board, i, [row, col])) {
            board[row][col] = i;

            if (solve(board)) {
                return true;
            }

            board[row][col] = 0; // Backtrack
        }
    }

    return false; // Trigger backtracking
}


