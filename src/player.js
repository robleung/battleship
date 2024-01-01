import Gameboard from "./gameboard";

function Player() {
  let opponentBoard = Gameboard();
  const attack = (coordinates) => {
    opponentBoard.recieveAttack(coordinates);
  };
  return { opponentBoard, attack };
}

export default Player;
