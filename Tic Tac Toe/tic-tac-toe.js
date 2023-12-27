document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const statusText = document.getElementById('status');
    const resetButton = document.getElementById('reset-button')

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let options = ["", "", "", "", "", "", "", "", "",];
    let currentPlayer = 'X';
    let running = false;

    function initializeGame () {
        boxes.forEach(box => box.addEventListener('click', boxClicked));
        resetButton.addEventListener('click', restartGame);
        statusText.textContent = `${currentPlayer}'s turn`;
        running = true;
    }

    function boxClicked () {
        const boxIndex = this.getAttribute("data-index");

        if (options[boxIndex] != '' || !running) {
            return;
        }
        updateBox(this, boxIndex);
        checkWinner();
    }

    function updateBox (box, index) {
        options[index] = currentPlayer;
        box.textContent = currentPlayer;
    }
    
    function changePlayer () {
        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
        statusText.textContent = `${currentPlayer}'s turn`;
    }

    function checkWinner () {
        let roundWon = false;

        for (let i = 0; i < winConditions.length; i++) {
            const condition = winConditions[i];
            const boxA = options[condition[0]];
            const boxB = options[condition[1]];
            const boxC = options[condition[2]];

            if (boxA == '' || boxB == '' || boxC == '') {
                continue;
            }

            if (boxA == boxB && boxB == boxC) {
                roundWon = true;
                break;
            }
        }
        if (roundWon === true) {
            statusText.textContent = `${currentPlayer} wins!`
            running = false;
        } else if (!options.includes('')) {
            statusText.textContent = `It's a tie`
        } else {
            changePlayer();
        }
    }

    function restartGame () {
        currentPlayer = 'X';
        options = ["", "", "", "", "", "", "", "", "",];
        statusText.textContent = `${currentPlayer}'s turn`;
        boxes.forEach(box => box.textContent = '');
        running = true;
    }

    initializeGame();
});