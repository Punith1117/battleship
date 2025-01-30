export class Ship {
    constructor(len) {
        this.len = len
        this.hitCount = 0
        this.isPlaced = false
        this.startPosition
    }

    hit() {
        this.hitCount++
    }

    isSunk() {
        return (this.len - this.hitCount == 0)? true : false
    }

    getStarPosition() {
        return this.startPosition
    }

    setStartPosition(arr) {
        this.startPosition = arr
    }
}