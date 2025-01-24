import { Ship } from "./ship";

let s = new Ship()

test('class/object exists', () => {
    expect(s).toBeDefined();
})

test('object constructor takes length as single parameter', () => {
    s = new Ship(3)
    expect(s).toHaveProperty('len', 3)
})

test('has property that counts number of hits taken', () => {
    s = new Ship(3)
    expect(s).toHaveProperty('hitCount', 0)
})

test('has method to increase hitCount', () => {
    s = new Ship(3)
    s.hit()
    expect(s).toHaveProperty('hitCount', 1)
})