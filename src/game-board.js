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
        let ship;

        if (x > 7 || y > 7 || x < 0 || y < 0) return false

        switch(shipLen) {
            case 1:
                ship = this.ship1
                break
            case 2:
                ship = this.ship2
                break
            case 3:
                ship = this.ship3
                break
            case 4:
                ship = this.ship4
                break
            case 5:
                ship = this.ship5
                break
            default: return false
        }
    }
}