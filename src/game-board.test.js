import { GameBoard } from "./game-board";

let board = new GameBoard()

describe('placeShip function', () => {
    test('to return false if any coordinate is invalid', () => {
        expect(board.placeShip(-1, 3, 5, 'h')).toBeFalsy()
    })

    test('should return false if ship length is invalid', () => {
        expect(board.placeShip(1, 3, 6, 'h')).toBeFalsy()
    })

    test('should return false if the ship is already placed', () => {
        board.placeShip(1, 3, 4, 'h')
        expect(board.placeShip(1, 3, 4, 'h')).toBeFalsy()
    })

    test('should return false if the ship size is too large to place in the coordinates given', () => {
        expect(board.placeShip(0, 7, 2, 'h')).toBeFalsy()
    })

    test('should return true if a ship is placed successfully', () => {
        expect(board.placeShip(0, 5, 2, 'h')).toBeTruthy()
    })

    test('should return false if any cell in which the ship is placed is already occupied', () => {
        expect(board.placeShip(1, 3, 3, 'h')).toBeFalsy()
    })
})

describe('receiveAttack function', () => {
    test('should assign the value of a cell to 0', () => {
        board.receiveAttack(0, 0)
        let cell = board.board[0][0]
        expect(cell.value).toBe(0)
    })

    test('should return false if value of cell is already set to 0', () => {
        expect(board.receiveAttack(0,0)).toBe(false)
    })

    test('should call hit function on ship if the attacked cell is a ship', () => {
        let cell = board.board[0][5]
        let ship = cell.ship
        let spy = jest.spyOn(ship, 'hit')
        board.receiveAttack(0,5)
        expect(spy).toHaveBeenCalledTimes(1)
    })
})

describe('isDestroyed function', () => {
    test('should return true if all of the ships have sunk', () => {
        board.placeShip(2, 0, 1, 'h')
        board.placeShip(3, 0, 3, 'h')
        board.placeShip(4, 0, 5, 'h')
        board.receiveAttack(0,6)

        board.receiveAttack(1,3)
        board.receiveAttack(1,4)
        board.receiveAttack(1,5)
        board.receiveAttack(1,6)

        board.receiveAttack(2,0)
        
        board.receiveAttack(3,0)
        board.receiveAttack(3,1)
        board.receiveAttack(3,2)
        
        board.receiveAttack(4,0)
        board.receiveAttack(4,1)
        board.receiveAttack(4,2)
        board.receiveAttack(4,3)
        board.receiveAttack(4,4)
        expect(board.isDestroyed()).toBe(true)
    })
})

let board2 = new GameBoard()

describe('placeShipsRandomly function', () => {
    test('should place each ship randomly on the board', () => {
        board.placeShipsRandomly()
        let arr = []
        arr.push(board2.ship1.isPlaced)
        arr.push(board2.ship2.isPlaced)
        arr.push(board2.ship3.isPlaced)
        arr.push(board2.ship4.isPlaced)
        arr.push(board2.ship5.isPlaced)
        expect(arr.every(Boolean)).toBe(true)
    })
})