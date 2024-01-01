import Gameboard from "./gameboard";

function Player() {
  let opponentBoard = Gameboard();
  const attack = (coordinates) => {
    opponentBoard.recieveAttack(coordinates);
  };
  return { opponentBoard, attack };
}

function Computer() {
  let player = Player();
  let { opponentBoard } = player;
  const { attack } = player;
  let attackArray = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      attackArray.push([i, j]);
    }
  }
  const cpuAttack = () => {
    let attackCoordinates = attackArray.splice(
      Math.floor(Math.random() * attackArray.length),
      1
    );
    attack(attackCoordinates);
  };

  return { opponentBoard, cpuAttack };
}

export { Player, Computer };
