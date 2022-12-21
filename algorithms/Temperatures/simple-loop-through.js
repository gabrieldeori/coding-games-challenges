const n = parseInt(readline());
var inputs = readline().split(' ');
let lowerTemp = 0;

for (let i = 0; i < n; i++) {
  const t = parseInt(inputs[i]);
  if (i === 0) {
    lowerTemp = t;
  } else {
    tAbs = Math.abs(t)
    lowerTempAbs = Math.abs(lowerTemp);
    if (tAbs < lowerTempAbs) {
      lowerTemp = t;
    } else if (tAbs == lowerTempAbs) {
      lowerTemp = tAbs;
    }
  }
}

console.log(lowerTemp);
