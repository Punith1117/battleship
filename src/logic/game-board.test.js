import { GameBoard } from "./game-board";

let board = new GameBoard();

describe("canPlaceShip function", () => {
  test("should return false if any coordinate is invalid", () => {
    expect(board.canPlaceShip(-1, 3, 5, "h")).toBeFalsy();
  });

  test("should return false if ship length is invalid", () => {
    expect(board.canPlaceShip(1, 3, 6, "h")).toBeFalsy();
  });

  test("should return false if the ship is already placed", () => {
    board.placeShip(0, 2, 2, "h");
    expect(board.canPlaceShip(0, 2, 2, "h")).toBeFalsy();
  });

  test("should return false if the ship size is too large to place in the coordinates given", () => {
    expect(board.canPlaceShip(0, 7, 2, "h")).toBeFalsy();
  });

  test("should return false if any cell in which the ship is placed is already occupied", () => {
    expect(board.canPlaceShip(1, 2, 3, "h")).toBeFalsy();
  });

  test("should return false if a ship cannot be placed right next to another ship", () => {
    board.placeShip(0, 0, 1, "h");
    expect(board.canPlaceShip(1, 0, 3, "h")).toBe(false);
  });
});

describe("placeShip function", () => {
  test("should return true if a ship is placed successfully", () => {
    expect(board.placeShip(4, 5, 3, "h")).toBeTruthy();
  });
});

describe("receiveAttack function", () => {
  test("should assign the value of a cell to 0", () => {
    board.receiveAttack(0, 0);
    let cell = board.boardArr[0][0];
    expect(cell.value).toBe(0);
  });

  test("should return false if value of cell is already set to 0", () => {
    expect(board.receiveAttack(0, 0)).toBe(false);
  });

  test("should call hit function on ship if the attacked cell is a ship", () => {
    let cell = board.boardArr[0][2];
    let ship = cell.ship;
    let spy = jest.spyOn(ship, "hit");
    board.receiveAttack(0, 2);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe("isDestroyed function", () => {
  test("should return true if all of the ships have sunk", () => {
    board.placeShip(0, 7, 1, "h");
    board.placeShip(2, 0, 2, "h");
    board.placeShip(4, 0, 3, "h");
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        board.receiveAttack(i, j);
      }
    }
    expect(board.isDestroyed()).toBe(true);
  });
});

let board2 = new GameBoard();

describe("placeShipsRandomly function", () => {
  test("should place each ship randomly on the board", () => {
    board2.placeShipsRandomly();
    let arr = [];
    let shipsArr = board2.ships;
    for (let ship of shipsArr) {
      arr.push(ship.isPlaced);
    }
    expect(arr.every(Boolean)).toBe(true);
  });
});
