import { GameBoard } from "./game-board";

export class Player {
  constructor() {
    this.board = new GameBoard();
    this.hasWon = false;
  }

  placeShipsRandomly() {
    this.board.placeShipsRandomly();
  }

  attack(row, col, opponent) {
    opponent.receiveAttack(row, col);
    if (opponent.board.isDestroyed()) this.hasWon = true;
  }

  receiveAttack(row, col) {
    return this.board.receiveAttack(row, col);
  }

  isHit(row, col) {
    if (this.board.isHit(row, col)) return true;
    return false;
  }
}
