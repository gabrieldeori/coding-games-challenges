const N = parseInt(readline());
const valuesSheet = {};
const operations = [];
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
  operations.push({cell: `$${i}`, operation, arg1, arg2});
}

console.log(valuesSheet, operations);

function processArguments(funcOperation) {
  if (typeof funcOperation === "Number") {
    return funcOperation;
  }

  const cell = funcOperation["cell"];

  if (funcOperation['operation'] === "VALUE") {
    const arg1 = funcOperation['arg1']
    valuesSheet[cell] = arg1;
    return { cell, result: arg1 };
  } else {
    const arg1 = processArguments(operations[funcOperation['arg1']]);
    const arg2 = processArguments(operations[funcOperation['arg2']]);
    return { cell, result: calculator(arg1, arg2) };
  }
}

const startOperation = operations[0];
console.log(processArguments(startOperation));
