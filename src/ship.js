export class Ship {
    constructor(len) {
        this.len = len
        this.hitCount = 0
    }

    hit() {
        this.hitCount++
    }
}