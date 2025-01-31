import { handlePlayerClick } from "."

export function displayOpponentBoard(opponent) {
    let opponentDiv = document.querySelector('.opponent-content')
    let opponentTitle = opponentDiv.querySelector('.opponent-title')
    opponentTitle.textContent = 'opponent ships'
    let opponentBoardDiv = opponentDiv.querySelector('.opponent-board')
    opponentBoardDiv.innerHTML = ''
    let opponentBoardArr = opponent.board.boardArr
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let cell = opponentBoardArr[i][j]
            let cellDiv = document.createElement('div')
            cellDiv.className = 'cell'
            if (cell.value == 0 && cell.isShip) {
                cellDiv.classList.add('hit')
            } else if (cell.value == 0 && !cell.isShip) {
                cellDiv.classList.add('miss')
            } else {
                cellDiv.addEventListener('click', () => handlePlayerClick(i, j))
            }
            opponentBoardDiv.appendChild(cellDiv)
        }
    }
}