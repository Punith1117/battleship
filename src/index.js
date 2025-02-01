import './template.html'
import './reset.css'
import './style.css'
import { Player } from './logic/player'
import { Computer } from './logic/computer'
import { displayHumanBoard } from './displayHumanBoard'
import { displayOpponentBoard } from './displayOpponentBoard'

export let getRandomPosition = () => {
    let arr = []
    let row = Math.round(Math.random() * 7)
    let col = Math.round(Math.random() * 7)
    arr.push(row)
    arr.push(col)
    return arr
}

let player = new Player()
player.placeShipsRandomly()
let opponent = new Computer()

displayHumanBoard(player)
displayOpponentBoard(opponent)
let playerTurn = 'player'
let dispPlayerTurn = document.querySelector('.opponent-content > .turn')
dispPlayerTurn.textContent = 'Attack'
let dispOpponentTurn = document.querySelector('.player-content > .turn')
dispOpponentTurn.textContent = ''

export async function handlePlayerClick(row, col) {
    if (playerTurn != 'player') return
    player.attack(row, col, opponent)
    displayOpponentBoard(opponent)
    if (player.hasWon) {
        endGame('human')
        return
    }
    dispOpponentTurn.textContent = 'Attack'
    dispPlayerTurn.textContent = ''
    playerTurn = 'computer'
    await delay(1000)
    opponent.attack(player)
    displayHumanBoard(player)
    playerTurn = 'player'
    if (opponent.hasWon) {
        endGame('computer')
        return
    }
    dispOpponentTurn.textContent = ''
    dispPlayerTurn.textContent = 'Attack'
}

function endGame(winner) {
    removeEventListeners()
    let dialog = document.querySelector('dialog')
    let winnerTitle = dialog.querySelector('.winner-announcement')
    if (winner == 'human') {
        winnerTitle.textContent = 'Hurrah! You have won'
        winnerTitle.classList.add('human-won')
        let title = document.querySelector('.player-title')
        title.classList.add('won')
    } else {
        winnerTitle.textContent = 'You lost to a computer :('
        winnerTitle.classList.add('computer-won')
        let title = document.querySelector('.opponent-title')
        title.classList.add('won')
    } 
    let playAgainButton = dialog.querySelector('button')
    playAgainButton.addEventListener('click', () => {
        location.reload()
    })
    dialog.showModal()
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        event.preventDefault();
    }
});

function removeEventListeners() {
    let opponentDiv = document.querySelector('.opponent-content')
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
            }
            opponentBoardDiv.appendChild(cellDiv)
        }
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}