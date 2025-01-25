import { Ship } from "./ship";

let s = new Ship(3)

test('class/object exists', () => {
    expect(s).toBeDefined();
})

test('object constructor takes length as single parameter', () => {
    expect(s).toHaveProperty('len', 3)
})

test('has property that counts number of hits taken', () => {
    expect(s).toHaveProperty('hitCount', 0)
})

test('has method to increase hitCount', () => {
    s.hit()
    expect(s).toHaveProperty('hitCount', 1)
})

test('has method to check if the ship has sunk', () => {
    expect(s.isSunk()).toBeFalsy()
})

test('has method to check if the ship is placed', () => {
    expect(s.isPlaced()).toBeFalsy()
})