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
        expect(board.placeShip(1, 3, 4, 'h')).toBeFalsy()
    })
})