const N = parseInt(readline());
const Q = parseInt(readline());

const mapMime = {};

let response = "";

for (let i = 0; i < N; i++) {// objects has more performance than hashtables to store the table.
  var inputs = readline().split(' ');
  const EXTENSIONS = inputs[0].toLowerCase();
  const MIME_TYPES = inputs[1];
  mapMime[EXTENSIONS] = MIME_TYPES;
}
for (let i = 0; i < Q; i++) {
  const FILE_NAME = readline();
  let noisnetxe = [];
  let extension = "";
  for (let j = FILE_NAME.length - 1; j >= 0; j--) { // Reading string backwards to the first point.
    if (FILE_NAME[j] === ".") {
      j = -1;
    } else {
      noisnetxe.push(FILE_NAME[j]);
    }
  }
  for (let j = noisnetxe.length - 1; j >= 0; j--) { // Reading array backwards writing a string right.
    extension += noisnetxe[j].toLowerCase();
  }
  const mimeType = mapMime[extension];

  // Conditions for it to be a file with a valid extension.
  if (mimeType !== undefined && FILE_NAME !== `${extension}`) {
    response += mimeType + "\n";
  } else {
    response += "UNKNOWN\n";
  }
}
console.log(response);
