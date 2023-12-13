import { shipLookup } from "./shipLookup";

function Gameboard() {
  let board = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board[i][j] = { shipIdentifier: null, attackedStatus: false };
    }
  }
  const placeShip = (ship, origin, direction) => {
    let positions = shipPositions(ship.length, origin, direction);
    if (isLocationValid(positions) && isLocationAvailable(positions)) {
      placeMarker(ship.marker, positions);
    }
  };
  const recieveAttack = (coordinates) => {
    if (isLocationValid(coordinates) && isLocationNew(coordinates)) {
    }
  };
  const shipPositions = (distance, origin, direction) => {
    let pos = [];
    switch (direction) {
      case "n":
        for (let i = 0; i < distance; i++) {
          positions.push([origin[0]][origin[1] + i]);
        }
        break;
      case "e":
        for (let i = 0; i < distance; i++) {
          positions.push([origin[0] + i][origin[1]]);
        }
        break;
      case "s":
        for (let i = 0; i < distance; i++) {
          positions.push([origin[0]][origin[1] - i]);
        }
        break;
      case "w":
        for (let i = 0; i < distance; i++) {
          positions.push([origin[0] - i][origin[1]]);
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

  return { board, placeShip, recieveAttack };
}
export default Gameboard;
