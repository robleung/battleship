import Ship from "../ship";

let carrier;

beforeEach(() => {
  carrier = Ship("carrier");
});

test("ship factories have length, hit count, and sunk status properties", () => {
  expect(carrier.length).toBeDefined();
  expect(carrier.length).toBe(5);
  expect(carrier.getHits()).toBeDefined();
  expect(carrier.isSunk()).toBeDefined();
});

test("ships have a hit property that increases the number of hits on the ship", () => {
  expect(carrier.getHits()).toBe(0);
  carrier.hit();
  carrier.hit();
  expect(carrier.getHits()).toBe(2);
});

test("ships isSunk property returns false until the hit count equals the ships length", () => {
  expect(carrier.isSunk()).toBe(false);
  carrier.hit();
  carrier.hit();
  expect(carrier.isSunk()).toBe(false);
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.isSunk()).toBe(true);
});
