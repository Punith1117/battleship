import { getRandomPosition } from ".";
import { Cell } from "./cell";
import { Ship } from "./ship";

export class GameBoard {
    constructor() {
        this.boardArr = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => new Cell()));
        this.ships = [] //stores all the ships to be placed
        this.ships.push(new Ship(1))
        this.ships.push(new Ship(2))
        this.ships.push(new Ship(3))
        this.ships.push(new Ship(4))
        this.ships.push(new Ship(5))
    }

    placeShip(x, y, shipLen, direction) {
        let ship;

        if (!this.canPlaceShip(x, y, shipLen, direction)) return false

        for (let shipIterator of this.ships) {
            if (shipLen == shipIterator.len) {
                ship = shipIterator
            }
        }

        if (ship == undefined) return false

        if (direction == 'h') {
            for (let i = 0; i < ship.len; i++) {
                let cell = this.boardArr[x][y + i];
                cell.isShip = true
                cell.ship = ship
            }
        } else {// for placing ship in vertical direction
            for (let i = 0; i < ship.len; i++) {
                let cell = this.boardArr[x + i][y];
                cell.isShip = true
                cell.ship = ship
            }
        }
        ship.isPlaced = true
        return true
    }

    receiveAttack(row, col) {
        let cell = this.boardArr[row][col]
        if (cell.value == 0) return false
        cell.value = 0
        let ship
        if (cell.isShip) {
           ship = cell.ship 
           ship.hit()
        }
        return true// indicates the attack is received successfully
    }

    isDestroyed() {
        for (let ship of this.ships) {
            if (!ship.isSunk()) return false
        }
        return true
    }

    placeShipsRandomly() {
        if (this.ships[0].isPlaced) return false
        let shipPlaced = false
        for (let i = 1; i < 6; i++, shipPlaced = false) {
            while(shipPlaced == false) {
                let arr = getRandomPosition()
                let randomDirection = this.getRandomDirection()
                if (this.canPlaceShip(arr[0], arr[1], i, randomDirection)) {
                    this.placeShip(arr[0], arr[1], i, randomDirection)
                    shipPlaced = true
                }
            }
        }
        return true
    }

    canPlaceShip(x, y, shipLen, direction) {
        if (x > 7 || y > 7 || x < 0 || y < 0) return false
        let ship
        for (let shipIterator of this.ships) {
            if (shipLen == shipIterator.len) {
                ship = shipIterator
            }
        }

        if (ship == undefined) return false

        if (ship.isPlaced == true) return false

        if (direction == 'h') {
            if ((y + ship.len - 1) > 7) return false
        } else if ((x + ship.len - 1) > 7) return false
        
        let rowOffset = x - 1
        let colOffset = y - 1

        if (direction == 'h') {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j <= ship.len + 1; j++) {
                    if (((rowOffset + i) < 0) || ((colOffset + j) < 0) || ((rowOffset + i) > 7) || ((colOffset + j) > 7)) {
                        continue
                    }
                    let cell = this.boardArr[rowOffset + i][colOffset + j]
                    if (cell.isShip == true) return false
                }
            }
        } else {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j <= ship.len + 1; j++) {
                    if (((rowOffset + j) < 0) || ((colOffset + i) < 0) || ((rowOffset + j) > 7) || ((colOffset + i) > 7)) {
                        continue
                    }             
                    let cell = this.boardArr[rowOffset + j][colOffset + i]
                    if (cell.isShip == true) return false
                }
            }
        }

        return true
    }

    getRandomDirection() {
        let direction = ['h', 'v']
        let i = Math.round(Math.random())
        return direction[i]
    }
}