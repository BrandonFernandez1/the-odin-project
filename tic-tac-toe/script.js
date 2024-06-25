function createPlayer (name, symbol) {
    return {
        name: name,
        symbol: symbol,
        makeMove(board, row, col) {
            if (board[row][col] === '') {
                board[row][col] = this.symbol;
                return true;
            } else return false;
        }
    }
}
const player1 = createPlayer("Player 1", "X");
const player2 = createPlayer("Player 2", "O");

const gridCells = document.querySelectorAll(".board-cells");

gridCells.forEach(cell => {
    cell.addEventListener("click", () => {
        gameSymbols = ['X', 'O'];
    })
})



// let board = [
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', '']
// ]

// player1.makeMove(board, 0, 1);
// player2.makeMove(board, 1, 1);

// console.log(board);

// const cells = document.querySelectorAll(".board-cell");

// cells.forEach(cell => {
//     cell.addEventListener("click", () => {
//         cell.textContent = player.symbol;
//     })
// })