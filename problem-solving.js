/*jshint esversion:6*/

let counter = 0;

for (let i = 7; i <= 31; i++) {
  let arr = [];
  if (i % 5 === 0) {
    arr.push(`Tempat Fitness Tutup`);
  } else {
    if (counter % 2 === 0) {
      arr.push(`Tono`);
    }
    if (counter % 4 === 0) {
      arr.push(`Anton`);
    }
    if (counter % 5 === 0) {
      arr.push(`Budi`);
    }
  }
  console.log(`Tanggal ${i}: ` + arr.join(', '));
  counter++;
}
