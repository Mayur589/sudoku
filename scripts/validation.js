export const isValidBoard = (board) => {
    // Check rows
    for (let i = 0; i < 9; i++) {
        let seen = new Set();
        for (let j = 0; j < 9; j++) {
            let val = board[i][j];
            if (val === 0 || val < 1 || val > 9) return false;
            if (seen.has(val)) return false;
            seen.add(val);
        }
    }

    // Check columns
    for (let j = 0; j < 9; j++) {
        let seen = new Set();
        for (let i = 0; i < 9; i++) {
            let val = board[i][j];
            if (val === 0 || val < 1 || val > 9) return false;
            if (seen.has(val)) return false;
            seen.add(val);
        }
    }

    // Check 3x3 subgrids
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let val = board[boxRow * 3 + i][boxCol * 3 + j];
                    if (val === 0 || val < 1 || val > 9) return false;
                    if (seen.has(val)) return false;
                    seen.add(val);
                }
            }
        }
    }

    return true;
}
