import { getRandomPosition } from ".";
import { Player } from "./player";

let player = new Player()
player.placeShipsRandomly()
let opponent = new Player()
opponent.placeShipsRandomly()

describe('attack function', () => {
    test('should attack board of opponent', () => {
        player.attack(0, 0, opponent)
        let opBoard = opponent.board
        let cell = opBoard.board[0][0]
        expect(cell.value).toBe(0)
    })

    test('sets hasWon to be true if all ships of opponent are destroyed', () => {
        while(player.hasWon == true) {
            let position = getRandomPosition()
            player.attack(position[0], position[1], opponent)
        }
        let opBoard = opponent.board
        expect(opBoard.isDestroyed()).toBe(true)
    })
})