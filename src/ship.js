import { shipLookup } from "./shipLookup";

function Ship(name) {
  const marker = shipLookup[name];
  const length = Number(marker.slice(-1));
  let hitCount = 0;
  const getHits = () => {
    return hitCount;
  };
  const hit = () => {
    hitCount++;
  };

  const isSunk = () => {
    return hitCount == length ? true : false;
  };

  return { length, getHits, hit, isSunk, marker };
}

export default Ship;
