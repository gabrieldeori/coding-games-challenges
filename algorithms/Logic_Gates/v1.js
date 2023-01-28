const n = parseInt(readline());
const m = parseInt(readline());
const inputSignals = {};
const signalOperations = [];

function processIndividualBool(type, A, B) {
  const processSignal = {
    AND: (A, B) => A && B,
    OR: (A, B) => A || B,
    XOR: (A, B) => (A || B) && (!A || !B),
    NAND: (A, B) => !(A && B),
    NOR: (A, B) => !(A || B),
    NXOR: (A, B) => !((A || B) && (!A || !B)),
  }
  return processSignal[type](A, B) == true ? "-" : "_";
}

function processIndividualSignals(type, signalA, signalB) {
  let processedSignal = "";
  for (let i = 0; i < signalA.length; i ++) {
    const A = signalA[i];
    const B = signalB[i];
    processedSignal += processIndividualBool(type, A, B);
  }
  return processedSignal;
}

for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const inputName = inputs[0];
    const inputBoolSignal = inputs[1].split('')
      .map(e => e === "-" ? true : false);
    inputSignals[inputName] = inputBoolSignal;
}

for (let i = 0; i < m; i++) {
    var inputs = readline().split(' ');
    const outputName = inputs[0];
    const type = inputs[1];
    const inputName1 = inputs[2];
    const inputName2 = inputs[3];
    const signalA = inputSignals[inputName1];
    const signalB = inputSignals[inputName2];
    const outputSignal = processIndividualSignals(type, signalA, signalB)
    console.log(`${outputName} ${outputSignal}`);
}
