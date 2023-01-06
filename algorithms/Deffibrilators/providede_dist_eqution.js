const lonA = Number(readline().replace(",", "."));
const latA = Number(readline().replace(",", "."));
const N = parseInt(readline());
const prevDEFIB = {name: "", distance: 0};

function calcDistance(lonA, latA, lonB, latB) {
  // const EARTH_RADIUS = 6371; Not needed in this case.
  const lonDist = (lonB - lonA);
  const cosAB = Math.cos((latA + latB) / 2);
  const x = lonDist * cosAB;
  const y = latB - latA;
  const distance = Math.sqrt(x * x + y * y); // "* EARTH_RADIUS;"
  // Not needed in this case.
  return distance;
}

for (let i = 0; i < N; i++) {
  DEFIB = readline().split(";");
  const lonB = Number(DEFIB[4].replace(",", "."));
  const latB = Number(DEFIB[5].replace(",", "."));
  const distanceBeetween = calcDistance(lonA, latA, lonB, latB);
  if (i === 0 || distanceBeetween < prevDEFIB.distance) {
    prevDEFIB.name = DEFIB[1];
    prevDEFIB.distance = distanceBeetween;
  }
}
console.log(prevDEFIB.name);
