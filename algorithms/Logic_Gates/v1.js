const n = parseInt(readline());
const m = parseInt(readline());
const inputSignals = {};
const signalOperations = [];

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
    signalOperations.push({ outputName, type, inputName1, inputName2 });
}

for (let i = 0; i < m; i++) {
    console.log('${outputName} ${outputSignal}');
}
