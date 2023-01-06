const LON = readline();
const LAT = readline();
const N = parseInt(readline());
const greater = {};

function calcXY(A, B) {
  const y = B - A;
  const cosAB = Math.cos((A + B) / 2);
  const x = y * cosAB;
  return {x, y};
  }

  for (let i = 0; i < N; i++) {
  const [
    _id, name, _address, _phone, long, lati,
  ] = readline().split(";");

  // if (i === 0 || ) {
  //   greater = {
  //     addr,
  //     dist,
  //   }
  // }
  console.error(sliced)
}

console.log('answer');
