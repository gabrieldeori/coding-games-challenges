const L = parseInt(readline()); // Largura da letra
const H = parseInt(readline()); // Altura da letra
const T = readline(); // Texto a ser escrito em ASCII
const alphabetMapped = {}

for (let index = 0; index < 26; index++) {
  alphabetMapped[String.fromCharCode(97+index)] = index;
}

for (let i = 0; i < H; i++) {
  const TLower = T.toLowerCase();
  const ROW = readline(); // Uma string enorme com uma linha da fonte pré-fabricada
  let stringToPrint = "";
  for (let k = 0; k < TLower.length; k++) {

    if (TLower[k] in alphabetMapped) {
      const fSlice = alphabetMapped[TLower[k]] * L;
      const lSlice = fSlice + L
      const segmentToDisplay = ROW.slice(fSlice, lSlice);
      stringToPrint += segmentToDisplay;
    } else {
      const fSlice = 26 * L;
      const lSlice = fSlice + L
      const segmentToDisplay = ROW.slice(fSlice, lSlice);
      stringToPrint += segmentToDisplay;
    }
  };
  console.log(stringToPrint);
}
