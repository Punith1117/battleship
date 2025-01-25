import { Cell } from "./cell";
import { Ship } from "./ship";

export class GameBoard {
    constructor() {
        this.board = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => new Cell()));
        this.ship5 = new Ship(5)
        this.ship4 = new Ship(4)
        this.ship3 = new Ship(3)
        this.ship2 = new Ship(2)
        this.ship1 = new Ship(1)
    }

    placeShip(x, y, shipLen, direction) {
        if (x > 7 || y > 7 || x < 0 || y < 0) return false
        if (shipLen < 1 || shipLen > 5) return false
    }
}