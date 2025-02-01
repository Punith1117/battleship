export class Ship {
  constructor(len) {
    this.len = len;
    this.hitCount = 0;
    this.isPlaced = false;
    this.startPosition;
    this.direction;
  }

  hit() {
    this.hitCount++;
  }

  isSunk() {
    return this.len - this.hitCount == 0 ? true : false;
  }

  getStartPosition() {
    return this.startPosition;
  }

  setStartPosition(arr) {
    this.startPosition = arr;
  }

  getDirection() {
    return this.direction;
  }

  setDirection(dir) {
    this.direction = dir;
  }
}
