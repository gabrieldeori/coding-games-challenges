const N = parseInt(readline());
const valuesSheet = {};
const operations = [];

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const operation = inputs[0];
    const arg1 = inputs[1];
    const arg2 = inputs[2];
    if (operation === "val") valuesSheet[`${i}`] = arg1;
    operations.push({operation, arg1, arg2});
}

for (let i = 0; i < N; i++) {
    console.log('1');
}
