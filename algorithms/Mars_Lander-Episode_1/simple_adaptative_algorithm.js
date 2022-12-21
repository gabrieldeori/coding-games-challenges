const surfaceN = parseInt(readline());
for (let i = 0; i < surfaceN; i++) {
    var inputs = readline().split(' ');
    const landX = parseInt(inputs[0]);
    const landY = parseInt(inputs[1]);
}
let outputPower = 0;

while (true) {
    var inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);
    const hSpeed = parseInt(inputs[2]);
    const vSpeed = parseInt(inputs[3]);
    const fuel = parseInt(inputs[4]);
    const rotate = parseInt(inputs[5]);
    const power = parseInt(inputs[6]);

    const maxLandSpeed = -39;
    const minLandSpeed = -38;
    if (vSpeed < maxLandSpeed && outputPower < 4) {
        outputPower += 1;
    } else if (vSpeed > minLandSpeed && outputPower > 0) {
        outputPower -= 1;
    }

    console.log(`0 ${outputPower}`);
}
