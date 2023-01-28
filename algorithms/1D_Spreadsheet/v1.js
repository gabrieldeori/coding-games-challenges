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
  if (typeof funcOperation === "Number") {
    return funcOperation;
  }

  const { cell, operation } = funcOperation;
  let { arg1, arg2 } = funcOperation;

  if (operation === "VALUE") {
    valuesSheet[cell] = arg1;
    return { cell, operation, arg1, arg2 };
  } else {
    if (isNaN(arg1)) {
      arg1 = processArguments(operations[arg1])["arg1"];
    }
    if (isNaN(arg2)) {
      arg2 = processArguments(operations[arg2])["arg1"];
    }
    arg1 = Number(arg1);
    arg2 = Number(arg2);
    const result = calculator[operation](arg1, arg2)
    valuesSheet[cell] = result;
    return { cell, operation, arg1: result, arg2 };
  }
}

function iterateOverOperations() {
  const arrayOperations = Object.values(operations);
  arrayOperations.forEach((op, i) => {
    const response = processArguments(op);
    if (typeof response === "Number") {
      console.log(response);
    } else {
      console.log(response["arg1"]);
    }
  });
}

iterateOverOperations();
