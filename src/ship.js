export class Ship {
    constructor(len) {
        this.len = len
        this.hitCount = 0
        this.isPlaced = false
    }

    hit() {
        this.hitCount++
    }

    isSunk() {
        return (this.len - this.hitCount == 0)? true : false
    }
}