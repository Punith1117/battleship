import { Ship } from "./ship";

let s = new Ship()

test('class/object exists', () => {
    expect(s).toBeDefined();
})

test('object constructor takes length as single parameter', () => {
    s = new Ship(3)
    expect(s).toHaveProperty('len', 3)
})