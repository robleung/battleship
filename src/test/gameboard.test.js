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
  gameboard.placeShip(gameboard.ships.battleship, [5, 5], "w");
  expect(gameboard.board[5][5].shipIdentifier).toEqual("B4");
  expect(gameboard.board[4][5].shipIdentifier).toEqual("B4");
  expect(gameboard.board[3][5].shipIdentifier).toEqual("B4");
  expect(gameboard.board[2][5].shipIdentifier).toEqual("B4");
  expect(gameboard.board[1][5].shipIdentifier).toEqual(null);
});

test("gameboard tracks missed attacks", () => {
  gameboard.recieveAttack([4, 4]);
  expect(gameboard.board[4][4].attackedStatus).toEqual(true);
  expect(gameboard.board[4][5].attackedStatus).toEqual(false);
});

test("gameboard tracks attack and sends hit to correct ship", () => {
  gameboard.placeShip(gameboard.ships.battleship, [5, 5], "w");
  expect(gameboard.ships.battleship.getHits()).toEqual(0);
  expect(gameboard.ships.destroyer.getHits()).toEqual(0);
  gameboard.recieveAttack([2, 5]);
  expect(gameboard.ships.battleship.getHits()).toEqual(1);
  expect(gameboard.ships.destroyer.getHits()).toEqual(0);
});
test("gameboard reports when all ships are sunk", () => {
  expect(gameboard.areShipsSunk()).toEqual(false);
  gameboard.ships.carrier.hit();
  gameboard.ships.carrier.hit();
  gameboard.ships.carrier.hit();
  gameboard.ships.carrier.hit();
  gameboard.ships.carrier.hit();
  gameboard.ships.battleship.hit();
  gameboard.ships.battleship.hit();
  gameboard.ships.battleship.hit();
  gameboard.ships.battleship.hit();
  gameboard.ships.cruiser.hit();
  gameboard.ships.cruiser.hit();
  gameboard.ships.cruiser.hit();
  gameboard.ships.submarine.hit();
  gameboard.ships.submarine.hit();
  gameboard.ships.submarine.hit();
  expect(gameboard.areShipsSunk()).toEqual(false);
  gameboard.ships.destroyer.hit();
  gameboard.ships.destroyer.hit();
  expect(gameboard.areShipsSunk()).toEqual(true);
});
