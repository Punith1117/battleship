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
        let cell = opBoard.boardArr[0][0]
        expect(cell.value).toBe(0)
    })

    test('sets hasWon to be true if all ships of opponent are destroyed', () => {
        for (let i = 0; i < 8; i++)
            for (let j = 0; j < 8; j++) {
                player.attack(i, j, opponent)
                if (player.hasWon == true) {
                    i = 8
                    j = 8
                }
            }
        let opBoard = opponent.board
        expect(opBoard.isDestroyed()).toBe(true)
    })
})

let player2 = new Player()
let player2Board = player2.board
test('should return true if attack is successful', () => {
    player2Board.placeShip(0, 0, 1, 'h')
    player2.receiveAttack(0, 0)
    expect(player2.isHit(0, 0)).toBe(true)
})