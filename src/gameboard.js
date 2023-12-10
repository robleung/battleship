import { shipLookup } from "./shipLookup";

function Gameboard() {
  let board = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board[i][j] = { shipIdentifier: null, attackedStatus: false };
    }
  }
  const placeShip = (ship, origin, direction) => {
    if (isLocationValid(origin, direction, ship.length)) {
      placeMarker(origin, direction, ship.length, ship.marker);
    }
  };
  const recieveAttack = (x, y) => {
    //check if attacked status is false in the board
    // if there is no ship identifier, missed attack
    // if there is an identifier, increase ships hit count
  };
  const isLocationValid = (origin, direction, distance) => {
    //check if location is valid and unoccupied

    switch (direction) {
      case "n":
        for (let i = 0; i < array.length; i++) {
          if (
            origin[0] >= 0 &&
            origin[0] < 10 &&
            origin[1] + i >= 0 &&
            origin[1] + i < 10 &&
            board[origin[0]][origin[1] + i].shipIdentifier === null &&
            board[origin[0]][origin[1] + i].attackedStatus === false
          ) {
            return true;
          }
          return false;
        }
      case "e":
        for (let i = 0; i < array.length; i++) {
          if (
            origin[0] + i >= 0 &&
            origin[0] + i < 10 &&
            origin[1] >= 0 &&
            origin[1] < 10 &&
            board[origin[0] + i][origin[1]].shipIdentifier === null &&
            board[origin[0] + i][origin[1]].attackedStatus === false
          ) {
            return true;
          }
          return false;
        }
      case "s":
        for (let i = 0; i < array.length; i++) {
          if (
            origin[0] >= 0 &&
            origin[0] < 10 &&
            origin[1] - i >= 0 &&
            origin[1] - i < 10 &&
            board[origin[0]][origin[1] - i].shipIdentifier === null &&
            board[origin[0]][origin[1] - i].attackedStatus === false
          ) {
            return true;
          }
          return false;
        }
      case "w":
        for (let i = 0; i < array.length; i++) {
          if (
            origin[0] - i >= 0 &&
            origin[0] - i < 10 &&
            origin[1] >= 0 &&
            origin[1] < 10 &&
            board[origin[0] - i][origin[1]].shipIdentifier === null &&
            board[origin[0] - i][origin[1]].attackedStatus === false
          ) {
            return true;
          }
          return false;
        }
      default:
        return false;
    }
  };

  const placeMarker = (origin, direction, distance, marker) => {
    switch (direction) {
      case "n":
        for (let i = 0; i < distance; i++) {
          board[origin[0]][origin[1] + i] = marker;
        }
        break;
      case "e":
        for (let i = 0; i < distance; i++) {
          board[origin[0] + i][origin[1]] = marker;
        }
        break;
      case "s":
        for (let i = 0; i < distance; i++) {
          board[origin[0]][origin[1] - i] = marker;
        }
        break;
      case "w":
        for (let i = 0; i < distance; i++) {
          board[origin[0] - i][origin[1]] = marker;
        }
        break;
      default:
        break;
    }
  };

  return { board, placeShip, recieveAttack };
}
export default Gameboard;
