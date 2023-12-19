import Gameboard from "../gameboard";

let gameboard;

beforeEach(() => {
  gameboard = Gameboard();
});

test("gameboard is initialized with shipIdentifier and attackedStatus as null", () => {
  expect(gameboard.board[0][0]).toEqual({
    shipIdentifier: null,
    attackedStatus: false,
  });
  expect(gameboard.board[7][7]).toEqual({
    shipIdentifier: null,
    attackedStatus: false,
  });
});

test("ships can be placed at specific coordinates", () => {
  expect(gameboard.shipPositions(5, [0, 0], "n")).toEqual([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ]);
  gameboard.placeShip(gameboard.ships.carrier, [0, 0], "n");
  expect(gameboard.board[(0, 0)].shipIdentifier).toEqual("C5");
});
