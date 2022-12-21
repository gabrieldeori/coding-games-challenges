var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]);
const lightY = parseInt(inputs[1]);
const initialTx = parseInt(inputs[2]);
const initialTy = parseInt(inputs[3]);
let thorPosX = initialTx;
let thorPosY = initialTy;

function calcDiff (a, b) {
  return a - b;
}

while (true) {
  const remainingTurns = parseInt(readline());
  let thorMovement = "";

  const dx = calcDiff(lightX, thorPosX)
  const dy = calcDiff(lightY, thorPosY)

  let optAngle = Math.atan2(dy, dx);

  if (optAngle < 0) {
    optAngle += 2 * Math.PI;
  }

  if (optAngle >= 0 && optAngle < Math.PI / 4) {
    thorMovement = "E";
    thorPosX += 1;
  } else if (optAngle >= Math.PI / 4 && optAngle < Math.PI / 2) {
    thorMovement = "SE";
    thorPosX += 1;
    thorPosY += 1;
  } else if (optAngle >= Math.PI / 2 && optAngle < 3 * Math.PI / 4) {
    thorMovement = "S";
    thorPosY += 1;
  } else if (optAngle >= 3 * Math.PI / 4 && optAngle < Math.PI) {
    thorMovement = "SW";
    thorPosX -= 1;
    thorPosY += 1;
  } else if (optAngle >= Math.PI && optAngle < 5 * Math.PI / 4) {
    thorMovement = "W";
    thorPosX -= 1;
  } else if (optAngle >= 5 * Math.PI / 4 && optAngle < 3 * Math.PI / 2) {
    thorMovement = "NW";
    thorPosX -= 1;
    thorPosY -= 1;
  } else if (optAngle >= 3 * Math.PI / 2 && optAngle < 7 * Math.PI / 4) {
    thorMovement = "N";
    thorPosY -= 1;
  } else {
    thorMovement = "NE";
    thorPosX += 1;
    thorPosY -= 1;
  }

  console.log(thorMovement);
}
