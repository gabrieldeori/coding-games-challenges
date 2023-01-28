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
  
  console.error(operation, arg1, arg2);
  const position = "$" + i;
  if (operation === "VALUE") valuesSheet[position] = arg1;
  operations.push({operation, arg1, arg2});
}

function processArguments(funcOperation) {
  
  if (funcOperation['operation'] === "VALUE") {
    
    const result = funcOperation['arg1'];
    console.log(result);
    return result;
  } else {
    
    const arg1 = processArguments(operations[funcOperation['arg1']]);
    const arg2 = processArguments(operations[funcOperation['arg2']]);
    const result = calculator(arg1, arg2);
    console.log(result);
    return result;
  }
}

const startOperation = operations[0];
console.log(processArguments(startOperation));
