import { Computer } from "./computer";
import { Player } from "./player";

let computer
let opponent = new Player()

test('ships should be randomly placed when the object is created', () => {
    let spy = jest.spyOn(Computer.prototype, 'placeShipsRandomly')
    computer = new Computer()
    expect(spy).toBeCalled()//it should return false when it is called again
})