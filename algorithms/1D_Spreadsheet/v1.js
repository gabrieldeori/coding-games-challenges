const N = parseInt(readline());
const valuesSheet = {};
const operations = {};
const calculator = {
  ADD: (arg1, arg2) => arg1 + arg2,
  SUB: (arg1, arg2) => arg1 - arg2,
  MULT: (arg1, arg2) => arg1 * arg2,
  DIV: (arg1, arg2) => arg1 / arg2,
}

for (let i = 0; i < N; i++) {
  var inputs = readline().split(' ');
  const operation = inputs[0];
  const arg1 = inputs[1];
  const arg2 = inputs[2];
  const cell = `$${i}`;
  operations[cell] = { cell, operation, arg1, arg2 };
}

function processArguments(funcOperation) {
  const { cell, operation } = funcOperation;
  let { arg1, arg2 } = funcOperation;

  if (valuesSheet.hasOwnProperty(cell)) {
    return { cell, operation, arg1: valuesSheet[cell], arg2: "_" };
  }

  if (operation === "VALUE") {
    while(isNaN(arg1)) {
      arg1 = processArguments(operations[arg1])["arg1"];
    }
    valuesSheet[cell] = arg1;
    return { cell, operation, arg1, arg2 };
  } else {
      while(isNaN(arg1)) {
        arg1 = processArguments(operations[arg1])["arg1"];
      }
      while(isNaN(arg2)) {
        arg2 = processArguments(operations[arg2])["arg1"];
      }
    }
    arg1 = parseInt(arg1);
    arg2 = parseInt(arg2);
    const result = calculator[operation](arg1, arg2)
    valuesSheet[cell] = result;
    return { cell, operation, arg1: result, arg2 };
}

function iterateOverOperations() {
  const arrayOperations = Object.values(operations);
  arrayOperations.forEach((op) => {
    const response = Number(processArguments(op)["arg1"]);
    if (response !== -0) {
      console.log(response);
    } else {
      console.log(0)
    }
  });
}

iterateOverOperations();
