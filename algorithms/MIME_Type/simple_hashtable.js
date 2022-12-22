const N = parseInt(readline());
const Q = parseInt(readline());

const mapMime = new Map();

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXTENSIONS = inputs[0];
    const MIME_TYPES = inputs[1];
    mapMime.set(EXTENSIONS, MIME_TYPES)
}
for (let i = 0; i < Q; i++) {
    const FILE_NAME = readline();
    let noisnetxe = [];
    let extension = "";

    for (let j = FILE_NAME.length - 1; j >= 0; j--) {
      if (FILE_NAME[j] === ".") {
        j = -1;
      } else {
        noisnetxe.push(FILE_NAME[j]);
      }
    }
    for (let j = noisnetxe.length - 1; j >= 0; j--) {
      extension += noisnetxe[j];
    }
    console.error(extension);
}
console.log('NORESPONSE');
