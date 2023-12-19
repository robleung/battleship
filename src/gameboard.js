import { shipLookup, getKeyByValue } from "./shipLookup";

import Ship from "./ship";

function Gameboard() {
  let board = [];
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
      row.push({
        shipIdentifier: null,
        attackedStatus: false,
      });
    }
    board.push(row);
  }
  let ships = {
    carrier: Ship("carrier"),
    battleship: Ship("battleship"),
    cruiser: Ship("cruiser"),
    submarine: Ship("submarine"),
    destroyer: Ship("destroyer"),
  };

  const placeShip = (ship, origin, direction) => {
    let positions = shipPositions(ship.length, origin, direction);
    if (isLocationValid(positions) && isLocationAvailable(positions)) {
      placeMarker(ship.marker, positions);
    }
  };
  const recieveAttack = (coordinates) => {
    if (isLocationValid(coordinates) && isLocationNew(coordinates)) {
      processAttack(coordinates);
    }
  };
  const areShipsSunk = () => {
    for (const [key, value] of Object.entries(ships)) {
      if (isShipSunk(key)) {
        return true;
      }
    }
    return false;
  };

  const shipPositions = (distance, origin, direction) => {
    let pos = [];
    switch (direction) {
      case "n":
        for (let i = 0; i < distance; i++) {
          pos.push([origin[0], origin[1] + i]);
        }
        break;
      case "e":
        for (let i = 0; i < distance; i++) {
          pos.push([origin[0] + i, origin[1]]);
        }
        break;
      case "s":
        for (let i = 0; i < distance; i++) {
          pos.push([origin[0], origin[1] - i]);
        }
        break;
      case "w":
        for (let i = 0; i < distance; i++) {
          pos.push([origin[0] - i, origin[1]]);
        }
        break;
      default:
        break;
    }
    return pos;
  };

  const isLocationValid = (...pos) => {
    //check if location is valid
    for (let i = 0; i < pos.length; i++) {
      if (pos[0] < 0 || pos[0] > 10 || pos[1] < 0 || pos[1] > 10) {
        return false;
      }
    }
    return true;
  };
  const isLocationAvailable = (...pos) => {
    //check if location is available
    for (let i = 0; i < pos.length; i++) {
      if (board[pos[i][0]][pos[i][1]].shipIdentifier !== null) {
        return false;
      }
    }
    return true;
  };

  const placeMarker = (marker, ...pos) => {
    for (let i = 0; i < pos.length; i++) {
      board[pos[i][0]][pos[i][1]].shipIdentifier = marker;
    }
  };

  const isLocationNew = (...pos) => {
    //check if location has not be attacked yet
    for (let i = 0; i < pos.length; i++) {
      if (board[pos[i][0]][pos[i][1]].attackedStatus !== false) {
        return false;
      }
    }
    return true;
  };
  const processAttack = (coordinates) => {
    board[coordinates[0]][coordinates[1]].attackedStatus = true;
    if (board[coordinates[0]][coordinates[1]].shipIdentifier !== null) {
      let shipName = getKeyByValue(
        shipLookup,
        board[coordinates[0]][coordinates[1]].shipIdentifier
      );
      ships[shipName].hit();
    }
  };

  const isShipSunk = (name) => {
    return ships[name].isSunk();
  };

  return {
    board,
    ships,
    shipPositions,
    placeShip,
    recieveAttack,
    areShipsSunk,
  };
}
export default Gameboard;
