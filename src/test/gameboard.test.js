import Gameboard from "../battleship";
import Ship from "../ship";

let gameboard;
let ship;

beforeEach(() => {
  gameboard = Gameboard();
  ship = Ship(5);
});

test("ships can be placed at specific coordinates", () => {
  gameboard.placeShip(ship, [0, 0], "s");
  expect(board[(0, 0)]).toBe("x");
});
