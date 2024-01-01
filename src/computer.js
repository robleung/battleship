import Player from "./player";

function Computer() {
  const { opponentBoard, attack } = Player();
  return { opponentBoard, attack };
}
export default Computer;
