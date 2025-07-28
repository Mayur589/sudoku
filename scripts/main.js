import boards from './createSudoku.js'
import { isValidBoard } from './validation.js';

const rb = boards.randomBoard;
const pb = boards.puzzleBoard;

const board = document.getElementById("board");

const subgrids = [];

for (let i = 0; i < 9; i++) {
     const subgrid = document.createElement('div');
     subgrid.classList.add('subgrid');
     subgrid.classList.add(`subgrid-${i}`);
     subgrids.push(subgrid);
}

pb.forEach((row, rowIndex) => {
     row.forEach((colValue, colIndex) => {

          const input = document.createElement('input');
          input.classList.add('cell');
          input.classList.add(`cell-${rowIndex * 9 + colIndex}`)
          input.type = 'number';
          input.min = 1;
          input.max = 9;

          if (colValue !== 0) {
               input.value = colValue;
               input.disabled = true;
          }

          const subgridIndex = Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3);
          subgrids[subgridIndex].appendChild(input);

     });
});

subgrids.forEach((subgrid) => {
     board.appendChild(subgrid);
});



const submitBtn = document.getElementById("submit");

const handleSubmit = () => {
     if(isValidBoard(pb)){
          window.alert("YOU SOLVED SHUDOKU!!!! 😁")
     }else{
          window.alert("TRY AGAIN 😔.....");
     }

}

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
     cell.addEventListener("change", () => {
          const classes = [...cell.classList];
          const cellNumClass = classes.find(cls => cls.startsWith("cell-"));

          if (cellNumClass) {
               const num = cellNumClass.split("-")[1];
               const col = num % 9;
               const row = (num - col) / 9;
               console.log(cell.value);
               pb[row][col] = cell.value === "" ? 0 : cell.value;
          }
     });
});




submitBtn.addEventListener("click", handleSubmit);





