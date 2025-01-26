import { GameBoard } from "./game-board";

export class Player {
    constructor() {
        this.board = new GameBoard()
    }

    placeShipsRandomly() {
        this.board.placeShipsRandomly()
    }

    attack(row, col, opponent) {
        return opponent.receiveAttack(row, col)
    }

    receiveAttack(row, col) {
        return this.board.receiveAttack(row, col)
    }
}