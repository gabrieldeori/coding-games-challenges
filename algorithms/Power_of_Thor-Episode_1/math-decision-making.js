var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]);
const lightY = parseInt(inputs[1]);
const initialTx = parseInt(inputs[2]);
const initialTy = parseInt(inputs[3]);

// Funções matemáticas
// Coeficiente angular da reta | a = (bX - aX)/(bY - aY)
function calcDiff (a, b) {
  return a - b;
}

function calcSlope(aX, aY, bX, bY) {
  return calcDiff(bY, aY) / calcDiff(bX, aX);
}

// c = y - a * x
function calcConstant(a, x, y) {
  return -a * x + y
}

// y = a * x + c
function calcY(a, x, c) {
  return a * x + c
}

// x = (y-c)/a
function calcX(a, y, c) {
  return (y-c)/a;
}

// Constantes Iniciais
const lineSlope = calcSlope(lightX, lightY, initialTx, initialTy);
const lineConst = calcConstant(lineSlope, initialTx, initialTy);

let thorPosX = initialTx;
let thorPosY = initialTy;

// game loop
while (true) {
  const remainingTurns = parseInt(readline());
  let thorMovement = "";

  const dx = calcDiff(lightX, thorPosX)
  const dy = calcDiff(lightY, thorPosY)

  let angle = Math.atan2(dy, dx);

  if (angle < 0) {
    angle += 2 * Math.PI;
  }

  if (angle >= 0 && angle < Math.PI / 4) {
    thorMovement = "E";
    thorPosX += 1;
  } else if (angle >= Math.PI / 4 && angle < Math.PI / 2) {
    thorMovement = "SE";
    thorPosX += 1;
    thorPosY += 1;
  } else if (angle >= Math.PI / 2 && angle < 3 * Math.PI / 4) {
    thorMovement = "S";
    thorPosY += 1;
  } else if (angle >= 3 * Math.PI / 4 && angle < Math.PI) {
    thorMovement = "SW";
    thorPosX -= 1;
    thorPosY += 1;
  } else if (angle >= Math.PI && angle < 5 * Math.PI / 4) {
    thorMovement = "W";
    thorPosX -= 1;
  } else if (angle >= 5 * Math.PI / 4 && angle < 3 * Math.PI / 2) {
    thorMovement = "NW";
    thorPosX -= 1;
    thorPosY -= 1;
  } else if (angle >= 3 * Math.PI / 2 && angle < 7 * Math.PI / 4) {
    thorMovement = "N";
    thorPosY -= 1;
  } else {
    thorMovement = "NE";
    thorPosX += 1;
    thorPosY -= 1;
  }

  console.log(thorMovement);
}
