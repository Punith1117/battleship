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

export function handlePlayerClick(row, col) {
    console.log('clicked on ' + row + ' ' + col)
    player.attack(row, col, opponent)
    displayOpponentBoard(opponent)
    if (player.hasWon) {
        endGame('player')
        return
    }
    opponent.attack(player)
    displayHumanBoard(player)
    if (opponent.hasWon) {
        endGame('computer')
        return
    }
}

function endGame(winner) {
    console.log(winner + ' has won')
    removeEventListeners()
}

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

/*
let body = document.querySelector('body')
    let board = document.createElement('div')
    board.classList.add('opponent-board')
    body.appendChild(board)

    let playerBoard = document.createElement('div')
    playerBoard.classList.add('player-board')
    body.appendChild(playerBoard)

function displayOpponentBoard() {
    let body = document.querySelector('body')
        let board = document.querySelector('.opponent-board')
        board.innerHTML = ''
        let boardArray = computer.board.boardArr
        for (let row in boardArray) {
            for (let col in boardArray) {
                let cell = boardArray[row][col]
                let dispCell = document.createElement('div')
                dispCell.classList.add('cell')
                dispCell.setAttribute('data-row', row)
                dispCell.setAttribute('data-col', col)
                if (cell.value == null) {
                    dispCell.classList.add('no-value')
                    dispCell.addEventListener('click', () => {
                        console.log('clicked on ' + dispCell.getAttribute('data-row') + " " +  dispCell.getAttribute('data-col'))
                        player.attack(row, col, computer)
                        displayOpponentBoard()
                        if (player.hasWon) {
                            console.log('hurrah! You have won')
                            return
                        }
                        computer.attack(player)
                        if (computer.hasWon) {
                            console.log(':( Computer has won')
                            return
                        }
                        displayPlayerBoard()
                        return
                    })
                } else if (cell.value == 0 && cell.isShip) {
                    dispCell.classList.add('hit')
                } else {
                    dispCell.classList.add('miss')
                }
                board.appendChild(dispCell)
            }
        }
        body.appendChild(board)
}

displayPlayerBoard()
displayOpponentBoard()

function displayPlayerBoard() {
    let board = document.querySelector('.player-board')
    board.innerHTML = ''
    let boardArray = player.board.boardArr
    for (let row in boardArray) {
        for (let col in boardArray) {
            let cell = boardArray[row][col]

            let dispCell = document.createElement('div')
            dispCell.classList.add('cell')
            if (cell.isShip && cell.value == null) {
                dispCell.classList.add('ship')
            } else if (cell.value == 0 && cell.isShip) {
                dispCell.classList.add('hit')
            } else if (cell.value == 0){
                dispCell.classList.add('miss')
            }
            board.appendChild(dispCell)
        }
    }
}
*/