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

for (let i = 0; i < operations.length; i++) {
  const actualOperation = operations[i]
  if (actualOperation['operation'] === "VALUE") {
    console.log(actualOperation['arg1']);
  } else {
    
  }
}

console.error(valuesSheet);
console.error(operations);
