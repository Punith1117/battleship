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
})