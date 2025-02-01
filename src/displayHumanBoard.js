export function displayHumanBoard(player) {
    let playerDiv = document.querySelector('.player-content')
    let playerTitle = playerDiv.querySelector('.player-title')
    playerTitle.textContent = 'Friendly Waters'
    let playerBoardDiv = playerDiv.querySelector('.player-board')
    playerBoardDiv.innerHTML = ''
    let playerBoardArr = player.board.boardArr
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let cell = playerBoardArr[i][j]
            let cellDiv = document.createElement('div')
            cellDiv.className = 'cell'
            if (cell.value == null && cell.isShip) {
                cellDiv.classList.add('ship')
            } else if (cell.value == 0 && cell.isShip) {
                cellDiv.classList.add('hit')
            } else if (cell.value == 0 && !cell.isShip) {
                cellDiv.classList.add('miss')
            }
            playerBoardDiv.appendChild(cellDiv)
        }
    }
}