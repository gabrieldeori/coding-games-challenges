const LON = readline();
const LAT = readline();
const N = parseInt(readline());
const greater = {};

function calcDistance(A, B) {
  const y = B - A;
  const cosAB = Math.cos((A + B) / 2);
  const x = y * cosAB;
  const distance = Math.sqrt(x * x + y * y);
  return distance;
}

for (let i = 0; i < N; i++) {
  const [
    _id, name, _address, _phone, long, lati,
  ] = readline().split(";");

  const distanceBeetween = calcDistance(long, lati);
  // if (i === 0 || ) {
  //   greater = {
  //     addr,
  //     dist,
  //   }
  // }
  console.error(sliced)
}

console.log('answer');
