const N = parseInt(readline());
const firstPower = parseInt(readline());
const sortedArray = [];
sortedArray.push(firstPower);

for (let i = 1; i < N; i++) {
  const actualPower = parseInt(readline());
  for (let j = 0; j < sortedArray.length; j++) {
    if (actualPower < sortedArray[j]) {
      sortedArray.splice(j, 0, actualPower);
      j = sortedArray.length;
    } else if (j === sortedArray.length - 1) {
      sortedArray.push(actualPower);
      j = sortedArray.length;
    }
  }
}

let minDifference = sortedArray[1] - sortedArray[0];

for (let i = 0; i < sortedArray.length - 1; i++) {
  const actualDifference = sortedArray[i + 1] - sortedArray[i + 0];
  if (actualDifference < minDifference) {
    minDifference = actualDifference;
  }
}

console.log(minDifference);
