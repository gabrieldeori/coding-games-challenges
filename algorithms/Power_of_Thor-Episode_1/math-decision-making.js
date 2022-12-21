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

// Variáveis Iniciais
let thorPosX = initialTx;
let thorPosY = initialTy;

// game loop
while (true) {
  const remainingTurns = parseInt(readline());
  const diffX = calcDiff(lightX, thorPosX)
  const diffY = calcDiff(lightY, thorPosY)
  let newThorPosX = thorPosX;
  let newThorPosY = thorPosY;
  let thorMovement = "";

  if (thorPosX < lightX) {
    newThorPosX += 1;
  } else if (thorPosX > lightX) {
    newThorPosX -= 1;
  }

  if (thorPosY < lightY) {
    newThorPosY += 1;
  } else if (newThorPosY > lightY) {
    newThorPosY -= 1;
  }

  if (diffX > diffY) { // Prioriza a X
    newThorPosX = calcX(lineSlope, newThorPosY, lineConst);
  } else if (diffX < diffY) { // Prioriza y
    newThorPosY = calcX(lineSlope, newThorPosX, lineConst);
  }

  if (newThorPosY < lightY) {
    thorMovement += "S";
  } else if (newThorPosY) {
    thorMovement +="N";
  }

  if (newThorPosX < lightX) {
    thorMovement += "E";
  } else if (newThorPosX > lightX) {
    thorMovement += "W";
  }
  console.log(thorMovement);
}
