const n = parseInt(readline());
const m = parseInt(readline());
const inputSignals = {};
const outputSignals = [];
const processSignals = {
    AND: (A, B) => A && B,
    OR: (A, B) => A || B,
    XOR: (A, B) => (A || B) && (!A || !B),
    NAND: (A, B) => !(A && B),
    NOR: (A, B) => !(A || B),
    NXOR: (A, B) => !((A || B) && (!A || !B)),
}
const processedSignals = [];

for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const inputName = inputs[0];
    const inputSignal = inputs[1];
    const inputSignalTreat = [];
    for (let j = 0; j < inputSignal.length; j++) {
        if (inputSignal[j] == "_") {
            inputSignalTreat.push(false)
        } else if (inputSignal[j] == "-") {
            inputSignalTreat.push(true);
        } else {
            console.log("ERROR, valor inválido");
        }
    }
    inputSignals[inputName] = inputSignalTreat;
}

for (let i = 0; i < m; i++) {
    var inputs = readline().split(' ');
    const outputName = inputs[0];
    const type = inputs[1];
    const inputName1 = inputs[2];
    const inputName2 = inputs[3];
    outputSignals.push({
        outputName,
        type,
        inputName1,
        inputName2,
    });
}

for (let i = 0; i < m; i++) {
    const toProcess = outputSignals[i];
    const A = inputSignals[toProcess["inputName1"]];
    const B = inputSignals[toProcess["inputName2"]];
    for (let j = 0; j < inputSignals.length; j++) {
        const processed = processSignals[toProcess[type](A[j], B[J])]
        processedSignals.push(processed)
        console.error(processed)
    }
}

console.error(processedSignals);

for (let i = 0; i < m; i++) {
    
}
