import { getRandomPosition } from ".";
import { Player } from "./player";

export class Computer extends Player{
    constructor() {
        super()
        this.placeShipsRandomly()
    }

    attack(opponent) {
        let positionArr;
        while(true) {
            positionArr = getRandomPosition()
            if (opponent.receiveAttack(positionArr[0], positionArr[1])) {
                if (opponent.board.isDestroyed()) this.hasWon = true
                return true
            }
        }
    }
}