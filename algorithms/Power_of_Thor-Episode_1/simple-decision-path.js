var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]);
const lightY = parseInt(inputs[1]);
const initialTx = parseInt(inputs[2]);
const initialTy = parseInt(inputs[3]);
let thorPosX = initialTx;
let thorPosY = initialTy;

while (true) {
  const remainingTurns = parseInt(readline());
  let thorMovement = "";

  if (thorPosY > lightY) {
    thorMovement += "N";
    thorPosY -= 1;
  } else if (thorPosY < lightY) {
    thorMovement += "S";
    thorPosY += 1;
  }
  
  if (thorPosX > lightX) {
    thorMovement += "W";
    thorPosX -= 1;
  } else if (thorPosX < lightX) {
    thorMovement += "E"
    thorPosX += 1;
  }

  console.log(thorMovement);
}
