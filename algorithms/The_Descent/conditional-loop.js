while (true) {
  higherMountain = 0;
  for (let i = 0; i < 8; i++) {
      const mountainH = parseInt(readline());
      if (mountainH > higherMountain) {
          higherMountain = mountainH;
          indexMountain = i;
      }
  }
  console.log(indexMountain);
}
