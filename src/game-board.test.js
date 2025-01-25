import { GameBoard } from "./game-board";

let board = new GameBoard()

describe('placeShip function', () => {
    test('to return false if any coordinate is invalid', () => {
        expect(board.placeShip(-1, 3, 5, 'h')).toBeFalsy()
    })
})