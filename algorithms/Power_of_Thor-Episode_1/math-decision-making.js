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
let thorPos = [initialTx, initialTy];
let thorMovement = "";

// game loop
while (true) {
  const remainingTurns = parseInt(readline());
  console.log();
}
