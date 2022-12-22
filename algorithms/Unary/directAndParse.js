const MESSAGE = readline().split('');
let finalResponse = "";
let lastBina = 3;
let debugPhrase = "";

for (let i = 0; i < MESSAGE.length; i++) {
  charCode = MESSAGE[i].charCodeAt(0); // 0 padrão para numeros
  charBina = charCode.toString(2).padStart(7, '0'); // 7bits

  for (let j = 0; j < charBina.length; j++) {
    if (charBina[j] != lastBina) {
      if (j != 0 || (j == 0 && i != 0)) finalResponse += " ";
      if (charBina[j] == 0) {
        finalResponse += "00 ";
      } else {
        finalResponse += "0 ";
      }
      lastBina = charBina[j];
    }
    finalResponse += "0";
  }
};
console.log(finalResponse);
