const N = parseInt(readline());
const valuesSheet = {};
const operations = [];

for (let i = 0; i < N; i++) {
  var inputs = readline().split(' ');
  const operation = inputs[0];
  const arg1 = inputs[1].slice(1);
  const arg2 = inputs[2].slice(1);
  const position = i;
  if (operation === "VALUE") valuesSheet[position] = arg1;
  operations.push({operation, arg1, arg2});
}

function processArguments(funcOperation) {
  let result;

  if (funcOperation['operation'] === "VALUE") {
    return funcOperation['arg1'];
  } else {
    const arg1 = processArguments(operations[funcOperation['arg1']]);
    const arg2 = processArguments(operations[funcOperation['arg2']]);
  }

  return result;
}

console.error(valuesSheet);
console.error(operations);
