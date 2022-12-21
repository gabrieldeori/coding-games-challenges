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

// game loop
while (true) {
  const remainingTurns = parseInt(readline());
  let thorPosX = initialTx;
  let thorPosY = initialTy;
  let thorMovement = "";

  const dx = calcDiff(lightX, thorPosX)
  const dy = calcDiff(lightY, thorPosY)

  let angle = Math.acos(dx / Math.sqrt(dx * dx + dy * dy));

  if (dy < 0) {
    angle = 2 * Math.PI - angle;
  }

  if (angle >= 0 && angle < Math.PI / 4) {
    thorMovement = "E";
  } else if (angle >= Math.PI / 4 && angle < Math.PI / 2) {
    thorMovement = "SE";
  } else if (angle >= Math.PI / 2 && angle < 3 * Math.PI / 4) {
    thorMovement = "S";
  } else if (angle >= 3 * Math.PI / 4 && angle < Math.PI) {
    thorMovement = "SW";
  } else if (angle >= Math.PI && angle < 5 * Math.PI / 4) {
    thorMovement = "W";
  } else if (angle >= 5 * Math.PI / 4 && angle < 3 * Math.PI / 2) {
    thorMovement = "NW";
  } else if (angle >= 3 * Math.PI / 2 && angle < 7 * Math.PI / 4) {
    thorMovement = "N";
  } else {
    thorMovement = "NE";
  }

  console.log(thorMovement);
}
