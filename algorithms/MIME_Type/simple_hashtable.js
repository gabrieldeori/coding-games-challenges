const N = parseInt(readline());
const Q = parseInt(readline());

const mapMime = new Map();

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXTENSIONS = inputs[0];
    const MIME_TYPES = inputs[1];
    mapMime.set(EXTENSIONS,MIME_TYPES)
}
for (let i = 0; i < Q; i++) {
    const FILE_NAME = readline();
}
console.log('NORESPONSE');
