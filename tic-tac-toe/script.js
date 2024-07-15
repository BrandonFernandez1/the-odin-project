const createPlayer = (name, symbol) => {
    return {name, symbol};
}

const gameBoard = function() {
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    const getBoard = () => board;

    const setCell = (row, col, value) => {
        if (board[row][col] === '') {
            board[row][col] = value;
            return true;
        } else return false;
    }

    const resetBoard = () => {
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                board[row][col] = '';
            }
        }
    }

    return {getBoard, setCell, resetBoard};
}();

const displayController = (function() {
    const boardCells = document.querySelectorAll(".board-cell");
    const restartButton = document.querySelector("#restart");
    let currentPlayer;
    let players = [];

    const initialize = () => {
        players.push(createPlayer("Player 1", "X"));
        players.push(createPlayer("Player 2", "O"));
        currentPlayer = players[0];
        addEventListeners();
        updateBoard();
    }

    const updateBoard = () => {
        const board = gameBoard.getBoard();

        boardCells.forEach((cell, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            cell.textContent = board[row][col];
        })
    }

    const switchPlayer = () => {
        if (currentPlayer === players[0]) {
            currentPlayer = players[1];
        } else {
            currentPlayer = players[0];
        }
    }

    const addEventListeners = () => {
        boardCells.forEach((cell, index) => {
            cell.addEventListener("click", () => {
                handleCellClick(index);
                console.log(gameBoard.getBoard());
            });
        })
        restartButton.addEventListener("click", () => resetGame());
    }

    const handleCellClick = (index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;

        if (gameBoard.setCell(row, col, currentPlayer.symbol)) {
            updateBoard();
            if (checkWinner(currentPlayer)) {
                winnerAlert();
            }
            switchPlayer();
        }
    }

    const resetGame = () => {
        gameBoard.resetBoard();
        updateBoard();
        currentPlayer = players[0];
    }

    const checkWinner = (currentPlayer) => {
        const board = gameBoard.getBoard();
        const symbol = currentPlayer.symbol;

        for (let i = 0; i < 3; i++) {
            //Horizontal check (row value stays consistent for check)
            if (board[i][0] === symbol && board[i][0] === symbol && board[i][2] === symbol) {
                return true;
            }

            //Vertical check (col value stays consistent)
            if (board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol) {
                return true;
            }
        }

        //Diagonal check
        if (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol){
            return true;
        }
        if (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol) {
            return true;
        }
        return false;
    }

    const winnerAlert = () => {
        const popup = document.querySelector("dialog");
        const winnerName = document.querySelector("#winner-name");
        const winnerSymbol = document.querySelector("#winner-symbol");

        winnerName.textContent = currentPlayer.name;
        winnerSymbol.textContent = currentPlayer.symbol;

        popup.showModal();
    }

    return {initialize};
})();

document.addEventListener("DOMContentLoaded", () => {
    displayController.initialize();
})