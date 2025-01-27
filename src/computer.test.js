import { Computer } from "./computer";
import { Player } from "./player";

let computer = new Computer()
let opponent = new Player()

test('ships should be randomly placed when the object is created', () => {
    expect(computer.placeShipsRandomly()).toBe(false)//it should return false when it is called again
})