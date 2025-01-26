import { Player } from "./player";

let player = new Player()
player.placeShipsRandomly()
let opponent = new Player()
opponent.placeShipsRandomly()

describe('attack function', () => {
    test('should attack board of opponent', () => {
        player.attack(0, 0, opponent)
        let opBoard = opponent.board
        let cell = opBoard[0][0]
        expect(cell.value).toBe(0)
    })
})