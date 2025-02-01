import { getRandomPosition } from "..";
import { Player } from "./player";
import { Queue } from "./queue";

export class Computer extends Player {
  constructor() {
    super();
    this.placeShipsRandomly();
    this.priorityAttacks = new Queue();
  }

  attack(opponent) {
    let positionArr;
    while (true) {
      if (this.priorityAttacks.isEmpty()) {
        positionArr = getRandomPosition();
      } else {
        positionArr = this.priorityAttacks.dequeue();
      }
      if (opponent.receiveAttack(positionArr[0], positionArr[1])) {
        if (opponent.isHit(positionArr[0], positionArr[1])) {
          let row = positionArr[0];
          let col = positionArr[1];
          this.priorityAttacks.enqueue([row + 1, col]);
          this.priorityAttacks.enqueue([row, col + 1]);
          this.priorityAttacks.enqueue([row - 1, col]);
          this.priorityAttacks.enqueue([row, col - 1]);
        }
        if (opponent.board.isDestroyed()) this.hasWon = true;
        return true;
      }
    }
  }
}
