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

        if (ship.isPlaced == true) return false

        if (direction == 'h') {
            if ((y + ship.len - 1) > 7) return false
        } else if ((x + ship.len - 1) > 7) return false
        
        if (direction == 'h') {
            for (let i = 0; i < ship.len; i++) {
                let cell = this.board[x][y + i]
                if (cell.isShip == true) return false
            }
        } else {
            for (let i = 0; i < ship.len; i++) {
                let cell = this.board[x + i][y]
                if (cell.isShip == true) return false
            }
        }

        if (direction == 'h') {
            for (let i = 0; i < ship.len; i++) {
                let cell = this.board[x][y + i];
                cell.isShip = true
                cell.ship = ship
            }
        } else {// for placing ship in vertical direction
            for (let i = 0; i < ship.len; i++) {
                let cell = this.board[x + i][y];
                cell.isShip = true
                cell.ship = ship
            }
        }
        ship.isPlaced = true
        return true
    }

    receiveAttack(row, col) {
        let cell = this.board[row][col]
        if (cell.value == 0) return false
        cell.value = 0
    }
}